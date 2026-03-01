import { SubmissionType } from '@prisma/client';
export declare class CreateSubmissionDto {
    venueId: string;
    type: SubmissionType;
    mediaUrl: string;
}
