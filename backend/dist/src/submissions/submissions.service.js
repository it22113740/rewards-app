"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const venues_service_js_1 = require("../venues/venues.service.js");
let SubmissionsService = class SubmissionsService {
    constructor(prisma, venuesService) {
        this.prisma = prisma;
        this.venuesService = venuesService;
    }
    async create(user, dto) {
        if (user.role !== 'USER') {
            throw new common_1.ForbiddenException('Only users can submit photos/videos at venues');
        }
        const venue = await this.prisma.venue.findUnique({
            where: { id: dto.venueId },
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        return this.prisma.submission.create({
            data: {
                userId: user.id,
                venueId: dto.venueId,
                type: dto.type,
                mediaUrl: dto.mediaUrl,
                status: client_1.SubmissionStatus.PENDING,
            },
            include: {
                venue: { select: { id: true, name: true } },
            },
        });
    }
    async createBatch(user, dto) {
        if (user.role !== 'USER') {
            throw new common_1.ForbiddenException('Only users can submit photos/videos at venues');
        }
        const venue = await this.prisma.venue.findUnique({
            where: { id: dto.venueId },
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        const submissions = await this.prisma.$transaction(dto.items.map((item) => this.prisma.submission.create({
            data: {
                userId: user.id,
                venueId: dto.venueId,
                type: item.type,
                mediaUrl: item.mediaUrl,
                status: client_1.SubmissionStatus.PENDING,
            },
            include: {
                venue: { select: { id: true, name: true } },
            },
        })));
        return { submissions };
    }
    async findMySubmissions(user, status) {
        return this.prisma.submission.findMany({
            where: {
                userId: user.id,
                ...(status && { status }),
            },
            orderBy: { createdAt: 'desc' },
            include: {
                venue: { select: { id: true, name: true } },
            },
        });
    }
    async getApprovedMediaForVenue(venueId) {
        const venue = await this.prisma.venue.findUnique({
            where: { id: venueId },
            select: { id: true },
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        return this.prisma.submission.findMany({
            where: {
                venueId,
                status: client_1.SubmissionStatus.APPROVED,
            },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                mediaUrl: true,
                type: true,
                createdAt: true,
            },
        });
    }
    async findByVenue(venueId, user, status) {
        await this.venuesService.findOneForOwner(user, venueId);
        return this.prisma.submission.findMany({
            where: {
                venueId,
                ...(status && { status }),
            },
            orderBy: { createdAt: 'desc' },
            include: {
                user: { select: { id: true, username: true, email: true } },
            },
        });
    }
    async findOneAndCheckOwnership(submissionId, user) {
        const submission = await this.prisma.submission.findUnique({
            where: { id: submissionId },
            include: { venue: { include: { owner: true } } },
        });
        if (!submission) {
            throw new common_1.NotFoundException('Submission not found');
        }
        if (submission.venue.owner.userId !== user.id) {
            throw new common_1.ForbiddenException('You do not own this venue');
        }
        if (submission.status !== client_1.SubmissionStatus.PENDING) {
            throw new common_1.BadRequestException('Submission has already been reviewed');
        }
        return submission;
    }
    async review(submissionId, user, dto) {
        if (dto.status === client_1.SubmissionStatus.PENDING) {
            throw new common_1.BadRequestException('Use APPROVED or REJECTED to review');
        }
        const submission = await this.findOneAndCheckOwnership(submissionId, user);
        if (dto.status === client_1.SubmissionStatus.REJECTED && !dto.rejectionReason?.trim()) {
            throw new common_1.BadRequestException('Rejection reason is required when rejecting');
        }
        const reviewedAt = new Date();
        const updates = {
            status: dto.status,
            reviewedAt,
            ...(dto.status === client_1.SubmissionStatus.REJECTED && { rejectionReason: dto.rejectionReason }),
        };
        if (dto.status === client_1.SubmissionStatus.APPROVED) {
            const venue = await this.prisma.venue.findUnique({
                where: { id: submission.venueId },
            });
            if (!venue)
                throw new common_1.NotFoundException('Venue not found');
            const points = submission.type === 'VIDEO' ? venue.pointsPerVideo : venue.pointsPerPhoto;
            updates.pointsAwarded = points;
            await this.prisma.$transaction([
                this.prisma.submission.update({
                    where: { id: submissionId },
                    data: updates,
                }),
                this.prisma.userVenuePoints.upsert({
                    where: {
                        userId_venueId: { userId: submission.userId, venueId: submission.venueId },
                    },
                    create: {
                        userId: submission.userId,
                        venueId: submission.venueId,
                        points,
                    },
                    update: { points: { increment: points } },
                }),
            ]);
        }
        else {
            await this.prisma.submission.update({
                where: { id: submissionId },
                data: updates,
            });
        }
        return this.prisma.submission.findUnique({
            where: { id: submissionId },
            include: {
                user: { select: { id: true, username: true, email: true } },
                venue: { select: { id: true, name: true } },
            },
        });
    }
};
exports.SubmissionsService = SubmissionsService;
exports.SubmissionsService = SubmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        venues_service_js_1.VenuesService])
], SubmissionsService);
//# sourceMappingURL=submissions.service.js.map