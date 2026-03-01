"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.NotificationScalarFieldEnum = exports.RedemptionScalarFieldEnum = exports.UserVenuePointsScalarFieldEnum = exports.SubmissionScalarFieldEnum = exports.PerkScalarFieldEnum = exports.VenueScalarFieldEnum = exports.OwnerProfileScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    OwnerProfile: 'OwnerProfile',
    Venue: 'Venue',
    Perk: 'Perk',
    Submission: 'Submission',
    UserVenuePoints: 'UserVenuePoints',
    Redemption: 'Redemption',
    Notification: 'Notification'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    username: 'username',
    passwordHash: 'passwordHash',
    role: 'role',
    pushToken: 'pushToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OwnerProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    gmail: 'gmail',
    address: 'address',
    onboardingStep: 'onboardingStep',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VenueScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    radiusMeters: 'radiusMeters',
    description: 'description',
    category: 'category',
    pointsPerVideo: 'pointsPerVideo',
    pointsPerPhoto: 'pointsPerPhoto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PerkScalarFieldEnum = {
    id: 'id',
    venueId: 'venueId',
    pointsRequired: 'pointsRequired',
    title: 'title',
    description: 'description',
    type: 'type',
    discountPercent: 'discountPercent',
    promoCodePrefix: 'promoCodePrefix',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SubmissionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    venueId: 'venueId',
    type: 'type',
    mediaUrl: 'mediaUrl',
    status: 'status',
    rejectionReason: 'rejectionReason',
    reviewedAt: 'reviewedAt',
    pointsAwarded: 'pointsAwarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserVenuePointsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    venueId: 'venueId',
    points: 'points',
    updatedAt: 'updatedAt'
};
exports.RedemptionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    perkId: 'perkId',
    promoCode: 'promoCode',
    pointsSpent: 'pointsSpent',
    status: 'status',
    usedAt: 'usedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    data: 'data',
    readAt: 'readAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map