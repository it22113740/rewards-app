import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PerkModel = runtime.Types.Result.DefaultSelection<Prisma.$PerkPayload>;
export type AggregatePerk = {
    _count: PerkCountAggregateOutputType | null;
    _avg: PerkAvgAggregateOutputType | null;
    _sum: PerkSumAggregateOutputType | null;
    _min: PerkMinAggregateOutputType | null;
    _max: PerkMaxAggregateOutputType | null;
};
export type PerkAvgAggregateOutputType = {
    pointsRequired: number | null;
    discountPercent: number | null;
};
export type PerkSumAggregateOutputType = {
    pointsRequired: number | null;
    discountPercent: number | null;
};
export type PerkMinAggregateOutputType = {
    id: string | null;
    venueId: string | null;
    pointsRequired: number | null;
    title: string | null;
    description: string | null;
    type: $Enums.PerkType | null;
    discountPercent: number | null;
    promoCodePrefix: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PerkMaxAggregateOutputType = {
    id: string | null;
    venueId: string | null;
    pointsRequired: number | null;
    title: string | null;
    description: string | null;
    type: $Enums.PerkType | null;
    discountPercent: number | null;
    promoCodePrefix: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PerkCountAggregateOutputType = {
    id: number;
    venueId: number;
    pointsRequired: number;
    title: number;
    description: number;
    type: number;
    discountPercent: number;
    promoCodePrefix: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PerkAvgAggregateInputType = {
    pointsRequired?: true;
    discountPercent?: true;
};
export type PerkSumAggregateInputType = {
    pointsRequired?: true;
    discountPercent?: true;
};
export type PerkMinAggregateInputType = {
    id?: true;
    venueId?: true;
    pointsRequired?: true;
    title?: true;
    description?: true;
    type?: true;
    discountPercent?: true;
    promoCodePrefix?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PerkMaxAggregateInputType = {
    id?: true;
    venueId?: true;
    pointsRequired?: true;
    title?: true;
    description?: true;
    type?: true;
    discountPercent?: true;
    promoCodePrefix?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PerkCountAggregateInputType = {
    id?: true;
    venueId?: true;
    pointsRequired?: true;
    title?: true;
    description?: true;
    type?: true;
    discountPercent?: true;
    promoCodePrefix?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PerkAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerkWhereInput;
    orderBy?: Prisma.PerkOrderByWithRelationInput | Prisma.PerkOrderByWithRelationInput[];
    cursor?: Prisma.PerkWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PerkCountAggregateInputType;
    _avg?: PerkAvgAggregateInputType;
    _sum?: PerkSumAggregateInputType;
    _min?: PerkMinAggregateInputType;
    _max?: PerkMaxAggregateInputType;
};
export type GetPerkAggregateType<T extends PerkAggregateArgs> = {
    [P in keyof T & keyof AggregatePerk]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePerk[P]> : Prisma.GetScalarType<T[P], AggregatePerk[P]>;
};
export type PerkGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerkWhereInput;
    orderBy?: Prisma.PerkOrderByWithAggregationInput | Prisma.PerkOrderByWithAggregationInput[];
    by: Prisma.PerkScalarFieldEnum[] | Prisma.PerkScalarFieldEnum;
    having?: Prisma.PerkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PerkCountAggregateInputType | true;
    _avg?: PerkAvgAggregateInputType;
    _sum?: PerkSumAggregateInputType;
    _min?: PerkMinAggregateInputType;
    _max?: PerkMaxAggregateInputType;
};
export type PerkGroupByOutputType = {
    id: string;
    venueId: string;
    pointsRequired: number;
    title: string;
    description: string | null;
    type: $Enums.PerkType;
    discountPercent: number | null;
    promoCodePrefix: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PerkCountAggregateOutputType | null;
    _avg: PerkAvgAggregateOutputType | null;
    _sum: PerkSumAggregateOutputType | null;
    _min: PerkMinAggregateOutputType | null;
    _max: PerkMaxAggregateOutputType | null;
};
type GetPerkGroupByPayload<T extends PerkGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PerkGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PerkGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PerkGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PerkGroupByOutputType[P]>;
}>>;
export type PerkWhereInput = {
    AND?: Prisma.PerkWhereInput | Prisma.PerkWhereInput[];
    OR?: Prisma.PerkWhereInput[];
    NOT?: Prisma.PerkWhereInput | Prisma.PerkWhereInput[];
    id?: Prisma.StringFilter<"Perk"> | string;
    venueId?: Prisma.StringFilter<"Perk"> | string;
    pointsRequired?: Prisma.IntFilter<"Perk"> | number;
    title?: Prisma.StringFilter<"Perk"> | string;
    description?: Prisma.StringNullableFilter<"Perk"> | string | null;
    type?: Prisma.EnumPerkTypeFilter<"Perk"> | $Enums.PerkType;
    discountPercent?: Prisma.IntNullableFilter<"Perk"> | number | null;
    promoCodePrefix?: Prisma.StringNullableFilter<"Perk"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
    redemptions?: Prisma.RedemptionListRelationFilter;
};
export type PerkOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    pointsRequired?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrderInput | Prisma.SortOrder;
    promoCodePrefix?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    venue?: Prisma.VenueOrderByWithRelationInput;
    redemptions?: Prisma.RedemptionOrderByRelationAggregateInput;
};
export type PerkWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PerkWhereInput | Prisma.PerkWhereInput[];
    OR?: Prisma.PerkWhereInput[];
    NOT?: Prisma.PerkWhereInput | Prisma.PerkWhereInput[];
    venueId?: Prisma.StringFilter<"Perk"> | string;
    pointsRequired?: Prisma.IntFilter<"Perk"> | number;
    title?: Prisma.StringFilter<"Perk"> | string;
    description?: Prisma.StringNullableFilter<"Perk"> | string | null;
    type?: Prisma.EnumPerkTypeFilter<"Perk"> | $Enums.PerkType;
    discountPercent?: Prisma.IntNullableFilter<"Perk"> | number | null;
    promoCodePrefix?: Prisma.StringNullableFilter<"Perk"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
    redemptions?: Prisma.RedemptionListRelationFilter;
}, "id">;
export type PerkOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    pointsRequired?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrderInput | Prisma.SortOrder;
    promoCodePrefix?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PerkCountOrderByAggregateInput;
    _avg?: Prisma.PerkAvgOrderByAggregateInput;
    _max?: Prisma.PerkMaxOrderByAggregateInput;
    _min?: Prisma.PerkMinOrderByAggregateInput;
    _sum?: Prisma.PerkSumOrderByAggregateInput;
};
export type PerkScalarWhereWithAggregatesInput = {
    AND?: Prisma.PerkScalarWhereWithAggregatesInput | Prisma.PerkScalarWhereWithAggregatesInput[];
    OR?: Prisma.PerkScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PerkScalarWhereWithAggregatesInput | Prisma.PerkScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Perk"> | string;
    venueId?: Prisma.StringWithAggregatesFilter<"Perk"> | string;
    pointsRequired?: Prisma.IntWithAggregatesFilter<"Perk"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Perk"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Perk"> | string | null;
    type?: Prisma.EnumPerkTypeWithAggregatesFilter<"Perk"> | $Enums.PerkType;
    discountPercent?: Prisma.IntNullableWithAggregatesFilter<"Perk"> | number | null;
    promoCodePrefix?: Prisma.StringNullableWithAggregatesFilter<"Perk"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Perk"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Perk"> | Date | string;
};
export type PerkCreateInput = {
    id?: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    venue: Prisma.VenueCreateNestedOneWithoutPerksInput;
    redemptions?: Prisma.RedemptionCreateNestedManyWithoutPerkInput;
};
export type PerkUncheckedCreateInput = {
    id?: string;
    venueId: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    redemptions?: Prisma.RedemptionUncheckedCreateNestedManyWithoutPerkInput;
};
export type PerkUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.VenueUpdateOneRequiredWithoutPerksNestedInput;
    redemptions?: Prisma.RedemptionUpdateManyWithoutPerkNestedInput;
};
export type PerkUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    redemptions?: Prisma.RedemptionUncheckedUpdateManyWithoutPerkNestedInput;
};
export type PerkCreateManyInput = {
    id?: string;
    venueId: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PerkUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerkUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerkListRelationFilter = {
    every?: Prisma.PerkWhereInput;
    some?: Prisma.PerkWhereInput;
    none?: Prisma.PerkWhereInput;
};
export type PerkOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PerkCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    pointsRequired?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    promoCodePrefix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PerkAvgOrderByAggregateInput = {
    pointsRequired?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
};
export type PerkMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    pointsRequired?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    promoCodePrefix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PerkMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    pointsRequired?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
    promoCodePrefix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PerkSumOrderByAggregateInput = {
    pointsRequired?: Prisma.SortOrder;
    discountPercent?: Prisma.SortOrder;
};
export type PerkScalarRelationFilter = {
    is?: Prisma.PerkWhereInput;
    isNot?: Prisma.PerkWhereInput;
};
export type PerkCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput> | Prisma.PerkCreateWithoutVenueInput[] | Prisma.PerkUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutVenueInput | Prisma.PerkCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.PerkCreateManyVenueInputEnvelope;
    connect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
};
export type PerkUncheckedCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput> | Prisma.PerkCreateWithoutVenueInput[] | Prisma.PerkUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutVenueInput | Prisma.PerkCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.PerkCreateManyVenueInputEnvelope;
    connect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
};
export type PerkUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput> | Prisma.PerkCreateWithoutVenueInput[] | Prisma.PerkUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutVenueInput | Prisma.PerkCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.PerkUpsertWithWhereUniqueWithoutVenueInput | Prisma.PerkUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.PerkCreateManyVenueInputEnvelope;
    set?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    disconnect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    delete?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    connect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    update?: Prisma.PerkUpdateWithWhereUniqueWithoutVenueInput | Prisma.PerkUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.PerkUpdateManyWithWhereWithoutVenueInput | Prisma.PerkUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.PerkScalarWhereInput | Prisma.PerkScalarWhereInput[];
};
export type PerkUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput> | Prisma.PerkCreateWithoutVenueInput[] | Prisma.PerkUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutVenueInput | Prisma.PerkCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.PerkUpsertWithWhereUniqueWithoutVenueInput | Prisma.PerkUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.PerkCreateManyVenueInputEnvelope;
    set?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    disconnect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    delete?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    connect?: Prisma.PerkWhereUniqueInput | Prisma.PerkWhereUniqueInput[];
    update?: Prisma.PerkUpdateWithWhereUniqueWithoutVenueInput | Prisma.PerkUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.PerkUpdateManyWithWhereWithoutVenueInput | Prisma.PerkUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.PerkScalarWhereInput | Prisma.PerkScalarWhereInput[];
};
export type EnumPerkTypeFieldUpdateOperationsInput = {
    set?: $Enums.PerkType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PerkCreateNestedOneWithoutRedemptionsInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutRedemptionsInput, Prisma.PerkUncheckedCreateWithoutRedemptionsInput>;
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutRedemptionsInput;
    connect?: Prisma.PerkWhereUniqueInput;
};
export type PerkUpdateOneRequiredWithoutRedemptionsNestedInput = {
    create?: Prisma.XOR<Prisma.PerkCreateWithoutRedemptionsInput, Prisma.PerkUncheckedCreateWithoutRedemptionsInput>;
    connectOrCreate?: Prisma.PerkCreateOrConnectWithoutRedemptionsInput;
    upsert?: Prisma.PerkUpsertWithoutRedemptionsInput;
    connect?: Prisma.PerkWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PerkUpdateToOneWithWhereWithoutRedemptionsInput, Prisma.PerkUpdateWithoutRedemptionsInput>, Prisma.PerkUncheckedUpdateWithoutRedemptionsInput>;
};
export type PerkCreateWithoutVenueInput = {
    id?: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    redemptions?: Prisma.RedemptionCreateNestedManyWithoutPerkInput;
};
export type PerkUncheckedCreateWithoutVenueInput = {
    id?: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    redemptions?: Prisma.RedemptionUncheckedCreateNestedManyWithoutPerkInput;
};
export type PerkCreateOrConnectWithoutVenueInput = {
    where: Prisma.PerkWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput>;
};
export type PerkCreateManyVenueInputEnvelope = {
    data: Prisma.PerkCreateManyVenueInput | Prisma.PerkCreateManyVenueInput[];
    skipDuplicates?: boolean;
};
export type PerkUpsertWithWhereUniqueWithoutVenueInput = {
    where: Prisma.PerkWhereUniqueInput;
    update: Prisma.XOR<Prisma.PerkUpdateWithoutVenueInput, Prisma.PerkUncheckedUpdateWithoutVenueInput>;
    create: Prisma.XOR<Prisma.PerkCreateWithoutVenueInput, Prisma.PerkUncheckedCreateWithoutVenueInput>;
};
export type PerkUpdateWithWhereUniqueWithoutVenueInput = {
    where: Prisma.PerkWhereUniqueInput;
    data: Prisma.XOR<Prisma.PerkUpdateWithoutVenueInput, Prisma.PerkUncheckedUpdateWithoutVenueInput>;
};
export type PerkUpdateManyWithWhereWithoutVenueInput = {
    where: Prisma.PerkScalarWhereInput;
    data: Prisma.XOR<Prisma.PerkUpdateManyMutationInput, Prisma.PerkUncheckedUpdateManyWithoutVenueInput>;
};
export type PerkScalarWhereInput = {
    AND?: Prisma.PerkScalarWhereInput | Prisma.PerkScalarWhereInput[];
    OR?: Prisma.PerkScalarWhereInput[];
    NOT?: Prisma.PerkScalarWhereInput | Prisma.PerkScalarWhereInput[];
    id?: Prisma.StringFilter<"Perk"> | string;
    venueId?: Prisma.StringFilter<"Perk"> | string;
    pointsRequired?: Prisma.IntFilter<"Perk"> | number;
    title?: Prisma.StringFilter<"Perk"> | string;
    description?: Prisma.StringNullableFilter<"Perk"> | string | null;
    type?: Prisma.EnumPerkTypeFilter<"Perk"> | $Enums.PerkType;
    discountPercent?: Prisma.IntNullableFilter<"Perk"> | number | null;
    promoCodePrefix?: Prisma.StringNullableFilter<"Perk"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Perk"> | Date | string;
};
export type PerkCreateWithoutRedemptionsInput = {
    id?: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    venue: Prisma.VenueCreateNestedOneWithoutPerksInput;
};
export type PerkUncheckedCreateWithoutRedemptionsInput = {
    id?: string;
    venueId: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PerkCreateOrConnectWithoutRedemptionsInput = {
    where: Prisma.PerkWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerkCreateWithoutRedemptionsInput, Prisma.PerkUncheckedCreateWithoutRedemptionsInput>;
};
export type PerkUpsertWithoutRedemptionsInput = {
    update: Prisma.XOR<Prisma.PerkUpdateWithoutRedemptionsInput, Prisma.PerkUncheckedUpdateWithoutRedemptionsInput>;
    create: Prisma.XOR<Prisma.PerkCreateWithoutRedemptionsInput, Prisma.PerkUncheckedCreateWithoutRedemptionsInput>;
    where?: Prisma.PerkWhereInput;
};
export type PerkUpdateToOneWithWhereWithoutRedemptionsInput = {
    where?: Prisma.PerkWhereInput;
    data: Prisma.XOR<Prisma.PerkUpdateWithoutRedemptionsInput, Prisma.PerkUncheckedUpdateWithoutRedemptionsInput>;
};
export type PerkUpdateWithoutRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.VenueUpdateOneRequiredWithoutPerksNestedInput;
};
export type PerkUncheckedUpdateWithoutRedemptionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerkCreateManyVenueInput = {
    id?: string;
    pointsRequired: number;
    title: string;
    description?: string | null;
    type?: $Enums.PerkType;
    discountPercent?: number | null;
    promoCodePrefix?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PerkUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    redemptions?: Prisma.RedemptionUpdateManyWithoutPerkNestedInput;
};
export type PerkUncheckedUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    redemptions?: Prisma.RedemptionUncheckedUpdateManyWithoutPerkNestedInput;
};
export type PerkUncheckedUpdateManyWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumPerkTypeFieldUpdateOperationsInput | $Enums.PerkType;
    discountPercent?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promoCodePrefix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PerkCountOutputType = {
    redemptions: number;
};
export type PerkCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    redemptions?: boolean | PerkCountOutputTypeCountRedemptionsArgs;
};
export type PerkCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkCountOutputTypeSelect<ExtArgs> | null;
};
export type PerkCountOutputTypeCountRedemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedemptionWhereInput;
};
export type PerkSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venueId?: boolean;
    pointsRequired?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    discountPercent?: boolean;
    promoCodePrefix?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
    redemptions?: boolean | Prisma.Perk$redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PerkCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perk"]>;
