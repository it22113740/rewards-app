import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VenueModel = runtime.Types.Result.DefaultSelection<Prisma.$VenuePayload>;
export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null;
    _avg: VenueAvgAggregateOutputType | null;
    _sum: VenueSumAggregateOutputType | null;
    _min: VenueMinAggregateOutputType | null;
    _max: VenueMaxAggregateOutputType | null;
};
export type VenueAvgAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    radiusMeters: number | null;
    pointsPerVideo: number | null;
    pointsPerPhoto: number | null;
};
export type VenueSumAggregateOutputType = {
    lat: number | null;
    lng: number | null;
    radiusMeters: number | null;
    pointsPerVideo: number | null;
    pointsPerPhoto: number | null;
};
export type VenueMinAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    name: string | null;
    address: string | null;
    lat: number | null;
    lng: number | null;
    radiusMeters: number | null;
    description: string | null;
    category: string | null;
    pointsPerVideo: number | null;
    pointsPerPhoto: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VenueMaxAggregateOutputType = {
    id: string | null;
    ownerId: string | null;
    name: string | null;
    address: string | null;
    lat: number | null;
    lng: number | null;
    radiusMeters: number | null;
    description: string | null;
    category: string | null;
    pointsPerVideo: number | null;
    pointsPerPhoto: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VenueCountAggregateOutputType = {
    id: number;
    ownerId: number;
    name: number;
    address: number;
    lat: number;
    lng: number;
    radiusMeters: number;
    description: number;
    category: number;
    pointsPerVideo: number;
    pointsPerPhoto: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VenueAvgAggregateInputType = {
    lat?: true;
    lng?: true;
    radiusMeters?: true;
    pointsPerVideo?: true;
    pointsPerPhoto?: true;
};
export type VenueSumAggregateInputType = {
    lat?: true;
    lng?: true;
    radiusMeters?: true;
    pointsPerVideo?: true;
    pointsPerPhoto?: true;
};
export type VenueMinAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    radiusMeters?: true;
    description?: true;
    category?: true;
    pointsPerVideo?: true;
    pointsPerPhoto?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VenueMaxAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    radiusMeters?: true;
    description?: true;
    category?: true;
    pointsPerVideo?: true;
    pointsPerPhoto?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VenueCountAggregateInputType = {
    id?: true;
    ownerId?: true;
    name?: true;
    address?: true;
    lat?: true;
    lng?: true;
    radiusMeters?: true;
    description?: true;
    category?: true;
    pointsPerVideo?: true;
    pointsPerPhoto?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VenueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput | Prisma.VenueOrderByWithRelationInput[];
    cursor?: Prisma.VenueWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VenueCountAggregateInputType;
    _avg?: VenueAvgAggregateInputType;
    _sum?: VenueSumAggregateInputType;
    _min?: VenueMinAggregateInputType;
    _max?: VenueMaxAggregateInputType;
};
export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
    [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVenue[P]> : Prisma.GetScalarType<T[P], AggregateVenue[P]>;
};
export type VenueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithAggregationInput | Prisma.VenueOrderByWithAggregationInput[];
    by: Prisma.VenueScalarFieldEnum[] | Prisma.VenueScalarFieldEnum;
    having?: Prisma.VenueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VenueCountAggregateInputType | true;
    _avg?: VenueAvgAggregateInputType;
    _sum?: VenueSumAggregateInputType;
    _min?: VenueMinAggregateInputType;
    _max?: VenueMaxAggregateInputType;
};
export type VenueGroupByOutputType = {
    id: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters: number;
    description: string | null;
    category: string | null;
    pointsPerVideo: number;
    pointsPerPhoto: number;
    createdAt: Date;
    updatedAt: Date;
    _count: VenueCountAggregateOutputType | null;
    _avg: VenueAvgAggregateOutputType | null;
    _sum: VenueSumAggregateOutputType | null;
    _min: VenueMinAggregateOutputType | null;
    _max: VenueMaxAggregateOutputType | null;
};
type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VenueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VenueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VenueGroupByOutputType[P]>;
}>>;
export type VenueWhereInput = {
    AND?: Prisma.VenueWhereInput | Prisma.VenueWhereInput[];
    OR?: Prisma.VenueWhereInput[];
    NOT?: Prisma.VenueWhereInput | Prisma.VenueWhereInput[];
    id?: Prisma.StringFilter<"Venue"> | string;
    ownerId?: Prisma.StringFilter<"Venue"> | string;
    name?: Prisma.StringFilter<"Venue"> | string;
    address?: Prisma.StringFilter<"Venue"> | string;
    lat?: Prisma.FloatFilter<"Venue"> | number;
    lng?: Prisma.FloatFilter<"Venue"> | number;
    radiusMeters?: Prisma.IntFilter<"Venue"> | number;
    description?: Prisma.StringNullableFilter<"Venue"> | string | null;
    category?: Prisma.StringNullableFilter<"Venue"> | string | null;
    pointsPerVideo?: Prisma.IntFilter<"Venue"> | number;
    pointsPerPhoto?: Prisma.IntFilter<"Venue"> | number;
    createdAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
    owner?: Prisma.XOR<Prisma.OwnerProfileScalarRelationFilter, Prisma.OwnerProfileWhereInput>;
    perks?: Prisma.PerkListRelationFilter;
    submissions?: Prisma.SubmissionListRelationFilter;
    points?: Prisma.UserVenuePointsListRelationFilter;
};
export type VenueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.OwnerProfileOrderByWithRelationInput;
    perks?: Prisma.PerkOrderByRelationAggregateInput;
    submissions?: Prisma.SubmissionOrderByRelationAggregateInput;
    points?: Prisma.UserVenuePointsOrderByRelationAggregateInput;
};
export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VenueWhereInput | Prisma.VenueWhereInput[];
    OR?: Prisma.VenueWhereInput[];
    NOT?: Prisma.VenueWhereInput | Prisma.VenueWhereInput[];
    ownerId?: Prisma.StringFilter<"Venue"> | string;
    name?: Prisma.StringFilter<"Venue"> | string;
    address?: Prisma.StringFilter<"Venue"> | string;
    lat?: Prisma.FloatFilter<"Venue"> | number;
    lng?: Prisma.FloatFilter<"Venue"> | number;
    radiusMeters?: Prisma.IntFilter<"Venue"> | number;
    description?: Prisma.StringNullableFilter<"Venue"> | string | null;
    category?: Prisma.StringNullableFilter<"Venue"> | string | null;
    pointsPerVideo?: Prisma.IntFilter<"Venue"> | number;
    pointsPerPhoto?: Prisma.IntFilter<"Venue"> | number;
    createdAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
    owner?: Prisma.XOR<Prisma.OwnerProfileScalarRelationFilter, Prisma.OwnerProfileWhereInput>;
    perks?: Prisma.PerkListRelationFilter;
    submissions?: Prisma.SubmissionListRelationFilter;
    points?: Prisma.UserVenuePointsListRelationFilter;
}, "id">;
export type VenueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VenueCountOrderByAggregateInput;
    _avg?: Prisma.VenueAvgOrderByAggregateInput;
    _max?: Prisma.VenueMaxOrderByAggregateInput;
    _min?: Prisma.VenueMinOrderByAggregateInput;
    _sum?: Prisma.VenueSumOrderByAggregateInput;
};
export type VenueScalarWhereWithAggregatesInput = {
    AND?: Prisma.VenueScalarWhereWithAggregatesInput | Prisma.VenueScalarWhereWithAggregatesInput[];
    OR?: Prisma.VenueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VenueScalarWhereWithAggregatesInput | Prisma.VenueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Venue"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Venue"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Venue"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Venue"> | string;
    lat?: Prisma.FloatWithAggregatesFilter<"Venue"> | number;
    lng?: Prisma.FloatWithAggregatesFilter<"Venue"> | number;
    radiusMeters?: Prisma.IntWithAggregatesFilter<"Venue"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"Venue"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Venue"> | string | null;
    pointsPerVideo?: Prisma.IntWithAggregatesFilter<"Venue"> | number;
    pointsPerPhoto?: Prisma.IntWithAggregatesFilter<"Venue"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Venue"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Venue"> | Date | string;
};
export type VenueCreateInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.OwnerProfileCreateNestedOneWithoutVenuesInput;
    perks?: Prisma.PerkCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsCreateNestedManyWithoutVenueInput;
};
export type VenueUncheckedCreateInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perks?: Prisma.PerkUncheckedCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsUncheckedCreateNestedManyWithoutVenueInput;
};
export type VenueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.OwnerProfileUpdateOneRequiredWithoutVenuesNestedInput;
    perks?: Prisma.PerkUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perks?: Prisma.PerkUncheckedUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUncheckedUpdateManyWithoutVenueNestedInput;
};
export type VenueCreateManyInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VenueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenueListRelationFilter = {
    every?: Prisma.VenueWhereInput;
    some?: Prisma.VenueWhereInput;
    none?: Prisma.VenueWhereInput;
};
export type VenueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VenueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenueAvgOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
};
export type VenueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VenueSumOrderByAggregateInput = {
    lat?: Prisma.SortOrder;
    lng?: Prisma.SortOrder;
    radiusMeters?: Prisma.SortOrder;
    pointsPerVideo?: Prisma.SortOrder;
    pointsPerPhoto?: Prisma.SortOrder;
};
export type VenueScalarRelationFilter = {
    is?: Prisma.VenueWhereInput;
    isNot?: Prisma.VenueWhereInput;
};
export type VenueCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput> | Prisma.VenueCreateWithoutOwnerInput[] | Prisma.VenueUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutOwnerInput | Prisma.VenueCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.VenueCreateManyOwnerInputEnvelope;
    connect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
};
export type VenueUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput> | Prisma.VenueCreateWithoutOwnerInput[] | Prisma.VenueUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutOwnerInput | Prisma.VenueCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.VenueCreateManyOwnerInputEnvelope;
    connect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
};
export type VenueUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput> | Prisma.VenueCreateWithoutOwnerInput[] | Prisma.VenueUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutOwnerInput | Prisma.VenueCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.VenueUpsertWithWhereUniqueWithoutOwnerInput | Prisma.VenueUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.VenueCreateManyOwnerInputEnvelope;
    set?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    disconnect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    delete?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    connect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    update?: Prisma.VenueUpdateWithWhereUniqueWithoutOwnerInput | Prisma.VenueUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.VenueUpdateManyWithWhereWithoutOwnerInput | Prisma.VenueUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.VenueScalarWhereInput | Prisma.VenueScalarWhereInput[];
};
export type VenueUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput> | Prisma.VenueCreateWithoutOwnerInput[] | Prisma.VenueUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutOwnerInput | Prisma.VenueCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.VenueUpsertWithWhereUniqueWithoutOwnerInput | Prisma.VenueUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.VenueCreateManyOwnerInputEnvelope;
    set?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    disconnect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    delete?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    connect?: Prisma.VenueWhereUniqueInput | Prisma.VenueWhereUniqueInput[];
    update?: Prisma.VenueUpdateWithWhereUniqueWithoutOwnerInput | Prisma.VenueUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.VenueUpdateManyWithWhereWithoutOwnerInput | Prisma.VenueUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.VenueScalarWhereInput | Prisma.VenueScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type VenueCreateNestedOneWithoutPerksInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutPerksInput, Prisma.VenueUncheckedCreateWithoutPerksInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutPerksInput;
    connect?: Prisma.VenueWhereUniqueInput;
};
export type VenueUpdateOneRequiredWithoutPerksNestedInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutPerksInput, Prisma.VenueUncheckedCreateWithoutPerksInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutPerksInput;
    upsert?: Prisma.VenueUpsertWithoutPerksInput;
    connect?: Prisma.VenueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VenueUpdateToOneWithWhereWithoutPerksInput, Prisma.VenueUpdateWithoutPerksInput>, Prisma.VenueUncheckedUpdateWithoutPerksInput>;
};
export type VenueCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutSubmissionsInput, Prisma.VenueUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.VenueWhereUniqueInput;
};
export type VenueUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutSubmissionsInput, Prisma.VenueUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.VenueUpsertWithoutSubmissionsInput;
    connect?: Prisma.VenueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VenueUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.VenueUpdateWithoutSubmissionsInput>, Prisma.VenueUncheckedUpdateWithoutSubmissionsInput>;
};
export type VenueCreateNestedOneWithoutPointsInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutPointsInput, Prisma.VenueUncheckedCreateWithoutPointsInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutPointsInput;
    connect?: Prisma.VenueWhereUniqueInput;
};
export type VenueUpdateOneRequiredWithoutPointsNestedInput = {
    create?: Prisma.XOR<Prisma.VenueCreateWithoutPointsInput, Prisma.VenueUncheckedCreateWithoutPointsInput>;
    connectOrCreate?: Prisma.VenueCreateOrConnectWithoutPointsInput;
    upsert?: Prisma.VenueUpsertWithoutPointsInput;
    connect?: Prisma.VenueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VenueUpdateToOneWithWhereWithoutPointsInput, Prisma.VenueUpdateWithoutPointsInput>, Prisma.VenueUncheckedUpdateWithoutPointsInput>;
};
export type VenueCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perks?: Prisma.PerkCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsCreateNestedManyWithoutVenueInput;
};
export type VenueUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perks?: Prisma.PerkUncheckedCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsUncheckedCreateNestedManyWithoutVenueInput;
};
export type VenueCreateOrConnectWithoutOwnerInput = {
    where: Prisma.VenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput>;
};
export type VenueCreateManyOwnerInputEnvelope = {
    data: Prisma.VenueCreateManyOwnerInput | Prisma.VenueCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type VenueUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.VenueWhereUniqueInput;
    update: Prisma.XOR<Prisma.VenueUpdateWithoutOwnerInput, Prisma.VenueUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.VenueCreateWithoutOwnerInput, Prisma.VenueUncheckedCreateWithoutOwnerInput>;
};
export type VenueUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.VenueWhereUniqueInput;
    data: Prisma.XOR<Prisma.VenueUpdateWithoutOwnerInput, Prisma.VenueUncheckedUpdateWithoutOwnerInput>;
};
export type VenueUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.VenueScalarWhereInput;
    data: Prisma.XOR<Prisma.VenueUpdateManyMutationInput, Prisma.VenueUncheckedUpdateManyWithoutOwnerInput>;
};
export type VenueScalarWhereInput = {
    AND?: Prisma.VenueScalarWhereInput | Prisma.VenueScalarWhereInput[];
    OR?: Prisma.VenueScalarWhereInput[];
    NOT?: Prisma.VenueScalarWhereInput | Prisma.VenueScalarWhereInput[];
    id?: Prisma.StringFilter<"Venue"> | string;
    ownerId?: Prisma.StringFilter<"Venue"> | string;
    name?: Prisma.StringFilter<"Venue"> | string;
    address?: Prisma.StringFilter<"Venue"> | string;
    lat?: Prisma.FloatFilter<"Venue"> | number;
    lng?: Prisma.FloatFilter<"Venue"> | number;
    radiusMeters?: Prisma.IntFilter<"Venue"> | number;
    description?: Prisma.StringNullableFilter<"Venue"> | string | null;
    category?: Prisma.StringNullableFilter<"Venue"> | string | null;
    pointsPerVideo?: Prisma.IntFilter<"Venue"> | number;
    pointsPerPhoto?: Prisma.IntFilter<"Venue"> | number;
    createdAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Venue"> | Date | string;
};
export type VenueCreateWithoutPerksInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.OwnerProfileCreateNestedOneWithoutVenuesInput;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsCreateNestedManyWithoutVenueInput;
};
export type VenueUncheckedCreateWithoutPerksInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsUncheckedCreateNestedManyWithoutVenueInput;
};
export type VenueCreateOrConnectWithoutPerksInput = {
    where: Prisma.VenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.VenueCreateWithoutPerksInput, Prisma.VenueUncheckedCreateWithoutPerksInput>;
};
export type VenueUpsertWithoutPerksInput = {
    update: Prisma.XOR<Prisma.VenueUpdateWithoutPerksInput, Prisma.VenueUncheckedUpdateWithoutPerksInput>;
    create: Prisma.XOR<Prisma.VenueCreateWithoutPerksInput, Prisma.VenueUncheckedCreateWithoutPerksInput>;
    where?: Prisma.VenueWhereInput;
};
export type VenueUpdateToOneWithWhereWithoutPerksInput = {
    where?: Prisma.VenueWhereInput;
    data: Prisma.XOR<Prisma.VenueUpdateWithoutPerksInput, Prisma.VenueUncheckedUpdateWithoutPerksInput>;
};
export type VenueUpdateWithoutPerksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.OwnerProfileUpdateOneRequiredWithoutVenuesNestedInput;
    submissions?: Prisma.SubmissionUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateWithoutPerksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUncheckedUpdateManyWithoutVenueNestedInput;
};
export type VenueCreateWithoutSubmissionsInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.OwnerProfileCreateNestedOneWithoutVenuesInput;
    perks?: Prisma.PerkCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsCreateNestedManyWithoutVenueInput;
};
export type VenueUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perks?: Prisma.PerkUncheckedCreateNestedManyWithoutVenueInput;
    points?: Prisma.UserVenuePointsUncheckedCreateNestedManyWithoutVenueInput;
};
export type VenueCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.VenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.VenueCreateWithoutSubmissionsInput, Prisma.VenueUncheckedCreateWithoutSubmissionsInput>;
};
export type VenueUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.VenueUpdateWithoutSubmissionsInput, Prisma.VenueUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.VenueCreateWithoutSubmissionsInput, Prisma.VenueUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.VenueWhereInput;
};
export type VenueUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.VenueWhereInput;
    data: Prisma.XOR<Prisma.VenueUpdateWithoutSubmissionsInput, Prisma.VenueUncheckedUpdateWithoutSubmissionsInput>;
};
export type VenueUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.OwnerProfileUpdateOneRequiredWithoutVenuesNestedInput;
    perks?: Prisma.PerkUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perks?: Prisma.PerkUncheckedUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUncheckedUpdateManyWithoutVenueNestedInput;
};
export type VenueCreateWithoutPointsInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.OwnerProfileCreateNestedOneWithoutVenuesInput;
    perks?: Prisma.PerkCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionCreateNestedManyWithoutVenueInput;
};
export type VenueUncheckedCreateWithoutPointsInput = {
    id?: string;
    ownerId: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perks?: Prisma.PerkUncheckedCreateNestedManyWithoutVenueInput;
    submissions?: Prisma.SubmissionUncheckedCreateNestedManyWithoutVenueInput;
};
export type VenueCreateOrConnectWithoutPointsInput = {
    where: Prisma.VenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.VenueCreateWithoutPointsInput, Prisma.VenueUncheckedCreateWithoutPointsInput>;
};
export type VenueUpsertWithoutPointsInput = {
    update: Prisma.XOR<Prisma.VenueUpdateWithoutPointsInput, Prisma.VenueUncheckedUpdateWithoutPointsInput>;
    create: Prisma.XOR<Prisma.VenueCreateWithoutPointsInput, Prisma.VenueUncheckedCreateWithoutPointsInput>;
    where?: Prisma.VenueWhereInput;
};
export type VenueUpdateToOneWithWhereWithoutPointsInput = {
    where?: Prisma.VenueWhereInput;
    data: Prisma.XOR<Prisma.VenueUpdateWithoutPointsInput, Prisma.VenueUncheckedUpdateWithoutPointsInput>;
};
export type VenueUpdateWithoutPointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.OwnerProfileUpdateOneRequiredWithoutVenuesNestedInput;
    perks?: Prisma.PerkUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateWithoutPointsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perks?: Prisma.PerkUncheckedUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutVenueNestedInput;
};
export type VenueCreateManyOwnerInput = {
    id?: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    radiusMeters?: number;
    description?: string | null;
    category?: string | null;
    pointsPerVideo?: number;
    pointsPerPhoto?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VenueUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perks?: Prisma.PerkUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perks?: Prisma.PerkUncheckedUpdateManyWithoutVenueNestedInput;
    submissions?: Prisma.SubmissionUncheckedUpdateManyWithoutVenueNestedInput;
    points?: Prisma.UserVenuePointsUncheckedUpdateManyWithoutVenueNestedInput;
};
export type VenueUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    lat?: Prisma.FloatFieldUpdateOperationsInput | number;
    lng?: Prisma.FloatFieldUpdateOperationsInput | number;
    radiusMeters?: Prisma.IntFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsPerVideo?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsPerPhoto?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenueCountOutputType = {
    perks: number;
    submissions: number;
    points: number;
};
export type VenueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    perks?: boolean | VenueCountOutputTypeCountPerksArgs;
    submissions?: boolean | VenueCountOutputTypeCountSubmissionsArgs;
    points?: boolean | VenueCountOutputTypeCountPointsArgs;
};
export type VenueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueCountOutputTypeSelect<ExtArgs> | null;
};
export type VenueCountOutputTypeCountPerksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerkWhereInput;
};
export type VenueCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
};
export type VenueCountOutputTypeCountPointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserVenuePointsWhereInput;
};
export type VenueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    radiusMeters?: boolean;
    description?: boolean;
    category?: boolean;
    pointsPerVideo?: boolean;
    pointsPerPhoto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
    perks?: boolean | Prisma.Venue$perksArgs<ExtArgs>;
    submissions?: boolean | Prisma.Venue$submissionsArgs<ExtArgs>;
    points?: boolean | Prisma.Venue$pointsArgs<ExtArgs>;
    _count?: boolean | Prisma.VenueCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["venue"]>;
