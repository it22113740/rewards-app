import { PerkType } from '@prisma/client';
export declare class CreatePerkDto {
    venueId: string;
    pointsRequired: number;
    title: string;
    description?: string;
    type: PerkType;
    discountPercent?: number;
    promoCodePrefix?: string;
    imageUrl?: string;
}
