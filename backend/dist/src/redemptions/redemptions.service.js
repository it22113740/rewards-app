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
exports.RedemptionsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const venues_service_js_1 = require("../venues/venues.service.js");
let RedemptionsService = class RedemptionsService {
    constructor(prisma, venuesService) {
        this.prisma = prisma;
        this.venuesService = venuesService;
    }
    generatePromoCode(prefix) {
        const pre = (prefix?.trim() || 'RWD').toUpperCase().replace(/\s/g, '');
        const suffix = (0, crypto_1.randomBytes)(4).toString('hex').toUpperCase();
        return `${pre}-${suffix}`;
    }
    async redeem(user, perkId) {
        if (user.role !== 'USER') {
            throw new common_1.ForbiddenException('Only users can redeem perks');
        }
        const perk = await this.prisma.perk.findUnique({
            where: { id: perkId },
            include: { venue: true },
        });
        if (!perk) {
            throw new common_1.NotFoundException('Perk not found');
        }
        const balance = await this.prisma.userVenuePoints.findUnique({
            where: {
                userId_venueId: { userId: user.id, venueId: perk.venueId },
            },
        });
        const points = balance?.points ?? 0;
        if (points < perk.pointsRequired) {
            throw new common_1.BadRequestException(`Insufficient points. Required: ${perk.pointsRequired}, you have: ${points}`);
        }
        const promoCode = this.generatePromoCode(perk.promoCodePrefix);
        await this.prisma.$transaction([
            this.prisma.redemption.create({
                data: {
                    userId: user.id,
                    perkId: perk.id,
                    promoCode,
                    pointsSpent: perk.pointsRequired,
                    status: client_1.RedemptionStatus.ISSUED,
                },
            }),
            this.prisma.userVenuePoints.update({
                where: {
                    userId_venueId: { userId: user.id, venueId: perk.venueId },
                },
                data: { points: { decrement: perk.pointsRequired } },
            }),
        ]);
        return this.prisma.redemption.findFirst({
            where: { userId: user.id, perkId: perk.id, promoCode },
            include: {
                perk: { include: { venue: { select: { id: true, name: true } } } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findMyRedemptions(user) {
        return this.prisma.redemption.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' },
            include: {
                perk: { include: { venue: { select: { id: true, name: true } } } },
            },
        });
    }
    async findByVenue(venueId, user) {
        await this.venuesService.findOneForOwner(user, venueId);
        return this.prisma.redemption.findMany({
            where: { perk: { venueId } },
            orderBy: { createdAt: 'desc' },
            include: {
                user: { select: { id: true, username: true, email: true } },
                perk: { select: { id: true, title: true, pointsRequired: true } },
            },
        });
    }
    async markAsUsed(redemptionId, user) {
        const redemption = await this.prisma.redemption.findUnique({
            where: { id: redemptionId },
            include: { perk: { include: { venue: { include: { owner: true } } } } },
        });
        if (!redemption) {
            throw new common_1.NotFoundException('Redemption not found');
        }
        if (redemption.perk.venue.owner.userId !== user.id) {
            throw new common_1.ForbiddenException('You do not own this venue');
        }
        if (redemption.status === client_1.RedemptionStatus.USED) {
            throw new common_1.BadRequestException('Redemption is already marked as used');
        }
        const usedAt = new Date();
        await this.prisma.redemption.update({
            where: { id: redemptionId },
            data: { status: client_1.RedemptionStatus.USED, usedAt },
        });
        return this.prisma.redemption.findUnique({
            where: { id: redemptionId },
            include: {
                user: { select: { id: true, username: true, email: true } },
                perk: { include: { venue: { select: { id: true, name: true } } } },
            },
        });
    }
};
exports.RedemptionsService = RedemptionsService;
exports.RedemptionsService = RedemptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        venues_service_js_1.VenuesService])
], RedemptionsService);
//# sourceMappingURL=redemptions.service.js.map