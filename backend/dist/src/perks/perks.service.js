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
exports.PerksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
const venues_service_js_1 = require("../venues/venues.service.js");
let PerksService = class PerksService {
    constructor(prisma, venuesService) {
        this.prisma = prisma;
        this.venuesService = venuesService;
    }
    async createForOwner(user, dto) {
        if (user.role !== 'OWNER') {
            throw new common_1.ForbiddenException('Only owners can create perks');
        }
        await this.venuesService.findOneForOwner(user, dto.venueId);
        return this.prisma.perk.create({
            data: {
                venueId: dto.venueId,
                pointsRequired: dto.pointsRequired,
                title: dto.title,
                description: dto.description,
                type: dto.type,
                discountPercent: dto.discountPercent,
                promoCodePrefix: dto.promoCodePrefix,
                imageUrl: dto.imageUrl,
            },
        });
    }
    async findByVenue(venueId) {
        const venue = await this.prisma.venue.findUnique({
            where: { id: venueId },
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        return this.prisma.perk.findMany({
            where: { venueId },
            orderBy: { pointsRequired: 'asc' },
        });
    }
    async findOneAndCheckOwnership(perkId, user) {
        const perk = await this.prisma.perk.findUnique({
            where: { id: perkId },
            include: { venue: { include: { owner: true } } },
        });
        if (!perk) {
            throw new common_1.NotFoundException('Perk not found');
        }
        if (perk.venue.owner.userId !== user.id) {
            throw new common_1.ForbiddenException('You do not own this perk');
        }
        return perk;
    }
    async updateForOwner(user, perkId, dto) {
        await this.findOneAndCheckOwnership(perkId, user);
        return this.prisma.perk.update({
            where: { id: perkId },
            data: {
                ...(dto.pointsRequired !== undefined && { pointsRequired: dto.pointsRequired }),
                ...(dto.title !== undefined && { title: dto.title }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(dto.type !== undefined && { type: dto.type }),
                ...(dto.discountPercent !== undefined && { discountPercent: dto.discountPercent }),
                ...(dto.promoCodePrefix !== undefined && { promoCodePrefix: dto.promoCodePrefix }),
                ...(dto.imageUrl !== undefined && { imageUrl: dto.imageUrl }),
            },
        });
    }
    async deleteForOwner(user, perkId) {
        await this.findOneAndCheckOwnership(perkId, user);
        await this.prisma.perk.delete({ where: { id: perkId } });
        return { deleted: true };
    }
};
exports.PerksService = PerksService;
exports.PerksService = PerksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService,
        venues_service_js_1.VenuesService])
], PerksService);
//# sourceMappingURL=perks.service.js.map