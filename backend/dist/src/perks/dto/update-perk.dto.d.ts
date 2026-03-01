import { PerkType } from '@prisma/client';
export declare class UpdatePerkDto {
    pointsRequired?: number;
    title?: string;
    description?: string;
    type?: PerkType;
    discountPercent?: number;
    promoCodePrefix?: string;
    imageUrl?: string;
}
