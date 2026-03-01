import type { User } from '@prisma/client';
import { SubmissionStatus } from '@prisma/client';
import { SubmissionsService } from './submissions.service.js';
import { CreateSubmissionDto } from './dto/create-submission.dto.js';
import { CreateSubmissionsBatchDto } from './dto/create-submissions-batch.dto.js';
import { ReviewSubmissionDto } from './dto/review-submission.dto.js';
export declare class SubmissionsController {
    private readonly submissionsService;
    constructor(submissionsService: SubmissionsService);
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
    findMine(user: User, status?: SubmissionStatus): Promise<({
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
    findByVenue(user: User, venueId: string, status?: SubmissionStatus): Promise<({
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
    review(user: User, id: string, dto: ReviewSubmissionDto): Promise<({
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