export type VenueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    radiusMeters?: boolean;
    description?: boolean;
    category?: boolean;
    pointsPerVideo?: boolean;
    pointsPerPhoto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["venue"]>;
export type VenueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    radiusMeters?: boolean;
    description?: boolean;
    category?: boolean;
    pointsPerVideo?: boolean;
    pointsPerPhoto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["venue"]>;
export type VenueSelectScalar = {
    id?: boolean;
    ownerId?: boolean;
    name?: boolean;
    address?: boolean;
    lat?: boolean;
    lng?: boolean;
    radiusMeters?: boolean;
    description?: boolean;
    category?: boolean;
    pointsPerVideo?: boolean;
    pointsPerPhoto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VenueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ownerId" | "name" | "address" | "lat" | "lng" | "radiusMeters" | "description" | "category" | "pointsPerVideo" | "pointsPerPhoto" | "createdAt" | "updatedAt", ExtArgs["result"]["venue"]>;
export type VenueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
    perks?: boolean | Prisma.Venue$perksArgs<ExtArgs>;
    submissions?: boolean | Prisma.Venue$submissionsArgs<ExtArgs>;
    points?: boolean | Prisma.Venue$pointsArgs<ExtArgs>;
    _count?: boolean | Prisma.VenueCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VenueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
};
export type VenueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerProfileDefaultArgs<ExtArgs>;
};
export type $VenuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Venue";
    objects: {
        owner: Prisma.$OwnerProfilePayload<ExtArgs>;
        perks: Prisma.$PerkPayload<ExtArgs>[];
        submissions: Prisma.$SubmissionPayload<ExtArgs>[];
        points: Prisma.$UserVenuePointsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ownerId: string;
        name: string;
        address: string;
        lat: number;
        lng: number;
        radiusMeters: number;
        description: string | null;
        category: string | null;
        pointsPerVideo: number;
        pointsPerPhoto: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["venue"]>;
    composites: {};
};
export type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VenuePayload, S>;
export type VenueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VenueCountAggregateInputType | true;
};
export interface VenueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Venue'];
        meta: {
            name: 'Venue';
        };
    };
    findUnique<T extends VenueFindUniqueArgs>(args: Prisma.SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VenueFindFirstArgs>(args?: Prisma.SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VenueFindManyArgs>(args?: Prisma.SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VenueCreateArgs>(args: Prisma.SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VenueCreateManyArgs>(args?: Prisma.SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VenueDeleteArgs>(args: Prisma.SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VenueUpdateArgs>(args: Prisma.SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VenueDeleteManyArgs>(args?: Prisma.SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VenueUpdateManyArgs>(args: Prisma.SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VenueUpsertArgs>(args: Prisma.SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VenueCountArgs>(args?: Prisma.Subset<T, VenueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VenueCountAggregateOutputType> : number>;
    aggregate<T extends VenueAggregateArgs>(args: Prisma.Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>;
    groupBy<T extends VenueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VenueGroupByArgs['orderBy'];
    } : {
        orderBy?: VenueGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VenueFieldRefs;
}
export interface Prisma__VenueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.OwnerProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OwnerProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__OwnerProfileClient<runtime.Types.Result.GetResult<Prisma.$OwnerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    perks<T extends Prisma.Venue$perksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venue$perksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    submissions<T extends Prisma.Venue$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venue$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    points<T extends Prisma.Venue$pointsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Venue$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VenueFieldRefs {
    readonly id: Prisma.FieldRef<"Venue", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Venue", 'String'>;
    readonly name: Prisma.FieldRef<"Venue", 'String'>;
    readonly address: Prisma.FieldRef<"Venue", 'String'>;
    readonly lat: Prisma.FieldRef<"Venue", 'Float'>;
    readonly lng: Prisma.FieldRef<"Venue", 'Float'>;
    readonly radiusMeters: Prisma.FieldRef<"Venue", 'Int'>;
    readonly description: Prisma.FieldRef<"Venue", 'String'>;
    readonly category: Prisma.FieldRef<"Venue", 'String'>;
    readonly pointsPerVideo: Prisma.FieldRef<"Venue", 'Int'>;
    readonly pointsPerPhoto: Prisma.FieldRef<"Venue", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Venue", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Venue", 'DateTime'>;
}
export type VenueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where: Prisma.VenueWhereUniqueInput;
};
export type VenueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where: Prisma.VenueWhereUniqueInput;
};
export type VenueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput | Prisma.VenueOrderByWithRelationInput[];
    cursor?: Prisma.VenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenueScalarFieldEnum | Prisma.VenueScalarFieldEnum[];
};
export type VenueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput | Prisma.VenueOrderByWithRelationInput[];
    cursor?: Prisma.VenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenueScalarFieldEnum | Prisma.VenueScalarFieldEnum[];
};
export type VenueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where?: Prisma.VenueWhereInput;
    orderBy?: Prisma.VenueOrderByWithRelationInput | Prisma.VenueOrderByWithRelationInput[];
    cursor?: Prisma.VenueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenueScalarFieldEnum | Prisma.VenueScalarFieldEnum[];
};
export type VenueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VenueCreateInput, Prisma.VenueUncheckedCreateInput>;
};
export type VenueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VenueCreateManyInput | Prisma.VenueCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VenueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    data: Prisma.VenueCreateManyInput | Prisma.VenueCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VenueIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VenueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VenueUpdateInput, Prisma.VenueUncheckedUpdateInput>;
    where: Prisma.VenueWhereUniqueInput;
};
export type VenueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VenueUpdateManyMutationInput, Prisma.VenueUncheckedUpdateManyInput>;
    where?: Prisma.VenueWhereInput;
    limit?: number;
};
export type VenueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VenueUpdateManyMutationInput, Prisma.VenueUncheckedUpdateManyInput>;
    where?: Prisma.VenueWhereInput;
    limit?: number;
    include?: Prisma.VenueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VenueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where: Prisma.VenueWhereUniqueInput;
    create: Prisma.XOR<Prisma.VenueCreateInput, Prisma.VenueUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VenueUpdateInput, Prisma.VenueUncheckedUpdateInput>;
};
export type VenueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
    where: Prisma.VenueWhereUniqueInput;
};
export type VenueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VenueWhereInput;
    limit?: number;
};
export type Venue$perksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    where?: Prisma.PerkWhereInput;
    orderBy?: Prisma.PerkOrderByWithRelationInput | Prisma.PerkOrderByWithRelationInput[];
    cursor?: Prisma.PerkWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PerkScalarFieldEnum | Prisma.PerkScalarFieldEnum[];
};
export type Venue$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubmissionScalarFieldEnum | Prisma.SubmissionScalarFieldEnum[];
};
export type Venue$pointsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    where?: Prisma.UserVenuePointsWhereInput;
    orderBy?: Prisma.UserVenuePointsOrderByWithRelationInput | Prisma.UserVenuePointsOrderByWithRelationInput[];
    cursor?: Prisma.UserVenuePointsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserVenuePointsScalarFieldEnum | Prisma.UserVenuePointsScalarFieldEnum[];
};
export type VenueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenueSelect<ExtArgs> | null;
    omit?: Prisma.VenueOmit<ExtArgs> | null;
    include?: Prisma.VenueInclude<ExtArgs> | null;
};
export {};
