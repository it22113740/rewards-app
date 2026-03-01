import type { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';
import { VenuesService } from '../venues/venues.service.js';
import { CreatePerkDto } from './dto/create-perk.dto.js';
import { UpdatePerkDto } from './dto/update-perk.dto.js';
export declare class PerksService {
    private readonly prisma;
    private readonly venuesService;
    constructor(prisma: PrismaService, venuesService: VenuesService);
    createForOwner(user: User, dto: CreatePerkDto): Promise<{
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
    private findOneAndCheckOwnership;
    updateForOwner(user: User, perkId: string, dto: UpdatePerkDto): Promise<{
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
    deleteForOwner(user: User, perkId: string): Promise<{
        deleted: boolean;
    }>;
}
