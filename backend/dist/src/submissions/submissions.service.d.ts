import type { User } from '@prisma/client';
import { SubmissionStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';
import { VenuesService } from '../venues/venues.service.js';
import { CreateSubmissionDto } from './dto/create-submission.dto.js';
import { CreateSubmissionsBatchDto } from './dto/create-submissions-batch.dto.js';
import { ReviewSubmissionDto } from './dto/review-submission.dto.js';
export declare class SubmissionsService {
    private readonly prisma;
    private readonly venuesService;
    constructor(prisma: PrismaService, venuesService: VenuesService);
    create(user: User, dto: CreateSubmissionDto): Promise<{
        venue: {
            id: string;
            name: string;
        };
    } & {
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
    }>;
    createBatch(user: User, dto: CreateSubmissionsBatchDto): Promise<{
        submissions: ({
            venue: {
                id: string;
                name: string;
            };
        } & {
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
        })[];
    }>;
    findMySubmissions(user: User, status?: SubmissionStatus): Promise<({
        venue: {
            id: string;
            name: string;
        };
    } & {
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
    })[]>;
    getApprovedMediaForVenue(venueId: string): Promise<{
        type: import(".prisma/client").$Enums.SubmissionType;
        id: string;
        createdAt: Date;
        mediaUrl: string;
    }[]>;
    findByVenue(venueId: string, user: User, status?: SubmissionStatus): Promise<({
        user: {
            username: string | null;
            email: string;
            id: string;
        };
    } & {
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
    })[]>;
    findOneAndCheckOwnership(submissionId: string, user: User): Promise<{
        venue: {
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
        };
    } & {
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
    }>;
    review(submissionId: string, user: User, dto: ReviewSubmissionDto): Promise<({
        user: {
            username: string | null;
            email: string;
            id: string;
        };
        venue: {
            id: string;
            name: string;
        };
    } & {
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
    }) | null>;
}
