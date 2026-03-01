import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$SubmissionPayload>;
export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null;
    _avg: SubmissionAvgAggregateOutputType | null;
    _sum: SubmissionSumAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
};
export type SubmissionAvgAggregateOutputType = {
    pointsAwarded: number | null;
};
export type SubmissionSumAggregateOutputType = {
    pointsAwarded: number | null;
};
export type SubmissionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    venueId: string | null;
    type: $Enums.SubmissionType | null;
    mediaUrl: string | null;
    status: $Enums.SubmissionStatus | null;
    rejectionReason: string | null;
    reviewedAt: Date | null;
    pointsAwarded: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubmissionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    venueId: string | null;
    type: $Enums.SubmissionType | null;
    mediaUrl: string | null;
    status: $Enums.SubmissionStatus | null;
    rejectionReason: string | null;
    reviewedAt: Date | null;
    pointsAwarded: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SubmissionCountAggregateOutputType = {
    id: number;
    userId: number;
    venueId: number;
    type: number;
    mediaUrl: number;
    status: number;
    rejectionReason: number;
    reviewedAt: number;
    pointsAwarded: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SubmissionAvgAggregateInputType = {
    pointsAwarded?: true;
};
export type SubmissionSumAggregateInputType = {
    pointsAwarded?: true;
};
export type SubmissionMinAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    type?: true;
    mediaUrl?: true;
    status?: true;
    rejectionReason?: true;
    reviewedAt?: true;
    pointsAwarded?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubmissionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    type?: true;
    mediaUrl?: true;
    status?: true;
    rejectionReason?: true;
    reviewedAt?: true;
    pointsAwarded?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SubmissionCountAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    type?: true;
    mediaUrl?: true;
    status?: true;
    rejectionReason?: true;
    reviewedAt?: true;
    pointsAwarded?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithRelationInput | Prisma.SubmissionOrderByWithRelationInput[];
    cursor?: Prisma.SubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubmissionCountAggregateInputType;
    _avg?: SubmissionAvgAggregateInputType;
    _sum?: SubmissionSumAggregateInputType;
    _min?: SubmissionMinAggregateInputType;
    _max?: SubmissionMaxAggregateInputType;
};
export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubmission[P]> : Prisma.GetScalarType<T[P], AggregateSubmission[P]>;
};
export type SubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    orderBy?: Prisma.SubmissionOrderByWithAggregationInput | Prisma.SubmissionOrderByWithAggregationInput[];
    by: Prisma.SubmissionScalarFieldEnum[] | Prisma.SubmissionScalarFieldEnum;
    having?: Prisma.SubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubmissionCountAggregateInputType | true;
    _avg?: SubmissionAvgAggregateInputType;
    _sum?: SubmissionSumAggregateInputType;
    _min?: SubmissionMinAggregateInputType;
    _max?: SubmissionMaxAggregateInputType;
};
export type SubmissionGroupByOutputType = {
    id: string;
    userId: string;
    venueId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status: $Enums.SubmissionStatus;
    rejectionReason: string | null;
    reviewedAt: Date | null;
    pointsAwarded: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SubmissionCountAggregateOutputType | null;
    _avg: SubmissionAvgAggregateOutputType | null;
    _sum: SubmissionSumAggregateOutputType | null;
    _min: SubmissionMinAggregateOutputType | null;
    _max: SubmissionMaxAggregateOutputType | null;
};
type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubmissionGroupByOutputType[P]>;
}>>;
export type SubmissionWhereInput = {
    AND?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    OR?: Prisma.SubmissionWhereInput[];
    NOT?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    id?: Prisma.StringFilter<"Submission"> | string;
    userId?: Prisma.StringFilter<"Submission"> | string;
    venueId?: Prisma.StringFilter<"Submission"> | string;
    type?: Prisma.EnumSubmissionTypeFilter<"Submission"> | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFilter<"Submission"> | string;
    status?: Prisma.EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Submission"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Submission"> | Date | string | null;
    pointsAwarded?: Prisma.IntNullableFilter<"Submission"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
};
export type SubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    venue?: Prisma.VenueOrderByWithRelationInput;
};
export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    OR?: Prisma.SubmissionWhereInput[];
    NOT?: Prisma.SubmissionWhereInput | Prisma.SubmissionWhereInput[];
    userId?: Prisma.StringFilter<"Submission"> | string;
    venueId?: Prisma.StringFilter<"Submission"> | string;
    type?: Prisma.EnumSubmissionTypeFilter<"Submission"> | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFilter<"Submission"> | string;
    status?: Prisma.EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Submission"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Submission"> | Date | string | null;
    pointsAwarded?: Prisma.IntNullableFilter<"Submission"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
}, "id">;
export type SubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SubmissionCountOrderByAggregateInput;
    _avg?: Prisma.SubmissionAvgOrderByAggregateInput;
    _max?: Prisma.SubmissionMaxOrderByAggregateInput;
    _min?: Prisma.SubmissionMinOrderByAggregateInput;
    _sum?: Prisma.SubmissionSumOrderByAggregateInput;
};
export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SubmissionScalarWhereWithAggregatesInput | Prisma.SubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SubmissionScalarWhereWithAggregatesInput | Prisma.SubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    venueId?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    type?: Prisma.EnumSubmissionTypeWithAggregatesFilter<"Submission"> | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringWithAggregatesFilter<"Submission"> | string;
    status?: Prisma.EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"Submission"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null;
    pointsAwarded?: Prisma.IntNullableWithAggregatesFilter<"Submission"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Submission"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Submission"> | Date | string;
};
export type SubmissionCreateInput = {
    id?: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    venue: Prisma.VenueCreateNestedOneWithoutSubmissionsInput;
};
export type SubmissionUncheckedCreateInput = {
    id?: string;
    userId: string;
    venueId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    venue?: Prisma.VenueUpdateOneRequiredWithoutSubmissionsNestedInput;
};
export type SubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionCreateManyInput = {
    id?: string;
    userId: string;
    venueId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionListRelationFilter = {
    every?: Prisma.SubmissionWhereInput;
    some?: Prisma.SubmissionWhereInput;
    none?: Prisma.SubmissionWhereInput;
};
export type SubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubmissionAvgOrderByAggregateInput = {
    pointsAwarded?: Prisma.SortOrder;
};
export type SubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    mediaUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SubmissionSumOrderByAggregateInput = {
    pointsAwarded?: Prisma.SortOrder;
};
export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput> | Prisma.SubmissionCreateWithoutUserInput[] | Prisma.SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutUserInput | Prisma.SubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput> | Prisma.SubmissionCreateWithoutUserInput[] | Prisma.SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutUserInput | Prisma.SubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput> | Prisma.SubmissionCreateWithoutUserInput[] | Prisma.SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutUserInput | Prisma.SubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SubmissionCreateManyUserInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutUserInput | Prisma.SubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput> | Prisma.SubmissionCreateWithoutUserInput[] | Prisma.SubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutUserInput | Prisma.SubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SubmissionCreateManyUserInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutUserInput | Prisma.SubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type SubmissionCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput> | Prisma.SubmissionCreateWithoutVenueInput[] | Prisma.SubmissionUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutVenueInput | Prisma.SubmissionCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.SubmissionCreateManyVenueInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUncheckedCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput> | Prisma.SubmissionCreateWithoutVenueInput[] | Prisma.SubmissionUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutVenueInput | Prisma.SubmissionCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.SubmissionCreateManyVenueInputEnvelope;
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
};
export type SubmissionUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput> | Prisma.SubmissionCreateWithoutVenueInput[] | Prisma.SubmissionUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutVenueInput | Prisma.SubmissionCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutVenueInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.SubmissionCreateManyVenueInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutVenueInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutVenueInput | Prisma.SubmissionUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type SubmissionUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput> | Prisma.SubmissionCreateWithoutVenueInput[] | Prisma.SubmissionUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.SubmissionCreateOrConnectWithoutVenueInput | Prisma.SubmissionCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.SubmissionUpsertWithWhereUniqueWithoutVenueInput | Prisma.SubmissionUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.SubmissionCreateManyVenueInputEnvelope;
    set?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    disconnect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    delete?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    connect?: Prisma.SubmissionWhereUniqueInput | Prisma.SubmissionWhereUniqueInput[];
    update?: Prisma.SubmissionUpdateWithWhereUniqueWithoutVenueInput | Prisma.SubmissionUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.SubmissionUpdateManyWithWhereWithoutVenueInput | Prisma.SubmissionUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
};
export type EnumSubmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionType;
};
export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type SubmissionCreateWithoutUserInput = {
    id?: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    venue: Prisma.VenueCreateNestedOneWithoutSubmissionsInput;
};
export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string;
    venueId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionCreateOrConnectWithoutUserInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput>;
};
export type SubmissionCreateManyUserInputEnvelope = {
    data: Prisma.SubmissionCreateManyUserInput | Prisma.SubmissionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubmissionUpdateWithoutUserInput, Prisma.SubmissionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutUserInput, Prisma.SubmissionUncheckedCreateWithoutUserInput>;
};
export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateWithoutUserInput, Prisma.SubmissionUncheckedUpdateWithoutUserInput>;
};
export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyWithoutUserInput>;
};
export type SubmissionScalarWhereInput = {
    AND?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
    OR?: Prisma.SubmissionScalarWhereInput[];
    NOT?: Prisma.SubmissionScalarWhereInput | Prisma.SubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"Submission"> | string;
    userId?: Prisma.StringFilter<"Submission"> | string;
    venueId?: Prisma.StringFilter<"Submission"> | string;
    type?: Prisma.EnumSubmissionTypeFilter<"Submission"> | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFilter<"Submission"> | string;
    status?: Prisma.EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.StringNullableFilter<"Submission"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"Submission"> | Date | string | null;
    pointsAwarded?: Prisma.IntNullableFilter<"Submission"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Submission"> | Date | string;
};
export type SubmissionCreateWithoutVenueInput = {
    id?: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
};
export type SubmissionUncheckedCreateWithoutVenueInput = {
    id?: string;
    userId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionCreateOrConnectWithoutVenueInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput>;
};
export type SubmissionCreateManyVenueInputEnvelope = {
    data: Prisma.SubmissionCreateManyVenueInput | Prisma.SubmissionCreateManyVenueInput[];
    skipDuplicates?: boolean;
};
export type SubmissionUpsertWithWhereUniqueWithoutVenueInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SubmissionUpdateWithoutVenueInput, Prisma.SubmissionUncheckedUpdateWithoutVenueInput>;
    create: Prisma.XOR<Prisma.SubmissionCreateWithoutVenueInput, Prisma.SubmissionUncheckedCreateWithoutVenueInput>;
};
export type SubmissionUpdateWithWhereUniqueWithoutVenueInput = {
    where: Prisma.SubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateWithoutVenueInput, Prisma.SubmissionUncheckedUpdateWithoutVenueInput>;
};
export type SubmissionUpdateManyWithWhereWithoutVenueInput = {
    where: Prisma.SubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyWithoutVenueInput>;
};
export type SubmissionCreateManyUserInput = {
    id?: string;
    venueId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.VenueUpdateOneRequiredWithoutSubmissionsNestedInput;
};
export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionCreateManyVenueInput = {
    id?: string;
    userId: string;
    type: $Enums.SubmissionType;
    mediaUrl: string;
    status?: $Enums.SubmissionStatus;
    rejectionReason?: string | null;
    reviewedAt?: Date | string | null;
    pointsAwarded?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SubmissionUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
};
export type SubmissionUncheckedUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionUncheckedUpdateManyWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumSubmissionTypeFieldUpdateOperationsInput | $Enums.SubmissionType;
    mediaUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    pointsAwarded?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    type?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    reviewedAt?: boolean;
    pointsAwarded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    type?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    reviewedAt?: boolean;
    pointsAwarded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    type?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    reviewedAt?: boolean;
    pointsAwarded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["submission"]>;
