import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  PlusCircleOutlined,
  FileSearchOutlined,
  UserAddOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Colors } from "../common.styles";

import { LinkItem } from "./LinkItem";

const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
`;

const CategoryName = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${Colors.GRAY4};
  padding: 5px 15px;
`;

export const MainMenu: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledMenu>
      <li>
        <CategoryName>{t("Commodities")}</CategoryName>
        <LinkItem
          icon={<PlusCircleOutlined />}
          name={t("Add commodity")}
          to={"/commodity/new"}
        />
        <LinkItem
          icon={<FileSearchOutlined />}
          name={t("List commodities")}
          to={"/commodity/list"}
        />
      </li>
      <li>
        <CategoryName>{t("Customers")}</CategoryName>
        <LinkItem
          icon={<UserAddOutlined />}
          name={t("Add customer")}
          to={"/customer/new"}
        />
        <LinkItem
          icon={<TeamOutlined />}
          name={t("Customers")}
          to={"/customer/list"}
        />
      </li>
    </StyledMenu>
  );
};
