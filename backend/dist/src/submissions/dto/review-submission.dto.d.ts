import { SubmissionStatus } from '@prisma/client';
export declare class ReviewSubmissionDto {
    status: SubmissionStatus;
    rejectionReason?: string;
}
