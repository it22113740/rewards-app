export declare const Role: {
    readonly OWNER: "OWNER";
    readonly USER: "USER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SubmissionType: {
    readonly PHOTO: "PHOTO";
    readonly VIDEO: "VIDEO";
};
export type SubmissionType = (typeof SubmissionType)[keyof typeof SubmissionType];
export declare const SubmissionStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus];
export declare const RedemptionStatus: {
    readonly ISSUED: "ISSUED";
    readonly USED: "USED";
};
export type RedemptionStatus = (typeof RedemptionStatus)[keyof typeof RedemptionStatus];
export declare const PerkType: {
    readonly DISCOUNT: "DISCOUNT";
    readonly FREE_MEAL: "FREE_MEAL";
    readonly OTHER: "OTHER";
};
export type PerkType = (typeof PerkType)[keyof typeof PerkType];
