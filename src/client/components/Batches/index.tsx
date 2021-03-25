/* eslint-disable  @typescript-eslint/camelcase */
import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "react-apollo";

import { PageTitle } from "../MainWrapper/styles";

import { Add, Delete, GetAll, Update } from "./queries";
import { CustomerForm, FormValues } from "./components/BatchForm";

import {
  GetAllBatches,
  GetAllBatches_batches,
  AddBatch,
  AddBatchVariables,
  UpdateBatch,
  UpdateBatchVariables,
  DeleteBatch,
  DeleteBatchVariables,
} from "~/src/client/types";

export const ListBatches: React.FC = () => {
  const { t } = useTranslation();

  const { data, loading, updateQuery } = useQuery<GetAllBatches>(GetAll, {
    variables: { first: 50 },
  });
  const [addBatchMutation, { loading: addLoading }] = useMutation<
    AddBatch,
    AddBatchVariables
  >(Add);
  const [updateBatchMutation, { loading: updateLoading }] = useMutation<
    UpdateBatch,
    UpdateBatchVariables
  >(Update);
  const [deleteBatchMutation] = useMutation<DeleteBatch, DeleteBatchVariables>(
    Delete
  );

  const onAddNew = async (values: FormValues) => {
    await addBatchMutation({
      variables: {
        data: {
          identifier: values.identifier ?? "",
          name: values.name,
          note: values.note,
        },
      },
      update: (_, response) => {
        const newBatch = response.data?.createOneBatch;
        if (!newBatch || !data) {
          return;
        }
        updateQuery((prev) => ({ batches: [...prev.batches, newBatch] }));
      },
    });
  };

  const onDelete = (id: number) => {
    deleteBatchMutation({
      variables: { where: { id } },
      update: (_, response) => {
        const removedItemId = response.data?.deleteOneBatch?.id;
        if (!removedItemId) {
          return;
        }
        updateQuery((prev) => ({
          batches: prev.batches.filter((item) => item.id !== removedItemId),
        }));
      },
    });
  };

  const items = data?.batches ?? [];

  return (
    <>
      <PageTitle>{t("Add new batch")}</PageTitle>
      <CustomerForm
        initialValues={{ identifier: null, name: null, note: null }}
        onSubmit={onAddNew}
        submit={{ loading: addLoading, text: t("Add") }}
      />
      <PageTitle>{t("List batches")}</PageTitle>
      {items.map((item) => (
        <div key={item.id}>{JSON.stringify(item)}</div>
      ))}
    </>
  );
};

export default ListBatches;
