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
exports.VenuesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
let VenuesService = class VenuesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOwnerProfileIdForUser(userId) {
        const ownerProfile = await this.prisma.ownerProfile.findUnique({
            where: { userId },
        });
        if (!ownerProfile) {
            throw new common_1.ForbiddenException('Owner profile not found for this user');
        }
        return ownerProfile.id;
    }
    async createForOwner(user, dto) {
        if (user.role !== 'OWNER') {
            throw new common_1.ForbiddenException('Only owners can create venues');
        }
        const ownerId = await this.getOwnerProfileIdForUser(user.id);
        return this.prisma.venue.create({
            data: {
                ownerId,
                name: dto.name,
                address: dto.address,
                lat: dto.lat,
                lng: dto.lng,
                radiusMeters: dto.radiusMeters,
                pointsPerVideo: dto.pointsPerVideo,
                pointsPerPhoto: dto.pointsPerPhoto,
                category: dto.category,
                description: dto.description,
                ...(dto.imageUrl != null && { imageUrl: dto.imageUrl }),
            },
        });
    }
    async findMine(user) {
        if (user.role !== 'OWNER') {
            throw new common_1.ForbiddenException('Only owners can list their venues');
        }
        return this.prisma.venue.findMany({
            where: {
                owner: { userId: user.id },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOneForOwner(user, venueId) {
        const venue = await this.prisma.venue.findUnique({
            where: { id: venueId },
            include: { owner: true },
        });
        if (!venue) {
            throw new common_1.NotFoundException('Venue not found');
        }
        if (venue.owner.userId !== user.id) {
            throw new common_1.ForbiddenException('You do not own this venue');
        }
        return venue;
    }
    async updateForOwner(user, venueId, dto) {
        await this.findOneForOwner(user, venueId);
        return this.prisma.venue.update({
            where: { id: venueId },
            data: {
                ...(dto.name !== undefined && { name: dto.name }),
                ...(dto.address !== undefined && { address: dto.address }),
                ...(dto.lat !== undefined && { lat: dto.lat }),
                ...(dto.lng !== undefined && { lng: dto.lng }),
                ...(dto.radiusMeters !== undefined && { radiusMeters: dto.radiusMeters }),
                ...(dto.pointsPerVideo !== undefined && { pointsPerVideo: dto.pointsPerVideo }),
                ...(dto.pointsPerPhoto !== undefined && { pointsPerPhoto: dto.pointsPerPhoto }),
                ...(dto.category !== undefined && { category: dto.category }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(dto.imageUrl !== undefined && { imageUrl: dto.imageUrl }),
            },
        });
    }
    async deleteForOwner(user, venueId) {
        await this.findOneForOwner(user, venueId);
        await this.prisma.venue.delete({ where: { id: venueId } });
        return { deleted: true };
    }
    async findAll(limit = 100, offset = 0) {
        const select = {
            id: true,
            name: true,
            description: true,
            category: true,
            imageUrl: true,
            address: true,
            pointsPerPhoto: true,
            pointsPerVideo: true,
            lat: true,
            lng: true,
        };
        return this.prisma.venue.findMany({
            take: Math.min(limit, 100),
            skip: offset,
            orderBy: { createdAt: 'desc' },
            select,
        });
    }
    async findNearby(lat, lng, radiusMeters) {
        const radius = radiusMeters ?? 300;
        const venues = await this.prisma.venue.findMany();
        const withDistance = venues
            .map((v) => ({
            ...v,
            distance: this.haversineDistance(lat, lng, v.lat, v.lng),
        }))
            .filter((v) => v.distance <= (v.radiusMeters || radius));
        withDistance.sort((a, b) => a.distance - b.distance);
        return withDistance;
    }
    haversineDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3;
        const toRad = (deg) => (deg * Math.PI) / 180;
        const φ1 = toRad(lat1);
        const φ2 = toRad(lat2);
        const Δφ = toRad(lat2 - lat1);
        const Δλ = toRad(lon2 - lon1);
        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
};
exports.VenuesService = VenuesService;
exports.VenuesService = VenuesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService])
], VenuesService);
//# sourceMappingURL=venues.service.js.map