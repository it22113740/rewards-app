import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RedemptionModel = runtime.Types.Result.DefaultSelection<Prisma.$RedemptionPayload>;
export type AggregateRedemption = {
    _count: RedemptionCountAggregateOutputType | null;
    _avg: RedemptionAvgAggregateOutputType | null;
    _sum: RedemptionSumAggregateOutputType | null;
    _min: RedemptionMinAggregateOutputType | null;
    _max: RedemptionMaxAggregateOutputType | null;
};
export type RedemptionAvgAggregateOutputType = {
    pointsSpent: number | null;
};
export type RedemptionSumAggregateOutputType = {
    pointsSpent: number | null;
};
export type RedemptionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    perkId: string | null;
    promoCode: string | null;
    pointsSpent: number | null;
    status: $Enums.RedemptionStatus | null;
    usedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RedemptionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    perkId: string | null;
    promoCode: string | null;
    pointsSpent: number | null;
    status: $Enums.RedemptionStatus | null;
    usedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RedemptionCountAggregateOutputType = {
    id: number;
    userId: number;
    perkId: number;
    promoCode: number;
    pointsSpent: number;
    status: number;
    usedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RedemptionAvgAggregateInputType = {
    pointsSpent?: true;
};
export type RedemptionSumAggregateInputType = {
    pointsSpent?: true;
};
export type RedemptionMinAggregateInputType = {
    id?: true;
    userId?: true;
    perkId?: true;
    promoCode?: true;
    pointsSpent?: true;
    status?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RedemptionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    perkId?: true;
    promoCode?: true;
    pointsSpent?: true;
    status?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RedemptionCountAggregateInputType = {
    id?: true;
    userId?: true;
    perkId?: true;
    promoCode?: true;
    pointsSpent?: true;
    status?: true;
    usedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RedemptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedemptionWhereInput;
    orderBy?: Prisma.RedemptionOrderByWithRelationInput | Prisma.RedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RedemptionCountAggregateInputType;
    _avg?: RedemptionAvgAggregateInputType;
    _sum?: RedemptionSumAggregateInputType;
    _min?: RedemptionMinAggregateInputType;
    _max?: RedemptionMaxAggregateInputType;
};
export type GetRedemptionAggregateType<T extends RedemptionAggregateArgs> = {
    [P in keyof T & keyof AggregateRedemption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRedemption[P]> : Prisma.GetScalarType<T[P], AggregateRedemption[P]>;
};
export type RedemptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedemptionWhereInput;
    orderBy?: Prisma.RedemptionOrderByWithAggregationInput | Prisma.RedemptionOrderByWithAggregationInput[];
    by: Prisma.RedemptionScalarFieldEnum[] | Prisma.RedemptionScalarFieldEnum;
    having?: Prisma.RedemptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RedemptionCountAggregateInputType | true;
    _avg?: RedemptionAvgAggregateInputType;
    _sum?: RedemptionSumAggregateInputType;
    _min?: RedemptionMinAggregateInputType;
    _max?: RedemptionMaxAggregateInputType;
};
export type RedemptionGroupByOutputType = {
    id: string;
    userId: string;
    perkId: string;
    promoCode: string;
    pointsSpent: number;
    status: $Enums.RedemptionStatus;
    usedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RedemptionCountAggregateOutputType | null;
    _avg: RedemptionAvgAggregateOutputType | null;
    _sum: RedemptionSumAggregateOutputType | null;
    _min: RedemptionMinAggregateOutputType | null;
    _max: RedemptionMaxAggregateOutputType | null;
};
type GetRedemptionGroupByPayload<T extends RedemptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RedemptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RedemptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RedemptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RedemptionGroupByOutputType[P]>;
}>>;
export type RedemptionWhereInput = {
    AND?: Prisma.RedemptionWhereInput | Prisma.RedemptionWhereInput[];
    OR?: Prisma.RedemptionWhereInput[];
    NOT?: Prisma.RedemptionWhereInput | Prisma.RedemptionWhereInput[];
    id?: Prisma.StringFilter<"Redemption"> | string;
    userId?: Prisma.StringFilter<"Redemption"> | string;
    perkId?: Prisma.StringFilter<"Redemption"> | string;
    promoCode?: Prisma.StringFilter<"Redemption"> | string;
    pointsSpent?: Prisma.IntFilter<"Redemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"Redemption"> | $Enums.RedemptionStatus;
    usedAt?: Prisma.DateTimeNullableFilter<"Redemption"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    perk?: Prisma.XOR<Prisma.PerkScalarRelationFilter, Prisma.PerkWhereInput>;
};
export type RedemptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    perkId?: Prisma.SortOrder;
    promoCode?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    perk?: Prisma.PerkOrderByWithRelationInput;
};
export type RedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RedemptionWhereInput | Prisma.RedemptionWhereInput[];
    OR?: Prisma.RedemptionWhereInput[];
    NOT?: Prisma.RedemptionWhereInput | Prisma.RedemptionWhereInput[];
    userId?: Prisma.StringFilter<"Redemption"> | string;
    perkId?: Prisma.StringFilter<"Redemption"> | string;
    promoCode?: Prisma.StringFilter<"Redemption"> | string;
    pointsSpent?: Prisma.IntFilter<"Redemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"Redemption"> | $Enums.RedemptionStatus;
    usedAt?: Prisma.DateTimeNullableFilter<"Redemption"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    perk?: Prisma.XOR<Prisma.PerkScalarRelationFilter, Prisma.PerkWhereInput>;
}, "id">;
export type RedemptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    perkId?: Prisma.SortOrder;
    promoCode?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RedemptionCountOrderByAggregateInput;
    _avg?: Prisma.RedemptionAvgOrderByAggregateInput;
    _max?: Prisma.RedemptionMaxOrderByAggregateInput;
    _min?: Prisma.RedemptionMinOrderByAggregateInput;
    _sum?: Prisma.RedemptionSumOrderByAggregateInput;
};
export type RedemptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RedemptionScalarWhereWithAggregatesInput | Prisma.RedemptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RedemptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RedemptionScalarWhereWithAggregatesInput | Prisma.RedemptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Redemption"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Redemption"> | string;
    perkId?: Prisma.StringWithAggregatesFilter<"Redemption"> | string;
    promoCode?: Prisma.StringWithAggregatesFilter<"Redemption"> | string;
    pointsSpent?: Prisma.IntWithAggregatesFilter<"Redemption"> | number;
    status?: Prisma.EnumRedemptionStatusWithAggregatesFilter<"Redemption"> | $Enums.RedemptionStatus;
    usedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Redemption"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Redemption"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Redemption"> | Date | string;
};
export type RedemptionCreateInput = {
    id?: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRedemptionsInput;
    perk: Prisma.PerkCreateNestedOneWithoutRedemptionsInput;
};
export type RedemptionUncheckedCreateInput = {
    id?: string;
    userId: string;
    perkId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRedemptionsNestedInput;
    perk?: Prisma.PerkUpdateOneRequiredWithoutRedemptionsNestedInput;
};
export type RedemptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    perkId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionCreateManyInput = {
    id?: string;
    userId: string;
    perkId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    perkId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionListRelationFilter = {
    every?: Prisma.RedemptionWhereInput;
    some?: Prisma.RedemptionWhereInput;
    none?: Prisma.RedemptionWhereInput;
};
export type RedemptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RedemptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    perkId?: Prisma.SortOrder;
    promoCode?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RedemptionAvgOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RedemptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    perkId?: Prisma.SortOrder;
    promoCode?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RedemptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    perkId?: Prisma.SortOrder;
    promoCode?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    usedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RedemptionSumOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RedemptionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput> | Prisma.RedemptionCreateWithoutUserInput[] | Prisma.RedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutUserInput | Prisma.RedemptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RedemptionCreateManyUserInputEnvelope;
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
};
export type RedemptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput> | Prisma.RedemptionCreateWithoutUserInput[] | Prisma.RedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutUserInput | Prisma.RedemptionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RedemptionCreateManyUserInputEnvelope;
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
};
export type RedemptionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput> | Prisma.RedemptionCreateWithoutUserInput[] | Prisma.RedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutUserInput | Prisma.RedemptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RedemptionUpsertWithWhereUniqueWithoutUserInput | Prisma.RedemptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RedemptionCreateManyUserInputEnvelope;
    set?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    disconnect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    delete?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    update?: Prisma.RedemptionUpdateWithWhereUniqueWithoutUserInput | Prisma.RedemptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RedemptionUpdateManyWithWhereWithoutUserInput | Prisma.RedemptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
};
export type RedemptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput> | Prisma.RedemptionCreateWithoutUserInput[] | Prisma.RedemptionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutUserInput | Prisma.RedemptionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RedemptionUpsertWithWhereUniqueWithoutUserInput | Prisma.RedemptionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RedemptionCreateManyUserInputEnvelope;
    set?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    disconnect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    delete?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    update?: Prisma.RedemptionUpdateWithWhereUniqueWithoutUserInput | Prisma.RedemptionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RedemptionUpdateManyWithWhereWithoutUserInput | Prisma.RedemptionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
};
export type RedemptionCreateNestedManyWithoutPerkInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput> | Prisma.RedemptionCreateWithoutPerkInput[] | Prisma.RedemptionUncheckedCreateWithoutPerkInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutPerkInput | Prisma.RedemptionCreateOrConnectWithoutPerkInput[];
    createMany?: Prisma.RedemptionCreateManyPerkInputEnvelope;
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
};
export type RedemptionUncheckedCreateNestedManyWithoutPerkInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput> | Prisma.RedemptionCreateWithoutPerkInput[] | Prisma.RedemptionUncheckedCreateWithoutPerkInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutPerkInput | Prisma.RedemptionCreateOrConnectWithoutPerkInput[];
    createMany?: Prisma.RedemptionCreateManyPerkInputEnvelope;
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
};
export type RedemptionUpdateManyWithoutPerkNestedInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput> | Prisma.RedemptionCreateWithoutPerkInput[] | Prisma.RedemptionUncheckedCreateWithoutPerkInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutPerkInput | Prisma.RedemptionCreateOrConnectWithoutPerkInput[];
    upsert?: Prisma.RedemptionUpsertWithWhereUniqueWithoutPerkInput | Prisma.RedemptionUpsertWithWhereUniqueWithoutPerkInput[];
    createMany?: Prisma.RedemptionCreateManyPerkInputEnvelope;
    set?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    disconnect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    delete?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    update?: Prisma.RedemptionUpdateWithWhereUniqueWithoutPerkInput | Prisma.RedemptionUpdateWithWhereUniqueWithoutPerkInput[];
    updateMany?: Prisma.RedemptionUpdateManyWithWhereWithoutPerkInput | Prisma.RedemptionUpdateManyWithWhereWithoutPerkInput[];
    deleteMany?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
};
export type RedemptionUncheckedUpdateManyWithoutPerkNestedInput = {
    create?: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput> | Prisma.RedemptionCreateWithoutPerkInput[] | Prisma.RedemptionUncheckedCreateWithoutPerkInput[];
    connectOrCreate?: Prisma.RedemptionCreateOrConnectWithoutPerkInput | Prisma.RedemptionCreateOrConnectWithoutPerkInput[];
    upsert?: Prisma.RedemptionUpsertWithWhereUniqueWithoutPerkInput | Prisma.RedemptionUpsertWithWhereUniqueWithoutPerkInput[];
    createMany?: Prisma.RedemptionCreateManyPerkInputEnvelope;
    set?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    disconnect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    delete?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    connect?: Prisma.RedemptionWhereUniqueInput | Prisma.RedemptionWhereUniqueInput[];
    update?: Prisma.RedemptionUpdateWithWhereUniqueWithoutPerkInput | Prisma.RedemptionUpdateWithWhereUniqueWithoutPerkInput[];
    updateMany?: Prisma.RedemptionUpdateManyWithWhereWithoutPerkInput | Prisma.RedemptionUpdateManyWithWhereWithoutPerkInput[];
    deleteMany?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
};
export type EnumRedemptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.RedemptionStatus;
};
export type RedemptionCreateWithoutUserInput = {
    id?: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    perk: Prisma.PerkCreateNestedOneWithoutRedemptionsInput;
};
export type RedemptionUncheckedCreateWithoutUserInput = {
    id?: string;
    perkId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionCreateOrConnectWithoutUserInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput>;
};
export type RedemptionCreateManyUserInputEnvelope = {
    data: Prisma.RedemptionCreateManyUserInput | Prisma.RedemptionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RedemptionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RedemptionUpdateWithoutUserInput, Prisma.RedemptionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RedemptionCreateWithoutUserInput, Prisma.RedemptionUncheckedCreateWithoutUserInput>;
};
export type RedemptionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RedemptionUpdateWithoutUserInput, Prisma.RedemptionUncheckedUpdateWithoutUserInput>;
};
export type RedemptionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RedemptionUpdateManyMutationInput, Prisma.RedemptionUncheckedUpdateManyWithoutUserInput>;
};
export type RedemptionScalarWhereInput = {
    AND?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
    OR?: Prisma.RedemptionScalarWhereInput[];
    NOT?: Prisma.RedemptionScalarWhereInput | Prisma.RedemptionScalarWhereInput[];
    id?: Prisma.StringFilter<"Redemption"> | string;
    userId?: Prisma.StringFilter<"Redemption"> | string;
    perkId?: Prisma.StringFilter<"Redemption"> | string;
    promoCode?: Prisma.StringFilter<"Redemption"> | string;
    pointsSpent?: Prisma.IntFilter<"Redemption"> | number;
    status?: Prisma.EnumRedemptionStatusFilter<"Redemption"> | $Enums.RedemptionStatus;
    usedAt?: Prisma.DateTimeNullableFilter<"Redemption"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Redemption"> | Date | string;
};
export type RedemptionCreateWithoutPerkInput = {
    id?: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRedemptionsInput;
};
export type RedemptionUncheckedCreateWithoutPerkInput = {
    id?: string;
    userId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionCreateOrConnectWithoutPerkInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput>;
};
export type RedemptionCreateManyPerkInputEnvelope = {
    data: Prisma.RedemptionCreateManyPerkInput | Prisma.RedemptionCreateManyPerkInput[];
    skipDuplicates?: boolean;
};
export type RedemptionUpsertWithWhereUniqueWithoutPerkInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RedemptionUpdateWithoutPerkInput, Prisma.RedemptionUncheckedUpdateWithoutPerkInput>;
    create: Prisma.XOR<Prisma.RedemptionCreateWithoutPerkInput, Prisma.RedemptionUncheckedCreateWithoutPerkInput>;
};
export type RedemptionUpdateWithWhereUniqueWithoutPerkInput = {
    where: Prisma.RedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RedemptionUpdateWithoutPerkInput, Prisma.RedemptionUncheckedUpdateWithoutPerkInput>;
};
export type RedemptionUpdateManyWithWhereWithoutPerkInput = {
    where: Prisma.RedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RedemptionUpdateManyMutationInput, Prisma.RedemptionUncheckedUpdateManyWithoutPerkInput>;
};
export type RedemptionCreateManyUserInput = {
    id?: string;
    perkId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    perk?: Prisma.PerkUpdateOneRequiredWithoutRedemptionsNestedInput;
};
export type RedemptionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    perkId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    perkId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionCreateManyPerkInput = {
    id?: string;
    userId: string;
    promoCode: string;
    pointsSpent: number;
    status?: $Enums.RedemptionStatus;
    usedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RedemptionUpdateWithoutPerkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRedemptionsNestedInput;
};
export type RedemptionUncheckedUpdateWithoutPerkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionUncheckedUpdateManyWithoutPerkInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    promoCode?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRedemptionStatusFieldUpdateOperationsInput | $Enums.RedemptionStatus;
    usedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RedemptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    perkId?: boolean;
    promoCode?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redemption"]>;
