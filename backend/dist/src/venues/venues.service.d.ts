import type { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateVenueDto } from './dto/create-venue.dto.js';
import { UpdateVenueDto } from './dto/update-venue.dto.js';
export declare class VenuesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private getOwnerProfileIdForUser;
    createForOwner(user: User, dto: CreateVenueDto): Promise<{
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
    }>;
    findMine(user: User): Promise<{
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
    }[]>;
    findOneForOwner(user: User, venueId: string): Promise<{
        owner: {
            gmail: string;
            address: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            onboardingStep: number;
            userId: string;
        };
    } & {
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
    }>;
    updateForOwner(user: User, venueId: string, dto: UpdateVenueDto): Promise<{
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
    }>;
    deleteForOwner(user: User, venueId: string): Promise<{
        deleted: boolean;
    }>;
    findAll(limit?: number, offset?: number): Promise<{
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        submissions: {
            type: import(".prisma/client").$Enums.SubmissionType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            venueId: string;
            mediaUrl: string;
            status: import(".prisma/client").$Enums.SubmissionStatus;
            rejectionReason: string | null;
            reviewedAt: Date | null;
            pointsAwarded: number | null;
        }[];
        name: string;
        _count: {
            owner: number;
            perks: number;
            submissions: number;
            points: number;
        };
        points: {
            id: string;
            updatedAt: Date;
            userId: string;
            venueId: string;
            points: number;
        }[];
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
        owner: {
            gmail: string;
            address: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            onboardingStep: number;
            userId: string;
        };
        perks: {
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
        }[];
    }[]>;
    findNearby(lat: number, lng: number, radiusMeters?: number): Promise<{
        distance: number;
        description: string | null;
        address: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        ownerId: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        category: string | null;
        imageUrl: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
    }[]>;
    private haversineDistance;
}
