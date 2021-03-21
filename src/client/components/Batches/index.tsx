/* eslint-disable  @typescript-eslint/camelcase */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { useQuery } from "react-apollo";
import { TFunction } from "i18next";
import { ColumnProps } from "antd/lib/table";

import { PaginatedTable } from "../PaginatedTable";
import { PageTitle } from "../MainWrapper/styles";

import { GetAll } from "./queries";

import { GetAllBatches, GetAllBatches_batches } from "~client/types";

const getColumns = (t: TFunction): ColumnProps<GetAllBatches_batches>[] => [
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
];

export const ListBatches: React.FC = () => {
  const { t } = useTranslation();

  const { data, loading } = useQuery<GetAllBatches>(GetAll, {
    variables: { first: 50 },
  });

  const items = data?.batches ?? [];

  return (
    <>
      <Row>
        <Col md={18}>
          <PageTitle>{t("List batches")}</PageTitle>
        </Col>
      </Row>
      <PaginatedTable<GetAllBatches_batches>
        columns={getColumns(t)}
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