export type RedemptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    perkId?: boolean;
    promoCode?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redemption"]>;
export type RedemptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    perkId?: boolean;
    promoCode?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redemption"]>;
export type RedemptionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    perkId?: boolean;
    promoCode?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    usedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RedemptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "perkId" | "promoCode" | "pointsSpent" | "status" | "usedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["redemption"]>;
export type RedemptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
};
export type RedemptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
};
export type RedemptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    perk?: boolean | Prisma.PerkDefaultArgs<ExtArgs>;
};
export type $RedemptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Redemption";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        perk: Prisma.$PerkPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        perkId: string;
        promoCode: string;
        pointsSpent: number;
        status: $Enums.RedemptionStatus;
        usedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["redemption"]>;
    composites: {};
};
export type RedemptionGetPayload<S extends boolean | null | undefined | RedemptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RedemptionPayload, S>;
export type RedemptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RedemptionCountAggregateInputType | true;
};
export interface RedemptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Redemption'];
        meta: {
            name: 'Redemption';
        };
    };
    findUnique<T extends RedemptionFindUniqueArgs>(args: Prisma.SelectSubset<T, RedemptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RedemptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RedemptionFindFirstArgs>(args?: Prisma.SelectSubset<T, RedemptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RedemptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RedemptionFindManyArgs>(args?: Prisma.SelectSubset<T, RedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RedemptionCreateArgs>(args: Prisma.SelectSubset<T, RedemptionCreateArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RedemptionCreateManyArgs>(args?: Prisma.SelectSubset<T, RedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RedemptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RedemptionDeleteArgs>(args: Prisma.SelectSubset<T, RedemptionDeleteArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RedemptionUpdateArgs>(args: Prisma.SelectSubset<T, RedemptionUpdateArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RedemptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RedemptionUpdateManyArgs>(args: Prisma.SelectSubset<T, RedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RedemptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RedemptionUpsertArgs>(args: Prisma.SelectSubset<T, RedemptionUpsertArgs<ExtArgs>>): Prisma.Prisma__RedemptionClient<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RedemptionCountArgs>(args?: Prisma.Subset<T, RedemptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RedemptionCountAggregateOutputType> : number>;
    aggregate<T extends RedemptionAggregateArgs>(args: Prisma.Subset<T, RedemptionAggregateArgs>): Prisma.PrismaPromise<GetRedemptionAggregateType<T>>;
    groupBy<T extends RedemptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RedemptionGroupByArgs['orderBy'];
    } : {
        orderBy?: RedemptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RedemptionFieldRefs;
}
export interface Prisma__RedemptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    perk<T extends Prisma.PerkDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PerkDefaultArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RedemptionFieldRefs {
    readonly id: Prisma.FieldRef<"Redemption", 'String'>;
    readonly userId: Prisma.FieldRef<"Redemption", 'String'>;
    readonly perkId: Prisma.FieldRef<"Redemption", 'String'>;
    readonly promoCode: Prisma.FieldRef<"Redemption", 'String'>;
    readonly pointsSpent: Prisma.FieldRef<"Redemption", 'Int'>;
    readonly status: Prisma.FieldRef<"Redemption", 'RedemptionStatus'>;
    readonly usedAt: Prisma.FieldRef<"Redemption", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Redemption", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Redemption", 'DateTime'>;
}
export type RedemptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where: Prisma.RedemptionWhereUniqueInput;
};
export type RedemptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where: Prisma.RedemptionWhereUniqueInput;
};
export type RedemptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where?: Prisma.RedemptionWhereInput;
    orderBy?: Prisma.RedemptionOrderByWithRelationInput | Prisma.RedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedemptionScalarFieldEnum | Prisma.RedemptionScalarFieldEnum[];
};
export type RedemptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where?: Prisma.RedemptionWhereInput;
    orderBy?: Prisma.RedemptionOrderByWithRelationInput | Prisma.RedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedemptionScalarFieldEnum | Prisma.RedemptionScalarFieldEnum[];
};
export type RedemptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where?: Prisma.RedemptionWhereInput;
    orderBy?: Prisma.RedemptionOrderByWithRelationInput | Prisma.RedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedemptionScalarFieldEnum | Prisma.RedemptionScalarFieldEnum[];
};
export type RedemptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedemptionCreateInput, Prisma.RedemptionUncheckedCreateInput>;
};
export type RedemptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RedemptionCreateManyInput | Prisma.RedemptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RedemptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    data: Prisma.RedemptionCreateManyInput | Prisma.RedemptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RedemptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RedemptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedemptionUpdateInput, Prisma.RedemptionUncheckedUpdateInput>;
    where: Prisma.RedemptionWhereUniqueInput;
};
export type RedemptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RedemptionUpdateManyMutationInput, Prisma.RedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RedemptionWhereInput;
    limit?: number;
};
export type RedemptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedemptionUpdateManyMutationInput, Prisma.RedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RedemptionWhereInput;
    limit?: number;
    include?: Prisma.RedemptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RedemptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where: Prisma.RedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedemptionCreateInput, Prisma.RedemptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RedemptionUpdateInput, Prisma.RedemptionUncheckedUpdateInput>;
};
export type RedemptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
    where: Prisma.RedemptionWhereUniqueInput;
};
export type RedemptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedemptionWhereInput;
    limit?: number;
};
export type RedemptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RedemptionOmit<ExtArgs> | null;
    include?: Prisma.RedemptionInclude<ExtArgs> | null;
};
export {};