export type SubmissionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    type?: boolean;
    mediaUrl?: boolean;
    status?: boolean;
    rejectionReason?: boolean;
    reviewedAt?: boolean;
    pointsAwarded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "venueId" | "type" | "mediaUrl" | "status" | "rejectionReason" | "reviewedAt" | "pointsAwarded" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>;
export type SubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type $SubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Submission";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        venue: Prisma.$VenuePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        venueId: string;
        type: $Enums.SubmissionType;
        mediaUrl: string;
        status: $Enums.SubmissionStatus;
        rejectionReason: string | null;
        reviewedAt: Date | null;
        pointsAwarded: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["submission"]>;
    composites: {};
};
export type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SubmissionPayload, S>;
export type SubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubmissionCountAggregateInputType | true;
};
export interface SubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Submission'];
        meta: {
            name: 'Submission';
        };
    };
    findUnique<T extends SubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SubmissionCreateArgs>(args: Prisma.SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SubmissionDeleteArgs>(args: Prisma.SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SubmissionUpdateArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SubmissionUpsertArgs>(args: Prisma.SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__SubmissionClient<runtime.Types.Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SubmissionCountArgs>(args?: Prisma.Subset<T, SubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubmissionCountAggregateOutputType> : number>;
    aggregate<T extends SubmissionAggregateArgs>(args: Prisma.Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>;
    groupBy<T extends SubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: SubmissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SubmissionFieldRefs;
}
export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    venue<T extends Prisma.VenueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VenueDefaultArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"Submission", 'String'>;
    readonly userId: Prisma.FieldRef<"Submission", 'String'>;
    readonly venueId: Prisma.FieldRef<"Submission", 'String'>;
    readonly type: Prisma.FieldRef<"Submission", 'SubmissionType'>;
    readonly mediaUrl: Prisma.FieldRef<"Submission", 'String'>;
    readonly status: Prisma.FieldRef<"Submission", 'SubmissionStatus'>;
    readonly rejectionReason: Prisma.FieldRef<"Submission", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"Submission", 'DateTime'>;
    readonly pointsAwarded: Prisma.FieldRef<"Submission", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Submission", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Submission", 'DateTime'>;
}
export type SubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionCreateInput, Prisma.SubmissionUncheckedCreateInput>;
};
export type SubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SubmissionCreateManyInput | Prisma.SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    data: Prisma.SubmissionCreateManyInput | Prisma.SubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionUpdateInput, Prisma.SubmissionUncheckedUpdateInput>;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyInput>;
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
};
export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SubmissionUpdateManyMutationInput, Prisma.SubmissionUncheckedUpdateManyInput>;
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
    include?: Prisma.SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SubmissionCreateInput, Prisma.SubmissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SubmissionUpdateInput, Prisma.SubmissionUncheckedUpdateInput>;
};
export type SubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
    where: Prisma.SubmissionWhereUniqueInput;
};
export type SubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SubmissionWhereInput;
    limit?: number;
};
export type SubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubmissionSelect<ExtArgs> | null;
    omit?: Prisma.SubmissionOmit<ExtArgs> | null;
    include?: Prisma.SubmissionInclude<ExtArgs> | null;
};
export {};
