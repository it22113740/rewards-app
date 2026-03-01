import type { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';
import { VenuesService } from '../venues/venues.service.js';
export declare class RedemptionsService {
    private readonly prisma;
    private readonly venuesService;
    constructor(prisma: PrismaService, venuesService: VenuesService);
    private generatePromoCode;
    redeem(user: User, perkId: string): Promise<({
        perk: {
            venue: {
                id: string;
                name: string;
            };
        } & {
            type: import(".prisma/client").$Enums.PerkType;
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            venueId: string;
            imageUrl: string | null;
            pointsRequired: number;
            discountPercent: number | null;
            promoCodePrefix: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.RedemptionStatus;
        perkId: string;
        promoCode: string;
        pointsSpent: number;
        usedAt: Date | null;
    }) | null>;
    findMyRedemptions(user: User): Promise<({
        perk: {
            venue: {
                id: string;
                name: string;
            };
        } & {
            type: import(".prisma/client").$Enums.PerkType;
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            venueId: string;
            imageUrl: string | null;
            pointsRequired: number;
            discountPercent: number | null;
            promoCodePrefix: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.RedemptionStatus;
        perkId: string;
        promoCode: string;
        pointsSpent: number;
        usedAt: Date | null;
    })[]>;
    findByVenue(venueId: string, user: User): Promise<({
        user: {
            username: string | null;
            email: string;
            id: string;
        };
        perk: {
            title: string;
            id: string;
            pointsRequired: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.RedemptionStatus;
        perkId: string;
        promoCode: string;
        pointsSpent: number;
        usedAt: Date | null;
    })[]>;
    markAsUsed(redemptionId: string, user: User): Promise<({
        user: {
            username: string | null;
            email: string;
            id: string;
        };
        perk: {
            venue: {
                id: string;
                name: string;
            };
        } & {
            type: import(".prisma/client").$Enums.PerkType;
            description: string | null;
            title: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            venueId: string;
            imageUrl: string | null;
            pointsRequired: number;
            discountPercent: number | null;
            promoCodePrefix: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.RedemptionStatus;
        perkId: string;
        promoCode: string;
        pointsSpent: number;
        usedAt: Date | null;
    }) | null>;
}
