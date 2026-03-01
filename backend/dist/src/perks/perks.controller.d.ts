import type { User } from '@prisma/client';
import { PerksService } from './perks.service.js';
import { CreatePerkDto } from './dto/create-perk.dto.js';
import { UpdatePerkDto } from './dto/update-perk.dto.js';
export declare class PerksController {
    private readonly perksService;
    constructor(perksService: PerksService);
    create(user: User, dto: CreatePerkDto): Promise<{
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
    }>;
    findByVenue(venueId: string): Promise<{
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
    }[]>;
    update(user: User, id: string, dto: UpdatePerkDto): Promise<{
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
    }>;
    remove(user: User, id: string): Promise<{
        deleted: boolean;
    }>;
}