export type PerkSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venueId?: boolean;
    pointsRequired?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    discountPercent?: boolean;
    promoCodePrefix?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perk"]>;
export type PerkSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venueId?: boolean;
    pointsRequired?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    discountPercent?: boolean;
    promoCodePrefix?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["perk"]>;
export type PerkSelectScalar = {
    id?: boolean;
    venueId?: boolean;
    pointsRequired?: boolean;
    title?: boolean;
    description?: boolean;
    type?: boolean;
    discountPercent?: boolean;
    promoCodePrefix?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PerkOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "venueId" | "pointsRequired" | "title" | "description" | "type" | "discountPercent" | "promoCodePrefix" | "createdAt" | "updatedAt", ExtArgs["result"]["perk"]>;
export type PerkInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
    redemptions?: boolean | Prisma.Perk$redemptionsArgs<ExtArgs>;
    _count?: boolean | Prisma.PerkCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PerkIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type PerkIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type $PerkPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Perk";
    objects: {
        venue: Prisma.$VenuePayload<ExtArgs>;
        redemptions: Prisma.$RedemptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        venueId: string;
        pointsRequired: number;
        title: string;
        description: string | null;
        type: $Enums.PerkType;
        discountPercent: number | null;
        promoCodePrefix: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["perk"]>;
    composites: {};
};
export type PerkGetPayload<S extends boolean | null | undefined | PerkDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PerkPayload, S>;
export type PerkCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PerkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PerkCountAggregateInputType | true;
};
export interface PerkDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Perk'];
        meta: {
            name: 'Perk';
        };
    };
    findUnique<T extends PerkFindUniqueArgs>(args: Prisma.SelectSubset<T, PerkFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PerkFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PerkFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PerkFindFirstArgs>(args?: Prisma.SelectSubset<T, PerkFindFirstArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PerkFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PerkFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PerkFindManyArgs>(args?: Prisma.SelectSubset<T, PerkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PerkCreateArgs>(args: Prisma.SelectSubset<T, PerkCreateArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PerkCreateManyArgs>(args?: Prisma.SelectSubset<T, PerkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PerkCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PerkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PerkDeleteArgs>(args: Prisma.SelectSubset<T, PerkDeleteArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PerkUpdateArgs>(args: Prisma.SelectSubset<T, PerkUpdateArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PerkDeleteManyArgs>(args?: Prisma.SelectSubset<T, PerkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PerkUpdateManyArgs>(args: Prisma.SelectSubset<T, PerkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PerkUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PerkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PerkUpsertArgs>(args: Prisma.SelectSubset<T, PerkUpsertArgs<ExtArgs>>): Prisma.Prisma__PerkClient<runtime.Types.Result.GetResult<Prisma.$PerkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PerkCountArgs>(args?: Prisma.Subset<T, PerkCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PerkCountAggregateOutputType> : number>;
    aggregate<T extends PerkAggregateArgs>(args: Prisma.Subset<T, PerkAggregateArgs>): Prisma.PrismaPromise<GetPerkAggregateType<T>>;
    groupBy<T extends PerkGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PerkGroupByArgs['orderBy'];
    } : {
        orderBy?: PerkGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PerkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PerkFieldRefs;
}
export interface Prisma__PerkClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    venue<T extends Prisma.VenueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VenueDefaultArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    redemptions<T extends Prisma.Perk$redemptionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Perk$redemptionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PerkFieldRefs {
    readonly id: Prisma.FieldRef<"Perk", 'String'>;
    readonly venueId: Prisma.FieldRef<"Perk", 'String'>;
    readonly pointsRequired: Prisma.FieldRef<"Perk", 'Int'>;
    readonly title: Prisma.FieldRef<"Perk", 'String'>;
    readonly description: Prisma.FieldRef<"Perk", 'String'>;
    readonly type: Prisma.FieldRef<"Perk", 'PerkType'>;
    readonly discountPercent: Prisma.FieldRef<"Perk", 'Int'>;
    readonly promoCodePrefix: Prisma.FieldRef<"Perk", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Perk", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Perk", 'DateTime'>;
}
export type PerkFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    where: Prisma.PerkWhereUniqueInput;
};
export type PerkFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    where: Prisma.PerkWhereUniqueInput;
};
export type PerkFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerkFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerkFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerkCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerkCreateInput, Prisma.PerkUncheckedCreateInput>;
};
export type PerkCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PerkCreateManyInput | Prisma.PerkCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PerkCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    data: Prisma.PerkCreateManyInput | Prisma.PerkCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PerkIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PerkUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerkUpdateInput, Prisma.PerkUncheckedUpdateInput>;
    where: Prisma.PerkWhereUniqueInput;
};
export type PerkUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PerkUpdateManyMutationInput, Prisma.PerkUncheckedUpdateManyInput>;
    where?: Prisma.PerkWhereInput;
    limit?: number;
};
export type PerkUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PerkUpdateManyMutationInput, Prisma.PerkUncheckedUpdateManyInput>;
    where?: Prisma.PerkWhereInput;
    limit?: number;
    include?: Prisma.PerkIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PerkUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    where: Prisma.PerkWhereUniqueInput;
    create: Prisma.XOR<Prisma.PerkCreateInput, Prisma.PerkUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PerkUpdateInput, Prisma.PerkUncheckedUpdateInput>;
};
export type PerkDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
    where: Prisma.PerkWhereUniqueInput;
};
export type PerkDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PerkWhereInput;
    limit?: number;
};
export type Perk$redemptionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PerkDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PerkSelect<ExtArgs> | null;
    omit?: Prisma.PerkOmit<ExtArgs> | null;
    include?: Prisma.PerkInclude<ExtArgs> | null;
};
export {};
