import type { User } from '@prisma/client';
import { RedemptionsService } from './redemptions.service.js';
import { RedeemPerkDto } from './dto/redeem-perk.dto.js';
export declare class RedemptionsController {
    private readonly redemptionsService;
    constructor(redemptionsService: RedemptionsService);
    redeem(user: User, dto: RedeemPerkDto): Promise<({
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
    findMine(user: User): Promise<({
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
    findByVenue(user: User, venueId: string): Promise<({
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
    markAsUsed(user: User, id: string): Promise<({
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
