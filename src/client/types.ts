/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user {
  __typename: "User";
  id: number;
  name: string | null;
  username: string;
}

export interface LoginMutation_login {
  __typename: "AuthPayload";
  user: LoginMutation_login_user | null;
  token: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login | null;
}

export interface LoginMutationVariables {
  username: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  id: number;
  name: string | null;
  username: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllBatches
// ====================================================

export interface GetAllBatches_batches_createdBy {
  __typename: "User";
  name: string | null;
}

export interface GetAllBatches_batches {
  __typename: "Batch";
  id: number;
  identifier: string;
  name: string | null;
  note: string | null;
  createdBy: GetAllBatches_batches_createdBy;
}

export interface GetAllBatches {
  batches: GetAllBatches_batches[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddBatch
// ====================================================

export interface AddBatch_createOneBatch_createdBy {
  __typename: "User";
  name: string | null;
}

export interface AddBatch_createOneBatch {
  __typename: "Batch";
  id: number;
  identifier: string;
  name: string | null;
  note: string | null;
  createdBy: AddBatch_createOneBatch_createdBy;
}

export interface AddBatch {
  createOneBatch: AddBatch_createOneBatch;
}

export interface AddBatchVariables {
  data: BatchCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBatch
// ====================================================

export interface UpdateBatch_updateOneBatch_createdBy {
  __typename: "User";
  name: string | null;
}

export interface UpdateBatch_updateOneBatch {
  __typename: "Batch";
  id: number;
  identifier: string;
  name: string | null;
  note: string | null;
  createdBy: UpdateBatch_updateOneBatch_createdBy;
}

export interface UpdateBatch {
  updateOneBatch: UpdateBatch_updateOneBatch | null;
}

export interface UpdateBatchVariables {
  where: BatchWhereUniqueInput;
  data: BatchUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteBatch
// ====================================================

export interface DeleteBatch_deleteOneBatch {
  __typename: "Batch";
  id: number;
}

export interface DeleteBatch {
  deleteOneBatch: DeleteBatch_deleteOneBatch | null;
}

export interface DeleteBatchVariables {
  where: BatchWhereUniqueInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BatchFragment
// ====================================================

export interface BatchFragment_createdBy {
  __typename: "User";
  name: string | null;
}

export interface BatchFragment {
  __typename: "Batch";
  id: number;
  identifier: string;
  name: string | null;
  note: string | null;
  createdBy: BatchFragment_createdBy;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export interface BatchCreateInput {
  Order?: OrderCreateNestedManyWithoutBatchInput | null;
  identifier: string;
  name?: string | null;
  note?: string | null;
}

export interface BatchCreateNestedManyWithoutCreatedByInput {
  connect?: BatchWhereUniqueInput[] | null;
  connectOrCreate?: BatchCreateOrConnectWithoutCreatedByInput[] | null;
  create?: BatchCreateWithoutCreatedByInput[] | null;
}

export interface BatchCreateNestedOneWithoutOrderInput {
  connect?: BatchWhereUniqueInput | null;
  connectOrCreate?: BatchCreateOrConnectWithoutOrderInput | null;
  create?: BatchCreateWithoutOrderInput | null;
}

export interface BatchCreateOrConnectWithoutCreatedByInput {
  create: BatchCreateWithoutCreatedByInput;
  where: BatchWhereUniqueInput;
}

export interface BatchCreateOrConnectWithoutOrderInput {
  create: BatchCreateWithoutOrderInput;
  where: BatchWhereUniqueInput;
}

export interface BatchCreateWithoutCreatedByInput {
  Order?: OrderCreateNestedManyWithoutBatchInput | null;
  identifier: string;
  name?: string | null;
  note?: string | null;
}

export interface BatchCreateWithoutOrderInput {
  createdBy: UserCreateNestedOneWithoutCreatedBatchesInput;
  identifier: string;
  name?: string | null;
  note?: string | null;
}

export interface BatchScalarWhereInput {
  AND?: BatchScalarWhereInput[] | null;
  NOT?: BatchScalarWhereInput[] | null;
  OR?: BatchScalarWhereInput[] | null;
  id?: IntFilter | null;
  identifier?: StringFilter | null;
  name?: StringNullableFilter | null;
  note?: StringNullableFilter | null;
  userId?: IntFilter | null;
}

export interface BatchUpdateInput {
  Order?: OrderUpdateManyWithoutBatchInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedBatchesInput | null;
  identifier?: StringFieldUpdateOperationsInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
}

export interface BatchUpdateManyMutationInput {
  identifier?: StringFieldUpdateOperationsInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
}

export interface BatchUpdateManyWithWhereWithoutCreatedByInput {
  data: BatchUpdateManyMutationInput;
  where: BatchScalarWhereInput;
}

export interface BatchUpdateManyWithoutCreatedByInput {
  connect?: BatchWhereUniqueInput[] | null;
  connectOrCreate?: BatchCreateOrConnectWithoutCreatedByInput[] | null;
  create?: BatchCreateWithoutCreatedByInput[] | null;
  delete?: BatchWhereUniqueInput[] | null;
  deleteMany?: BatchScalarWhereInput[] | null;
  disconnect?: BatchWhereUniqueInput[] | null;
  set?: BatchWhereUniqueInput[] | null;
  update?: BatchUpdateWithWhereUniqueWithoutCreatedByInput[] | null;
  updateMany?: BatchUpdateManyWithWhereWithoutCreatedByInput[] | null;
  upsert?: BatchUpsertWithWhereUniqueWithoutCreatedByInput[] | null;
}

export interface BatchUpdateOneRequiredWithoutOrderInput {
  connect?: BatchWhereUniqueInput | null;
  connectOrCreate?: BatchCreateOrConnectWithoutOrderInput | null;
  create?: BatchCreateWithoutOrderInput | null;
  update?: BatchUpdateWithoutOrderInput | null;
  upsert?: BatchUpsertWithoutOrderInput | null;
}

export interface BatchUpdateWithWhereUniqueWithoutCreatedByInput {
  data: BatchUpdateWithoutCreatedByInput;
  where: BatchWhereUniqueInput;
}

export interface BatchUpdateWithoutCreatedByInput {
  Order?: OrderUpdateManyWithoutBatchInput | null;
  identifier?: StringFieldUpdateOperationsInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
}

export interface BatchUpdateWithoutOrderInput {
  createdBy?: UserUpdateOneRequiredWithoutCreatedBatchesInput | null;
  identifier?: StringFieldUpdateOperationsInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
}

export interface BatchUpsertWithWhereUniqueWithoutCreatedByInput {
  create: BatchCreateWithoutCreatedByInput;
  update: BatchUpdateWithoutCreatedByInput;
  where: BatchWhereUniqueInput;
}

export interface BatchUpsertWithoutOrderInput {
  create: BatchCreateWithoutOrderInput;
  update: BatchUpdateWithoutOrderInput;
}

export interface BatchWhereUniqueInput {
  id?: number | null;
  identifier?: string | null;
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean | null;
}

export interface BoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface CommodityCreateNestedManyWithoutCreatedByInput {
  connect?: CommodityWhereUniqueInput[] | null;
  connectOrCreate?: CommodityCreateOrConnectWithoutCreatedByInput[] | null;
  create?: CommodityCreateWithoutCreatedByInput[] | null;
}

export interface CommodityCreateNestedManyWithoutOrdersInput {
  connect?: CommodityWhereUniqueInput[] | null;
  connectOrCreate?: CommodityCreateOrConnectWithoutOrdersInput[] | null;
  create?: CommodityCreateWithoutOrdersInput[] | null;
}

export interface CommodityCreateOrConnectWithoutCreatedByInput {
  create: CommodityCreateWithoutCreatedByInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityCreateOrConnectWithoutOrdersInput {
  create: CommodityCreateWithoutOrdersInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityCreateWithoutCreatedByInput {
  createdAt?: any | null;
  description?: string | null;
  name: string;
  note?: string | null;
  orders?: OrderCreateNestedManyWithoutItemsInput | null;
  photoUrl?: string | null;
  price: number;
  updatedAt?: any | null;
}

export interface CommodityCreateWithoutOrdersInput {
  createdAt?: any | null;
  createdBy: UserCreateNestedOneWithoutCreatedCommoditiesInput;
  description?: string | null;
  name: string;
  note?: string | null;
  photoUrl?: string | null;
  price: number;
  updatedAt?: any | null;
}

export interface CommodityScalarWhereInput {
  AND?: CommodityScalarWhereInput[] | null;
  NOT?: CommodityScalarWhereInput[] | null;
  OR?: CommodityScalarWhereInput[] | null;
  createdAt?: DateTimeFilter | null;
  description?: StringNullableFilter | null;
  id?: IntFilter | null;
  name?: StringFilter | null;
  note?: StringNullableFilter | null;
  photoUrl?: StringNullableFilter | null;
  price?: IntFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: IntFilter | null;
}

export interface CommodityUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  description?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  photoUrl?: NullableStringFieldUpdateOperationsInput | null;
  price?: IntFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CommodityUpdateManyWithWhereWithoutCreatedByInput {
  data: CommodityUpdateManyMutationInput;
  where: CommodityScalarWhereInput;
}

export interface CommodityUpdateManyWithWhereWithoutOrdersInput {
  data: CommodityUpdateManyMutationInput;
  where: CommodityScalarWhereInput;
}

export interface CommodityUpdateManyWithoutCreatedByInput {
  connect?: CommodityWhereUniqueInput[] | null;
  connectOrCreate?: CommodityCreateOrConnectWithoutCreatedByInput[] | null;
  create?: CommodityCreateWithoutCreatedByInput[] | null;
  delete?: CommodityWhereUniqueInput[] | null;
  deleteMany?: CommodityScalarWhereInput[] | null;
  disconnect?: CommodityWhereUniqueInput[] | null;
  set?: CommodityWhereUniqueInput[] | null;
  update?: CommodityUpdateWithWhereUniqueWithoutCreatedByInput[] | null;
  updateMany?: CommodityUpdateManyWithWhereWithoutCreatedByInput[] | null;
  upsert?: CommodityUpsertWithWhereUniqueWithoutCreatedByInput[] | null;
}

export interface CommodityUpdateManyWithoutOrdersInput {
  connect?: CommodityWhereUniqueInput[] | null;
  connectOrCreate?: CommodityCreateOrConnectWithoutOrdersInput[] | null;
  create?: CommodityCreateWithoutOrdersInput[] | null;
  delete?: CommodityWhereUniqueInput[] | null;
  deleteMany?: CommodityScalarWhereInput[] | null;
  disconnect?: CommodityWhereUniqueInput[] | null;
  set?: CommodityWhereUniqueInput[] | null;
  update?: CommodityUpdateWithWhereUniqueWithoutOrdersInput[] | null;
  updateMany?: CommodityUpdateManyWithWhereWithoutOrdersInput[] | null;
  upsert?: CommodityUpsertWithWhereUniqueWithoutOrdersInput[] | null;
}

export interface CommodityUpdateWithWhereUniqueWithoutCreatedByInput {
  data: CommodityUpdateWithoutCreatedByInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityUpdateWithWhereUniqueWithoutOrdersInput {
  data: CommodityUpdateWithoutOrdersInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityUpdateWithoutCreatedByInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  description?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  orders?: OrderUpdateManyWithoutItemsInput | null;
  photoUrl?: NullableStringFieldUpdateOperationsInput | null;
  price?: IntFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CommodityUpdateWithoutOrdersInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedCommoditiesInput | null;
  description?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  photoUrl?: NullableStringFieldUpdateOperationsInput | null;
  price?: IntFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CommodityUpsertWithWhereUniqueWithoutCreatedByInput {
  create: CommodityCreateWithoutCreatedByInput;
  update: CommodityUpdateWithoutCreatedByInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityUpsertWithWhereUniqueWithoutOrdersInput {
  create: CommodityCreateWithoutOrdersInput;
  update: CommodityUpdateWithoutOrdersInput;
  where: CommodityWhereUniqueInput;
}

export interface CommodityWhereUniqueInput {
  id?: number | null;
}

export interface CustomerCreateNestedManyWithoutCreatedByInput {
  connect?: CustomerWhereUniqueInput[] | null;
  connectOrCreate?: CustomerCreateOrConnectWithoutCreatedByInput[] | null;
  create?: CustomerCreateWithoutCreatedByInput[] | null;
}

export interface CustomerCreateNestedOneWithoutOrdersInput {
  connect?: CustomerWhereUniqueInput | null;
  connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | null;
  create?: CustomerCreateWithoutOrdersInput | null;
}

export interface CustomerCreateOrConnectWithoutCreatedByInput {
  create: CustomerCreateWithoutCreatedByInput;
  where: CustomerWhereUniqueInput;
}

export interface CustomerCreateOrConnectWithoutOrdersInput {
  create: CustomerCreateWithoutOrdersInput;
  where: CustomerWhereUniqueInput;
}

export interface CustomerCreateWithoutCreatedByInput {
  createdAt?: any | null;
  fbProfileUrl?: string | null;
  name: string;
  note?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomerInput | null;
  personalIdentifier: string;
  updatedAt?: any | null;
}

export interface CustomerCreateWithoutOrdersInput {
  createdAt?: any | null;
  createdBy: UserCreateNestedOneWithoutCreatedCustomersInput;
  fbProfileUrl?: string | null;
  name: string;
  note?: string | null;
  personalIdentifier: string;
  updatedAt?: any | null;
}

export interface CustomerScalarWhereInput {
  AND?: CustomerScalarWhereInput[] | null;
  NOT?: CustomerScalarWhereInput[] | null;
  OR?: CustomerScalarWhereInput[] | null;
  createdAt?: DateTimeFilter | null;
  fbProfileUrl?: StringNullableFilter | null;
  id?: IntFilter | null;
  name?: StringFilter | null;
  note?: StringNullableFilter | null;
  personalIdentifier?: StringFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: IntFilter | null;
}

export interface CustomerUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  fbProfileUrl?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  personalIdentifier?: StringFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CustomerUpdateManyWithWhereWithoutCreatedByInput {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
}

export interface CustomerUpdateManyWithoutCreatedByInput {
  connect?: CustomerWhereUniqueInput[] | null;
  connectOrCreate?: CustomerCreateOrConnectWithoutCreatedByInput[] | null;
  create?: CustomerCreateWithoutCreatedByInput[] | null;
  delete?: CustomerWhereUniqueInput[] | null;
  deleteMany?: CustomerScalarWhereInput[] | null;
  disconnect?: CustomerWhereUniqueInput[] | null;
  set?: CustomerWhereUniqueInput[] | null;
  update?: CustomerUpdateWithWhereUniqueWithoutCreatedByInput[] | null;
  updateMany?: CustomerUpdateManyWithWhereWithoutCreatedByInput[] | null;
  upsert?: CustomerUpsertWithWhereUniqueWithoutCreatedByInput[] | null;
}

export interface CustomerUpdateOneRequiredWithoutOrdersInput {
  connect?: CustomerWhereUniqueInput | null;
  connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput | null;
  create?: CustomerCreateWithoutOrdersInput | null;
  update?: CustomerUpdateWithoutOrdersInput | null;
  upsert?: CustomerUpsertWithoutOrdersInput | null;
}

export interface CustomerUpdateWithWhereUniqueWithoutCreatedByInput {
  data: CustomerUpdateWithoutCreatedByInput;
  where: CustomerWhereUniqueInput;
}

export interface CustomerUpdateWithoutCreatedByInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  fbProfileUrl?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  orders?: OrderUpdateManyWithoutCustomerInput | null;
  personalIdentifier?: StringFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CustomerUpdateWithoutOrdersInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedCustomersInput | null;
  fbProfileUrl?: NullableStringFieldUpdateOperationsInput | null;
  name?: StringFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  personalIdentifier?: StringFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface CustomerUpsertWithWhereUniqueWithoutCreatedByInput {
  create: CustomerCreateWithoutCreatedByInput;
  update: CustomerUpdateWithoutCreatedByInput;
  where: CustomerWhereUniqueInput;
}

export interface CustomerUpsertWithoutOrdersInput {
  create: CustomerCreateWithoutOrdersInput;
  update: CustomerUpdateWithoutOrdersInput;
}

export interface CustomerWhereUniqueInput {
  id?: number | null;
  personalIdentifier?: string | null;
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: any | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  gt?: any | null;
  gte?: any | null;
  in?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  not?: NestedDateTimeFilter | null;
  notIn?: any[] | null;
}

export interface IntFieldUpdateOperationsInput {
  decrement?: number | null;
  divide?: number | null;
  increment?: number | null;
  multiply?: number | null;
  set?: number | null;
}

export interface IntFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntFilter | null;
  notIn?: number[] | null;
}

export interface NestedBoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: any | null;
  gt?: any | null;
  gte?: any | null;
  in?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  not?: NestedDateTimeFilter | null;
  notIn?: any[] | null;
}

export interface NestedIntFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedIntFilter | null;
  notIn?: number[] | null;
}

export interface NestedStringFilter {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringFilter | null;
  notIn?: string[] | null;
  startsWith?: string | null;
}

export interface NestedStringNullableFilter {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringNullableFilter | null;
  notIn?: string[] | null;
  startsWith?: string | null;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface OrderCreateNestedManyWithoutBatchInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutBatchInput[] | null;
  create?: OrderCreateWithoutBatchInput[] | null;
}

export interface OrderCreateNestedManyWithoutCreatedByInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput[] | null;
  create?: OrderCreateWithoutCreatedByInput[] | null;
}

export interface OrderCreateNestedManyWithoutCustomerInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | null;
  create?: OrderCreateWithoutCustomerInput[] | null;
}

export interface OrderCreateNestedManyWithoutItemsInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutItemsInput[] | null;
  create?: OrderCreateWithoutItemsInput[] | null;
}

export interface OrderCreateOrConnectWithoutBatchInput {
  create: OrderCreateWithoutBatchInput;
  where: OrderWhereUniqueInput;
}

export interface OrderCreateOrConnectWithoutCreatedByInput {
  create: OrderCreateWithoutCreatedByInput;
  where: OrderWhereUniqueInput;
}

export interface OrderCreateOrConnectWithoutCustomerInput {
  create: OrderCreateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
}

export interface OrderCreateOrConnectWithoutItemsInput {
  create: OrderCreateWithoutItemsInput;
  where: OrderWhereUniqueInput;
}

export interface OrderCreateWithoutBatchInput {
  createdAt?: any | null;
  createdBy: UserCreateNestedOneWithoutCreatedOrdersInput;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  extraCost: number;
  items?: CommodityCreateNestedManyWithoutOrdersInput | null;
  note?: string | null;
  paid: boolean;
  updatedAt?: any | null;
}

export interface OrderCreateWithoutCreatedByInput {
  batch: BatchCreateNestedOneWithoutOrderInput;
  createdAt?: any | null;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  extraCost: number;
  items?: CommodityCreateNestedManyWithoutOrdersInput | null;
  note?: string | null;
  paid: boolean;
  updatedAt?: any | null;
}

export interface OrderCreateWithoutCustomerInput {
  batch: BatchCreateNestedOneWithoutOrderInput;
  createdAt?: any | null;
  createdBy: UserCreateNestedOneWithoutCreatedOrdersInput;
  extraCost: number;
  items?: CommodityCreateNestedManyWithoutOrdersInput | null;
  note?: string | null;
  paid: boolean;
  updatedAt?: any | null;
}

export interface OrderCreateWithoutItemsInput {
  batch: BatchCreateNestedOneWithoutOrderInput;
  createdAt?: any | null;
  createdBy: UserCreateNestedOneWithoutCreatedOrdersInput;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  extraCost: number;
  note?: string | null;
  paid: boolean;
  updatedAt?: any | null;
}

export interface OrderScalarWhereInput {
  AND?: OrderScalarWhereInput[] | null;
  NOT?: OrderScalarWhereInput[] | null;
  OR?: OrderScalarWhereInput[] | null;
  batchId?: IntFilter | null;
  createdAt?: DateTimeFilter | null;
  customerId?: IntFilter | null;
  extraCost?: IntFilter | null;
  id?: IntFilter | null;
  note?: StringNullableFilter | null;
  paid?: BoolFilter | null;
  updatedAt?: DateTimeFilter | null;
  userId?: IntFilter | null;
}

export interface OrderUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  extraCost?: IntFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  paid?: BoolFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface OrderUpdateManyWithWhereWithoutBatchInput {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
}

export interface OrderUpdateManyWithWhereWithoutCreatedByInput {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
}

export interface OrderUpdateManyWithWhereWithoutCustomerInput {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
}

export interface OrderUpdateManyWithWhereWithoutItemsInput {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
}

export interface OrderUpdateManyWithoutBatchInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutBatchInput[] | null;
  create?: OrderCreateWithoutBatchInput[] | null;
  delete?: OrderWhereUniqueInput[] | null;
  deleteMany?: OrderScalarWhereInput[] | null;
  disconnect?: OrderWhereUniqueInput[] | null;
  set?: OrderWhereUniqueInput[] | null;
  update?: OrderUpdateWithWhereUniqueWithoutBatchInput[] | null;
  updateMany?: OrderUpdateManyWithWhereWithoutBatchInput[] | null;
  upsert?: OrderUpsertWithWhereUniqueWithoutBatchInput[] | null;
}

export interface OrderUpdateManyWithoutCreatedByInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput[] | null;
  create?: OrderCreateWithoutCreatedByInput[] | null;
  delete?: OrderWhereUniqueInput[] | null;
  deleteMany?: OrderScalarWhereInput[] | null;
  disconnect?: OrderWhereUniqueInput[] | null;
  set?: OrderWhereUniqueInput[] | null;
  update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput[] | null;
  updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput[] | null;
  upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput[] | null;
}

export interface OrderUpdateManyWithoutCustomerInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput[] | null;
  create?: OrderCreateWithoutCustomerInput[] | null;
  delete?: OrderWhereUniqueInput[] | null;
  deleteMany?: OrderScalarWhereInput[] | null;
  disconnect?: OrderWhereUniqueInput[] | null;
  set?: OrderWhereUniqueInput[] | null;
  update?: OrderUpdateWithWhereUniqueWithoutCustomerInput[] | null;
  updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput[] | null;
  upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput[] | null;
}

export interface OrderUpdateManyWithoutItemsInput {
  connect?: OrderWhereUniqueInput[] | null;
  connectOrCreate?: OrderCreateOrConnectWithoutItemsInput[] | null;
  create?: OrderCreateWithoutItemsInput[] | null;
  delete?: OrderWhereUniqueInput[] | null;
  deleteMany?: OrderScalarWhereInput[] | null;
  disconnect?: OrderWhereUniqueInput[] | null;
  set?: OrderWhereUniqueInput[] | null;
  update?: OrderUpdateWithWhereUniqueWithoutItemsInput[] | null;
  updateMany?: OrderUpdateManyWithWhereWithoutItemsInput[] | null;
  upsert?: OrderUpsertWithWhereUniqueWithoutItemsInput[] | null;
}

export interface OrderUpdateWithWhereUniqueWithoutBatchInput {
  data: OrderUpdateWithoutBatchInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpdateWithWhereUniqueWithoutCreatedByInput {
  data: OrderUpdateWithoutCreatedByInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpdateWithWhereUniqueWithoutCustomerInput {
  data: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpdateWithWhereUniqueWithoutItemsInput {
  data: OrderUpdateWithoutItemsInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpdateWithoutBatchInput {
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersInput | null;
  customer?: CustomerUpdateOneRequiredWithoutOrdersInput | null;
  extraCost?: IntFieldUpdateOperationsInput | null;
  items?: CommodityUpdateManyWithoutOrdersInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  paid?: BoolFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface OrderUpdateWithoutCreatedByInput {
  batch?: BatchUpdateOneRequiredWithoutOrderInput | null;
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  customer?: CustomerUpdateOneRequiredWithoutOrdersInput | null;
  extraCost?: IntFieldUpdateOperationsInput | null;
  items?: CommodityUpdateManyWithoutOrdersInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  paid?: BoolFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface OrderUpdateWithoutCustomerInput {
  batch?: BatchUpdateOneRequiredWithoutOrderInput | null;
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersInput | null;
  extraCost?: IntFieldUpdateOperationsInput | null;
  items?: CommodityUpdateManyWithoutOrdersInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  paid?: BoolFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface OrderUpdateWithoutItemsInput {
  batch?: BatchUpdateOneRequiredWithoutOrderInput | null;
  createdAt?: DateTimeFieldUpdateOperationsInput | null;
  createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersInput | null;
  customer?: CustomerUpdateOneRequiredWithoutOrdersInput | null;
  extraCost?: IntFieldUpdateOperationsInput | null;
  note?: NullableStringFieldUpdateOperationsInput | null;
  paid?: BoolFieldUpdateOperationsInput | null;
  updatedAt?: DateTimeFieldUpdateOperationsInput | null;
}

export interface OrderUpsertWithWhereUniqueWithoutBatchInput {
  create: OrderCreateWithoutBatchInput;
  update: OrderUpdateWithoutBatchInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpsertWithWhereUniqueWithoutCreatedByInput {
  create: OrderCreateWithoutCreatedByInput;
  update: OrderUpdateWithoutCreatedByInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpsertWithWhereUniqueWithoutCustomerInput {
  create: OrderCreateWithoutCustomerInput;
  update: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
}

export interface OrderUpsertWithWhereUniqueWithoutItemsInput {
  create: OrderCreateWithoutItemsInput;
  update: OrderUpdateWithoutItemsInput;
  where: OrderWhereUniqueInput;
}

export interface OrderWhereUniqueInput {
  id?: number | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFilter {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
  notIn?: string[] | null;
  startsWith?: string | null;
}

export interface StringNullableFilter {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringNullableFilter | null;
  notIn?: string[] | null;
  startsWith?: string | null;
}

export interface UserCreateNestedOneWithoutCreatedBatchesInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedBatchesInput | null;
  create?: UserCreateWithoutCreatedBatchesInput | null;
}

export interface UserCreateNestedOneWithoutCreatedCommoditiesInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedCommoditiesInput | null;
  create?: UserCreateWithoutCreatedCommoditiesInput | null;
}

export interface UserCreateNestedOneWithoutCreatedCustomersInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedCustomersInput | null;
  create?: UserCreateWithoutCreatedCustomersInput | null;
}

export interface UserCreateNestedOneWithoutCreatedOrdersInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput | null;
  create?: UserCreateWithoutCreatedOrdersInput | null;
}

export interface UserCreateOrConnectWithoutCreatedBatchesInput {
  create: UserCreateWithoutCreatedBatchesInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateOrConnectWithoutCreatedCommoditiesInput {
  create: UserCreateWithoutCreatedCommoditiesInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateOrConnectWithoutCreatedCustomersInput {
  create: UserCreateWithoutCreatedCustomersInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateOrConnectWithoutCreatedOrdersInput {
  create: UserCreateWithoutCreatedOrdersInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateWithoutCreatedBatchesInput {
  active?: boolean | null;
  createdCommodities?: CommodityCreateNestedManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerCreateNestedManyWithoutCreatedByInput | null;
  createdOrders?: OrderCreateNestedManyWithoutCreatedByInput | null;
  name?: string | null;
  password: string;
  username: string;
}

export interface UserCreateWithoutCreatedCommoditiesInput {
  active?: boolean | null;
  createdBatches?: BatchCreateNestedManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerCreateNestedManyWithoutCreatedByInput | null;
  createdOrders?: OrderCreateNestedManyWithoutCreatedByInput | null;
  name?: string | null;
  password: string;
  username: string;
}

export interface UserCreateWithoutCreatedCustomersInput {
  active?: boolean | null;
  createdBatches?: BatchCreateNestedManyWithoutCreatedByInput | null;
  createdCommodities?: CommodityCreateNestedManyWithoutCreatedByInput | null;
  createdOrders?: OrderCreateNestedManyWithoutCreatedByInput | null;
  name?: string | null;
  password: string;
  username: string;
}

export interface UserCreateWithoutCreatedOrdersInput {
  active?: boolean | null;
  createdBatches?: BatchCreateNestedManyWithoutCreatedByInput | null;
  createdCommodities?: CommodityCreateNestedManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerCreateNestedManyWithoutCreatedByInput | null;
  name?: string | null;
  password: string;
  username: string;
}

export interface UserUpdateOneRequiredWithoutCreatedBatchesInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedBatchesInput | null;
  create?: UserCreateWithoutCreatedBatchesInput | null;
  update?: UserUpdateWithoutCreatedBatchesInput | null;
  upsert?: UserUpsertWithoutCreatedBatchesInput | null;
}

export interface UserUpdateOneRequiredWithoutCreatedCommoditiesInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedCommoditiesInput | null;
  create?: UserCreateWithoutCreatedCommoditiesInput | null;
  update?: UserUpdateWithoutCreatedCommoditiesInput | null;
  upsert?: UserUpsertWithoutCreatedCommoditiesInput | null;
}

export interface UserUpdateOneRequiredWithoutCreatedCustomersInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedCustomersInput | null;
  create?: UserCreateWithoutCreatedCustomersInput | null;
  update?: UserUpdateWithoutCreatedCustomersInput | null;
  upsert?: UserUpsertWithoutCreatedCustomersInput | null;
}

export interface UserUpdateOneRequiredWithoutCreatedOrdersInput {
  connect?: UserWhereUniqueInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput | null;
  create?: UserCreateWithoutCreatedOrdersInput | null;
  update?: UserUpdateWithoutCreatedOrdersInput | null;
  upsert?: UserUpsertWithoutCreatedOrdersInput | null;
}

export interface UserUpdateWithoutCreatedBatchesInput {
  active?: BoolFieldUpdateOperationsInput | null;
  createdCommodities?: CommodityUpdateManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerUpdateManyWithoutCreatedByInput | null;
  createdOrders?: OrderUpdateManyWithoutCreatedByInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  password?: StringFieldUpdateOperationsInput | null;
  username?: StringFieldUpdateOperationsInput | null;
}

export interface UserUpdateWithoutCreatedCommoditiesInput {
  active?: BoolFieldUpdateOperationsInput | null;
  createdBatches?: BatchUpdateManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerUpdateManyWithoutCreatedByInput | null;
  createdOrders?: OrderUpdateManyWithoutCreatedByInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  password?: StringFieldUpdateOperationsInput | null;
  username?: StringFieldUpdateOperationsInput | null;
}

export interface UserUpdateWithoutCreatedCustomersInput {
  active?: BoolFieldUpdateOperationsInput | null;
  createdBatches?: BatchUpdateManyWithoutCreatedByInput | null;
  createdCommodities?: CommodityUpdateManyWithoutCreatedByInput | null;
  createdOrders?: OrderUpdateManyWithoutCreatedByInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  password?: StringFieldUpdateOperationsInput | null;
  username?: StringFieldUpdateOperationsInput | null;
}

export interface UserUpdateWithoutCreatedOrdersInput {
  active?: BoolFieldUpdateOperationsInput | null;
  createdBatches?: BatchUpdateManyWithoutCreatedByInput | null;
  createdCommodities?: CommodityUpdateManyWithoutCreatedByInput | null;
  createdCustomers?: CustomerUpdateManyWithoutCreatedByInput | null;
  name?: NullableStringFieldUpdateOperationsInput | null;
  password?: StringFieldUpdateOperationsInput | null;
  username?: StringFieldUpdateOperationsInput | null;
}

export interface UserUpsertWithoutCreatedBatchesInput {
  create: UserCreateWithoutCreatedBatchesInput;
  update: UserUpdateWithoutCreatedBatchesInput;
}

export interface UserUpsertWithoutCreatedCommoditiesInput {
  create: UserCreateWithoutCreatedCommoditiesInput;
  update: UserUpdateWithoutCreatedCommoditiesInput;
}

export interface UserUpsertWithoutCreatedCustomersInput {
  create: UserCreateWithoutCreatedCustomersInput;
  update: UserUpdateWithoutCreatedCustomersInput;
}

export interface UserUpsertWithoutCreatedOrdersInput {
  create: UserCreateWithoutCreatedOrdersInput;
  update: UserUpdateWithoutCreatedOrdersInput;
}

export interface UserWhereUniqueInput {
  id?: number | null;
  username?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
