import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly OwnerProfile: "OwnerProfile";
    readonly Venue: "Venue";
    readonly Perk: "Perk";
    readonly Submission: "Submission";
    readonly UserVenuePoints: "UserVenuePoints";
    readonly Redemption: "Redemption";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly pushToken: "pushToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OwnerProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly gmail: "gmail";
    readonly address: "address";
    readonly onboardingStep: "onboardingStep";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OwnerProfileScalarFieldEnum = (typeof OwnerProfileScalarFieldEnum)[keyof typeof OwnerProfileScalarFieldEnum];
export declare const VenueScalarFieldEnum: {
    readonly id: "id";
    readonly ownerId: "ownerId";
    readonly name: "name";
    readonly address: "address";
    readonly lat: "lat";
    readonly lng: "lng";
    readonly radiusMeters: "radiusMeters";
    readonly description: "description";
    readonly category: "category";
    readonly pointsPerVideo: "pointsPerVideo";
    readonly pointsPerPhoto: "pointsPerPhoto";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum];
export declare const PerkScalarFieldEnum: {
    readonly id: "id";
    readonly venueId: "venueId";
    readonly pointsRequired: "pointsRequired";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly discountPercent: "discountPercent";
    readonly promoCodePrefix: "promoCodePrefix";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PerkScalarFieldEnum = (typeof PerkScalarFieldEnum)[keyof typeof PerkScalarFieldEnum];
export declare const SubmissionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly venueId: "venueId";
    readonly type: "type";
    readonly mediaUrl: "mediaUrl";
    readonly status: "status";
    readonly rejectionReason: "rejectionReason";
    readonly reviewedAt: "reviewedAt";
    readonly pointsAwarded: "pointsAwarded";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum];
export declare const UserVenuePointsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly venueId: "venueId";
    readonly points: "points";
    readonly updatedAt: "updatedAt";
};
export type UserVenuePointsScalarFieldEnum = (typeof UserVenuePointsScalarFieldEnum)[keyof typeof UserVenuePointsScalarFieldEnum];
export declare const RedemptionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly perkId: "perkId";
    readonly promoCode: "promoCode";
    readonly pointsSpent: "pointsSpent";
    readonly status: "status";
    readonly usedAt: "usedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RedemptionScalarFieldEnum = (typeof RedemptionScalarFieldEnum)[keyof typeof RedemptionScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly data: "data";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
