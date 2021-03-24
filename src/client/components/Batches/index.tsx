/* eslint-disable  @typescript-eslint/camelcase */
import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "react-apollo";
import { TFunction } from "i18next";
import { ColumnProps } from "antd/lib/table";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { PaginatedTable } from "../PaginatedTable";
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
} from "~client/types";

const getColumns = (
  t: TFunction,
  onDelete: (id: number) => void
): ColumnProps<GetAllBatches_batches>[] => [
  {
    title: t("Id"),
    dataIndex: "id",
    width: 80,
  },
  {
    title: t("Batch identifier"),
    ellipsis: true,
    dataIndex: "identifier",
  },
  {
    title: t("Batch name"),
    dataIndex: "name",
  },
  {
    title: t("Note"),
    width: 200,
    ellipsis: true,
    dataIndex: "note",
  },
  {
    title: t("Created by"),
    ellipsis: true,
    dataIndex: "createdBy.name",
  },
  {
    key: "actions",
    width: 40,
    render: (_, record, i) => {
      return (
        <Popconfirm
          placement="topRight"
          onConfirm={() => onDelete(record.id)}
          title={t("Do you really want to remove this item?")}
        >
          <Button icon={<DeleteOutlined />} type="link" />
        </Popconfirm>
      );
    },
  },
];

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
      <PaginatedTable<GetAllBatches_batches>
        columns={getColumns(t, onDelete)}
        records={items}
        totalCount={data?.batches.length ?? 0}
        loading={loading}
        pageSize={50}
        translations={{
          emptyResult: t("No batches yet"),
          search: t("Search batches"),
        }}
      />
    </>
  );
};

export default ListBatches;
