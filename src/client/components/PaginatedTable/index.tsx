import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Row, Col, Empty } from "antd";
import { ColumnProps, TablePaginationConfig } from "antd/lib/table";

import { StyledSearch, StyledTableWrapper } from "../common.styles";

type Props<RecordType> = {
  records: RecordType[];
  totalCount: number;
  columns: ColumnProps<RecordType>[];
  loading: boolean;
  onPaginationChange?: (newPageNumber: number) => void;
  onSearch?: (searchValue: string) => void;
  translations: {
    search: string;
    emptyResult: string;
  };
  topRowContent?: React.ReactNode;
  pageSize: number;
};

interface Record {
  id: string | number;
}

export function PaginatedTable<T extends Record>(props: Props<T>) {
  const { t } = useTranslation();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const pagination: TablePaginationConfig = {
    current: currentPageNumber,
    total: props.totalCount,
    pageSize: props.pageSize,
    hideOnSinglePage: true,
    showTotal: (total, range) =>
      t("Showing {{start}}-{{end}} of {{total}} items", {
        total,
        start: range[0],
        end: range[1],
      }),
    onChange: (newPageNumber) => {
      if (props.onPaginationChange) {
        setCurrentPageNumber(newPageNumber);
        props.onPaginationChange(newPageNumber);
      }
    },
  };

  const searchSubmitHandler = (searchValue: string) => {
    setCurrentPageNumber(1);
    props.onSearch && props.onSearch(searchValue);
  };

  return (
    <StyledTableWrapper>
      <Row justify="end">
        {props.topRowContent}
        {props.onSearch && (
          <Col xs={24} md={6}>
            <StyledSearch
              enterButton
              placeholder={props.translations.search}
              onSearch={searchSubmitHandler}
            />
          </Col>
        )}
      </Row>

      <Table<T>
        columns={props.columns}
        dataSource={props.records}
        pagination={pagination}
        loading={props.loading}
        rowKey={(record) => record.id}
        size="middle"
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={props.translations.emptyResult}
            />
          ),
        }}
      />
    </StyledTableWrapper>
  );
}