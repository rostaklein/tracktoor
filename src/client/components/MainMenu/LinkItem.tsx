import React from "react";
import styled from "styled-components";
import { NavLink, NavLinkProps } from "react-router-dom";

import { Colors } from "../common.styles";

const MenuLinkItem = styled(NavLink)<NavLinkProps<unknown>>`
  width: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  padding: 12px 24px;
  margin: 2px 0;
  font-weight: 600;
  border-right: solid transparent 5px;
  transition: all 0.2s;
  color: ${Colors.DARK_GRAY3};
  &.active {
    background: ${Colors.LIGHT_GRAY4};
    border-color: ${Colors.PRIMARY};
  }
  &:hover {
    background: ${Colors.LIGHT_GRAY4};
    color: inherit;
    text-decoration: none;
  }
`;

interface Props {
  name: string;
  to: NavLinkProps<unknown>["to"];
}

export const LinkItem: React.FC<Props> = ({ icon, name, to }) => {
  return (
    <MenuLinkItem to={to} data-test-id={`menu-link-item-${to}`}>
      {icon}
      {name}
    </MenuLinkItem>
  );
};
