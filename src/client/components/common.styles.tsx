import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const CenteredWrapper = styled.div`
  padding: 30px 25px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

export const CenteredSpinner: React.FC = () => (
  <CenteredWrapper style={{ background: "transparent" }}>
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
  </CenteredWrapper>
);
