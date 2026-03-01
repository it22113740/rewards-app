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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_js_1 = require("../prisma/prisma.service.js");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { ownerProfile: true },
        });
        if (!user)
            return null;
        return this.sanitize(user);
    }
    async updateProfile(userId, dto) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { ownerProfile: true },
        });
        if (!user)
            return null;
        if (dto.email !== undefined && dto.email.toLowerCase() !== user.email) {
            const existing = await this.prisma.user.findUnique({
                where: { email: dto.email.toLowerCase() },
            });
            if (existing) {
                throw new common_1.ConflictException('An account with this email already exists');
            }
        }
        const userData = {};
        if (dto.username !== undefined)
            userData.username = dto.username;
        if (dto.email !== undefined)
            userData.email = dto.email.toLowerCase();
        if (dto.pushToken !== undefined)
            userData.pushToken = dto.pushToken;
        if (Object.keys(userData).length > 0) {
            await this.prisma.user.update({
                where: { id: userId },
                data: userData,
            });
        }
        if (user.role === client_1.Role.OWNER) {
            const ownerFields = dto.gmail !== undefined || dto.address !== undefined || dto.onboardingStep !== undefined;
            if (ownerFields && user.ownerProfile) {
                await this.prisma.ownerProfile.update({
                    where: { userId },
                    data: {
                        ...(dto.gmail !== undefined && { gmail: dto.gmail }),
                        ...(dto.address !== undefined && { address: dto.address }),
                        ...(dto.onboardingStep !== undefined && { onboardingStep: dto.onboardingStep }),
                    },
                });
            }
            else if (ownerFields) {
                await this.prisma.ownerProfile.create({
                    data: {
                        userId,
                        gmail: dto.gmail ?? user.email,
                        address: dto.address ?? '',
                        onboardingStep: dto.onboardingStep ?? 0,
                    },
                });
            }
        }
        const full = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { ownerProfile: true },
        });
        return full ? this.sanitize(full) : null;
    }
    async getMyPoints(userId) {
        const rows = await this.prisma.userVenuePoints.findMany({
            where: { userId },
            include: { venue: { select: { id: true, name: true } } },
        });
        const total = rows.reduce((sum, r) => sum + r.points, 0);
        const byVenue = rows.map((r) => ({
            venueId: r.venue.id,
            venueName: r.venue.name,
            points: r.points,
        }));
        return { total, byVenue };
    }
    sanitize(user) {
        const { passwordHash: _, ...rest } = user;
        return rest;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_js_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map