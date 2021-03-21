import React from "react";
import { Input, Spin } from "antd";
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

export const Colors = {
  PRIMARY: "#00a093",

  BLACK: "#10161A",

  BLUE1: "#0E5A8A",
  BLUE2: "#106BA3",
  BLUE3: "#137CBD",
  BLUE4: "#2B95D6",
  BLUE5: "#48AFF0",

  COBALT1: "#1F4B99",
  COBALT2: "#2458B3",
  COBALT3: "#2965CC",
  COBALT4: "#4580E6",
  COBALT5: "#669EFF",

  DARK_GRAY1: "#182026",
  DARK_GRAY2: "#202B33",
  DARK_GRAY3: "#293742",
  DARK_GRAY4: "#30404D",
  DARK_GRAY5: "#394B59",

  GRAY1: "#5C7080",
  GRAY2: "#738694",
  GRAY3: "#8A9BA8",
  GRAY4: "#A7B6C2",
  GRAY5: "#BFCCD6",

  GREEN1: "#0A6640",
  GREEN2: "#0D8050",
  GREEN3: "#0F9960",
  GREEN4: "#15B371",
  GREEN5: "#3DCC91",

  LIGHT_GRAY1: "#CED9E0",
  LIGHT_GRAY2: "#D8E1E8",
  LIGHT_GRAY3: "#E1E8ED",
  LIGHT_GRAY4: "#EBF1F5",
  LIGHT_GRAY5: "#F5F8FA",

  WHITE: "#FFFFFF",
};

export const StyledTableWrapper = styled.div`
  padding: 0 25px;
  .ant-table-thead > tr > th {
    background-color: ${Colors.LIGHT_GRAY5};
  }
`;

export const StyledSearch = styled(Input.Search)`
  margin-bottom: 15px;
`;
