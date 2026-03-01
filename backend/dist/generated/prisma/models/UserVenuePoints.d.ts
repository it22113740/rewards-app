import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserVenuePointsModel = runtime.Types.Result.DefaultSelection<Prisma.$UserVenuePointsPayload>;
export type AggregateUserVenuePoints = {
    _count: UserVenuePointsCountAggregateOutputType | null;
    _avg: UserVenuePointsAvgAggregateOutputType | null;
    _sum: UserVenuePointsSumAggregateOutputType | null;
    _min: UserVenuePointsMinAggregateOutputType | null;
    _max: UserVenuePointsMaxAggregateOutputType | null;
};
export type UserVenuePointsAvgAggregateOutputType = {
    points: number | null;
};
export type UserVenuePointsSumAggregateOutputType = {
    points: number | null;
};
export type UserVenuePointsMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    venueId: string | null;
    points: number | null;
    updatedAt: Date | null;
};
export type UserVenuePointsMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    venueId: string | null;
    points: number | null;
    updatedAt: Date | null;
};
export type UserVenuePointsCountAggregateOutputType = {
    id: number;
    userId: number;
    venueId: number;
    points: number;
    updatedAt: number;
    _all: number;
};
export type UserVenuePointsAvgAggregateInputType = {
    points?: true;
};
export type UserVenuePointsSumAggregateInputType = {
    points?: true;
};
export type UserVenuePointsMinAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    points?: true;
    updatedAt?: true;
};
export type UserVenuePointsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    points?: true;
    updatedAt?: true;
};
export type UserVenuePointsCountAggregateInputType = {
    id?: true;
    userId?: true;
    venueId?: true;
    points?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserVenuePointsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserVenuePointsWhereInput;
    orderBy?: Prisma.UserVenuePointsOrderByWithRelationInput | Prisma.UserVenuePointsOrderByWithRelationInput[];
    cursor?: Prisma.UserVenuePointsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserVenuePointsCountAggregateInputType;
    _avg?: UserVenuePointsAvgAggregateInputType;
    _sum?: UserVenuePointsSumAggregateInputType;
    _min?: UserVenuePointsMinAggregateInputType;
    _max?: UserVenuePointsMaxAggregateInputType;
};
export type GetUserVenuePointsAggregateType<T extends UserVenuePointsAggregateArgs> = {
    [P in keyof T & keyof AggregateUserVenuePoints]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserVenuePoints[P]> : Prisma.GetScalarType<T[P], AggregateUserVenuePoints[P]>;
};
export type UserVenuePointsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserVenuePointsWhereInput;
    orderBy?: Prisma.UserVenuePointsOrderByWithAggregationInput | Prisma.UserVenuePointsOrderByWithAggregationInput[];
    by: Prisma.UserVenuePointsScalarFieldEnum[] | Prisma.UserVenuePointsScalarFieldEnum;
    having?: Prisma.UserVenuePointsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserVenuePointsCountAggregateInputType | true;
    _avg?: UserVenuePointsAvgAggregateInputType;
    _sum?: UserVenuePointsSumAggregateInputType;
    _min?: UserVenuePointsMinAggregateInputType;
    _max?: UserVenuePointsMaxAggregateInputType;
};
export type UserVenuePointsGroupByOutputType = {
    id: string;
    userId: string;
    venueId: string;
    points: number;
    updatedAt: Date;
    _count: UserVenuePointsCountAggregateOutputType | null;
    _avg: UserVenuePointsAvgAggregateOutputType | null;
    _sum: UserVenuePointsSumAggregateOutputType | null;
    _min: UserVenuePointsMinAggregateOutputType | null;
    _max: UserVenuePointsMaxAggregateOutputType | null;
};
type GetUserVenuePointsGroupByPayload<T extends UserVenuePointsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserVenuePointsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserVenuePointsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserVenuePointsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserVenuePointsGroupByOutputType[P]>;
}>>;
export type UserVenuePointsWhereInput = {
    AND?: Prisma.UserVenuePointsWhereInput | Prisma.UserVenuePointsWhereInput[];
    OR?: Prisma.UserVenuePointsWhereInput[];
    NOT?: Prisma.UserVenuePointsWhereInput | Prisma.UserVenuePointsWhereInput[];
    id?: Prisma.StringFilter<"UserVenuePoints"> | string;
    userId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    venueId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    points?: Prisma.IntFilter<"UserVenuePoints"> | number;
    updatedAt?: Prisma.DateTimeFilter<"UserVenuePoints"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
};
export type UserVenuePointsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    venue?: Prisma.VenueOrderByWithRelationInput;
};
export type UserVenuePointsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_venueId?: Prisma.UserVenuePointsUserIdVenueIdCompoundUniqueInput;
    AND?: Prisma.UserVenuePointsWhereInput | Prisma.UserVenuePointsWhereInput[];
    OR?: Prisma.UserVenuePointsWhereInput[];
    NOT?: Prisma.UserVenuePointsWhereInput | Prisma.UserVenuePointsWhereInput[];
    userId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    venueId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    points?: Prisma.IntFilter<"UserVenuePoints"> | number;
    updatedAt?: Prisma.DateTimeFilter<"UserVenuePoints"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    venue?: Prisma.XOR<Prisma.VenueScalarRelationFilter, Prisma.VenueWhereInput>;
}, "id" | "userId_venueId">;
export type UserVenuePointsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserVenuePointsCountOrderByAggregateInput;
    _avg?: Prisma.UserVenuePointsAvgOrderByAggregateInput;
    _max?: Prisma.UserVenuePointsMaxOrderByAggregateInput;
    _min?: Prisma.UserVenuePointsMinOrderByAggregateInput;
    _sum?: Prisma.UserVenuePointsSumOrderByAggregateInput;
};
export type UserVenuePointsScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserVenuePointsScalarWhereWithAggregatesInput | Prisma.UserVenuePointsScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserVenuePointsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserVenuePointsScalarWhereWithAggregatesInput | Prisma.UserVenuePointsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserVenuePoints"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserVenuePoints"> | string;
    venueId?: Prisma.StringWithAggregatesFilter<"UserVenuePoints"> | string;
    points?: Prisma.IntWithAggregatesFilter<"UserVenuePoints"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserVenuePoints"> | Date | string;
};
export type UserVenuePointsCreateInput = {
    id?: string;
    points?: number;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVenuePointsInput;
    venue: Prisma.VenueCreateNestedOneWithoutPointsInput;
};
export type UserVenuePointsUncheckedCreateInput = {
    id?: string;
    userId: string;
    venueId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVenuePointsNestedInput;
    venue?: Prisma.VenueUpdateOneRequiredWithoutPointsNestedInput;
};
export type UserVenuePointsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsCreateManyInput = {
    id?: string;
    userId: string;
    venueId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsListRelationFilter = {
    every?: Prisma.UserVenuePointsWhereInput;
    some?: Prisma.UserVenuePointsWhereInput;
    none?: Prisma.UserVenuePointsWhereInput;
};
export type UserVenuePointsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserVenuePointsUserIdVenueIdCompoundUniqueInput = {
    userId: string;
    venueId: string;
};
export type UserVenuePointsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserVenuePointsAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
};
export type UserVenuePointsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserVenuePointsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    venueId?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserVenuePointsSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
};
export type UserVenuePointsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput> | Prisma.UserVenuePointsCreateWithoutUserInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutUserInput | Prisma.UserVenuePointsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserVenuePointsCreateManyUserInputEnvelope;
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
};
export type UserVenuePointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput> | Prisma.UserVenuePointsCreateWithoutUserInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutUserInput | Prisma.UserVenuePointsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserVenuePointsCreateManyUserInputEnvelope;
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
};
export type UserVenuePointsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput> | Prisma.UserVenuePointsCreateWithoutUserInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutUserInput | Prisma.UserVenuePointsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutUserInput | Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserVenuePointsCreateManyUserInputEnvelope;
    set?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    disconnect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    delete?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    update?: Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutUserInput | Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserVenuePointsUpdateManyWithWhereWithoutUserInput | Prisma.UserVenuePointsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
};
export type UserVenuePointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput> | Prisma.UserVenuePointsCreateWithoutUserInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutUserInput | Prisma.UserVenuePointsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutUserInput | Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserVenuePointsCreateManyUserInputEnvelope;
    set?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    disconnect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    delete?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    update?: Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutUserInput | Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserVenuePointsUpdateManyWithWhereWithoutUserInput | Prisma.UserVenuePointsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
};
export type UserVenuePointsCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput> | Prisma.UserVenuePointsCreateWithoutVenueInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput | Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.UserVenuePointsCreateManyVenueInputEnvelope;
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
};
export type UserVenuePointsUncheckedCreateNestedManyWithoutVenueInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput> | Prisma.UserVenuePointsCreateWithoutVenueInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput | Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput[];
    createMany?: Prisma.UserVenuePointsCreateManyVenueInputEnvelope;
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
};
export type UserVenuePointsUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput> | Prisma.UserVenuePointsCreateWithoutVenueInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput | Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutVenueInput | Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.UserVenuePointsCreateManyVenueInputEnvelope;
    set?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    disconnect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    delete?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    update?: Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutVenueInput | Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.UserVenuePointsUpdateManyWithWhereWithoutVenueInput | Prisma.UserVenuePointsUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
};
export type UserVenuePointsUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput> | Prisma.UserVenuePointsCreateWithoutVenueInput[] | Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput[];
    connectOrCreate?: Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput | Prisma.UserVenuePointsCreateOrConnectWithoutVenueInput[];
    upsert?: Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutVenueInput | Prisma.UserVenuePointsUpsertWithWhereUniqueWithoutVenueInput[];
    createMany?: Prisma.UserVenuePointsCreateManyVenueInputEnvelope;
    set?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    disconnect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    delete?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    connect?: Prisma.UserVenuePointsWhereUniqueInput | Prisma.UserVenuePointsWhereUniqueInput[];
    update?: Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutVenueInput | Prisma.UserVenuePointsUpdateWithWhereUniqueWithoutVenueInput[];
    updateMany?: Prisma.UserVenuePointsUpdateManyWithWhereWithoutVenueInput | Prisma.UserVenuePointsUpdateManyWithWhereWithoutVenueInput[];
    deleteMany?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
};
export type UserVenuePointsCreateWithoutUserInput = {
    id?: string;
    points?: number;
    updatedAt?: Date | string;
    venue: Prisma.VenueCreateNestedOneWithoutPointsInput;
};
export type UserVenuePointsUncheckedCreateWithoutUserInput = {
    id?: string;
    venueId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsCreateOrConnectWithoutUserInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput>;
};
export type UserVenuePointsCreateManyUserInputEnvelope = {
    data: Prisma.UserVenuePointsCreateManyUserInput | Prisma.UserVenuePointsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserVenuePointsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserVenuePointsUpdateWithoutUserInput, Prisma.UserVenuePointsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutUserInput, Prisma.UserVenuePointsUncheckedCreateWithoutUserInput>;
};
export type UserVenuePointsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateWithoutUserInput, Prisma.UserVenuePointsUncheckedUpdateWithoutUserInput>;
};
export type UserVenuePointsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserVenuePointsScalarWhereInput;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateManyMutationInput, Prisma.UserVenuePointsUncheckedUpdateManyWithoutUserInput>;
};
export type UserVenuePointsScalarWhereInput = {
    AND?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
    OR?: Prisma.UserVenuePointsScalarWhereInput[];
    NOT?: Prisma.UserVenuePointsScalarWhereInput | Prisma.UserVenuePointsScalarWhereInput[];
    id?: Prisma.StringFilter<"UserVenuePoints"> | string;
    userId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    venueId?: Prisma.StringFilter<"UserVenuePoints"> | string;
    points?: Prisma.IntFilter<"UserVenuePoints"> | number;
    updatedAt?: Prisma.DateTimeFilter<"UserVenuePoints"> | Date | string;
};
export type UserVenuePointsCreateWithoutVenueInput = {
    id?: string;
    points?: number;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutVenuePointsInput;
};
export type UserVenuePointsUncheckedCreateWithoutVenueInput = {
    id?: string;
    userId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsCreateOrConnectWithoutVenueInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput>;
};
export type UserVenuePointsCreateManyVenueInputEnvelope = {
    data: Prisma.UserVenuePointsCreateManyVenueInput | Prisma.UserVenuePointsCreateManyVenueInput[];
    skipDuplicates?: boolean;
};
export type UserVenuePointsUpsertWithWhereUniqueWithoutVenueInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserVenuePointsUpdateWithoutVenueInput, Prisma.UserVenuePointsUncheckedUpdateWithoutVenueInput>;
    create: Prisma.XOR<Prisma.UserVenuePointsCreateWithoutVenueInput, Prisma.UserVenuePointsUncheckedCreateWithoutVenueInput>;
};
export type UserVenuePointsUpdateWithWhereUniqueWithoutVenueInput = {
    where: Prisma.UserVenuePointsWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateWithoutVenueInput, Prisma.UserVenuePointsUncheckedUpdateWithoutVenueInput>;
};
export type UserVenuePointsUpdateManyWithWhereWithoutVenueInput = {
    where: Prisma.UserVenuePointsScalarWhereInput;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateManyMutationInput, Prisma.UserVenuePointsUncheckedUpdateManyWithoutVenueInput>;
};
export type UserVenuePointsCreateManyUserInput = {
    id?: string;
    venueId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    venue?: Prisma.VenueUpdateOneRequiredWithoutPointsNestedInput;
};
export type UserVenuePointsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venueId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsCreateManyVenueInput = {
    id?: string;
    userId: string;
    points?: number;
    updatedAt?: Date | string;
};
export type UserVenuePointsUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutVenuePointsNestedInput;
};
export type UserVenuePointsUncheckedUpdateWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsUncheckedUpdateManyWithoutVenueInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserVenuePointsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    points?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userVenuePoints"]>;
export type UserVenuePointsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    points?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userVenuePoints"]>;
export type UserVenuePointsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    points?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userVenuePoints"]>;
export type UserVenuePointsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    venueId?: boolean;
    points?: boolean;
    updatedAt?: boolean;
};
export type UserVenuePointsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "venueId" | "points" | "updatedAt", ExtArgs["result"]["userVenuePoints"]>;
export type UserVenuePointsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type UserVenuePointsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type UserVenuePointsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    venue?: boolean | Prisma.VenueDefaultArgs<ExtArgs>;
};
export type $UserVenuePointsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserVenuePoints";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        venue: Prisma.$VenuePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        venueId: string;
        points: number;
        updatedAt: Date;
    }, ExtArgs["result"]["userVenuePoints"]>;
    composites: {};
};
export type UserVenuePointsGetPayload<S extends boolean | null | undefined | UserVenuePointsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload, S>;
export type UserVenuePointsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserVenuePointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserVenuePointsCountAggregateInputType | true;
};
export interface UserVenuePointsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserVenuePoints'];
        meta: {
            name: 'UserVenuePoints';
        };
    };
    findUnique<T extends UserVenuePointsFindUniqueArgs>(args: Prisma.SelectSubset<T, UserVenuePointsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserVenuePointsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserVenuePointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserVenuePointsFindFirstArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserVenuePointsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserVenuePointsFindManyArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserVenuePointsCreateArgs>(args: Prisma.SelectSubset<T, UserVenuePointsCreateArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserVenuePointsCreateManyArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserVenuePointsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserVenuePointsDeleteArgs>(args: Prisma.SelectSubset<T, UserVenuePointsDeleteArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserVenuePointsUpdateArgs>(args: Prisma.SelectSubset<T, UserVenuePointsUpdateArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserVenuePointsDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserVenuePointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserVenuePointsUpdateManyArgs>(args: Prisma.SelectSubset<T, UserVenuePointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserVenuePointsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserVenuePointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserVenuePointsUpsertArgs>(args: Prisma.SelectSubset<T, UserVenuePointsUpsertArgs<ExtArgs>>): Prisma.Prisma__UserVenuePointsClient<runtime.Types.Result.GetResult<Prisma.$UserVenuePointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserVenuePointsCountArgs>(args?: Prisma.Subset<T, UserVenuePointsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserVenuePointsCountAggregateOutputType> : number>;
    aggregate<T extends UserVenuePointsAggregateArgs>(args: Prisma.Subset<T, UserVenuePointsAggregateArgs>): Prisma.PrismaPromise<GetUserVenuePointsAggregateType<T>>;
    groupBy<T extends UserVenuePointsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserVenuePointsGroupByArgs['orderBy'];
    } : {
        orderBy?: UserVenuePointsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserVenuePointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVenuePointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserVenuePointsFieldRefs;
}
export interface Prisma__UserVenuePointsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    venue<T extends Prisma.VenueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VenueDefaultArgs<ExtArgs>>): Prisma.Prisma__VenueClient<runtime.Types.Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserVenuePointsFieldRefs {
    readonly id: Prisma.FieldRef<"UserVenuePoints", 'String'>;
    readonly userId: Prisma.FieldRef<"UserVenuePoints", 'String'>;
    readonly venueId: Prisma.FieldRef<"UserVenuePoints", 'String'>;
    readonly points: Prisma.FieldRef<"UserVenuePoints", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"UserVenuePoints", 'DateTime'>;
}
export type UserVenuePointsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    where: Prisma.UserVenuePointsWhereUniqueInput;
};
export type UserVenuePointsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    where: Prisma.UserVenuePointsWhereUniqueInput;
};
export type UserVenuePointsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserVenuePointsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserVenuePointsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserVenuePointsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserVenuePointsCreateInput, Prisma.UserVenuePointsUncheckedCreateInput>;
};
export type UserVenuePointsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserVenuePointsCreateManyInput | Prisma.UserVenuePointsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserVenuePointsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    data: Prisma.UserVenuePointsCreateManyInput | Prisma.UserVenuePointsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserVenuePointsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserVenuePointsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateInput, Prisma.UserVenuePointsUncheckedUpdateInput>;
    where: Prisma.UserVenuePointsWhereUniqueInput;
};
export type UserVenuePointsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateManyMutationInput, Prisma.UserVenuePointsUncheckedUpdateManyInput>;
    where?: Prisma.UserVenuePointsWhereInput;
    limit?: number;
};
export type UserVenuePointsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserVenuePointsUpdateManyMutationInput, Prisma.UserVenuePointsUncheckedUpdateManyInput>;
    where?: Prisma.UserVenuePointsWhereInput;
    limit?: number;
    include?: Prisma.UserVenuePointsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserVenuePointsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    where: Prisma.UserVenuePointsWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserVenuePointsCreateInput, Prisma.UserVenuePointsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserVenuePointsUpdateInput, Prisma.UserVenuePointsUncheckedUpdateInput>;
};
export type UserVenuePointsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
    where: Prisma.UserVenuePointsWhereUniqueInput;
};
export type UserVenuePointsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserVenuePointsWhereInput;
    limit?: number;
};
export type UserVenuePointsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserVenuePointsSelect<ExtArgs> | null;
    omit?: Prisma.UserVenuePointsOmit<ExtArgs> | null;
    include?: Prisma.UserVenuePointsInclude<ExtArgs> | null;
};
export {};
