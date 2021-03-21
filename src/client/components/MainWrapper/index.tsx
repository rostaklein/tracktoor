import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { NewCustomer } from "../NewCustomer/NewCustomer";
// import { ListCustomers } from "../ListCustomers/ListCustomers";
// import { DetailCustomer } from "../DetailCustomer/DetailCustomer";

import { LanguageSwitch } from "../LanguageSwitch";
import { MainMenu } from "../MainMenu";
import { ListBatches } from "../Batches";

import * as S from "./styles";
import { Logout } from "./components/Logout";

import LogoImage from "~client/images/tracktoor_logo.svg";

type RouteConfig = {
  path: string;
  title: string;
  Component?: React.ReactElement;
};

export const MainWrapper: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const routes: RouteConfig[] = [
    {
      path: "/batches",
      title: t("Batches"),
      Component: <ListBatches />,
    },
    {
      path: "/customers/new",
      title: t("Add customer"),
      Component: <>Add new</>,
    },
    {
      path: "/customers/list",
      title: t("Customers"),
      Component: <>List</>,
    },
    {
      path: "/customers/:id",
      title: t("Customer detail"),
      Component: <>Detail</>,
    },
  ];

  useEffect(() => {
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    );

    if (currentRoute) {
      document.title = `${currentRoute.title} | mayoor`;
    }
  }, [location, i18n.language]);

  return (
    <S.BodyWrapper data-test-id="main-body-wrapper">
      <S.Aside>
        <S.LogoWrapper>
          <S.Logo src={LogoImage} />
        </S.LogoWrapper>
        <MainMenu />
      </S.Aside>
      <S.Main>
        <S.StyledNavbar>
          <LanguageSwitch />
          <Logout />
        </S.StyledNavbar>
        <S.Content>
          <Switch>
            {routes.map(({ path, title, Component }) => (
              <Route path={path} key={path}>
                {Component ? Component : <S.PageTitle>{title}</S.PageTitle>}
              </Route>
            ))}
            <Redirect from="/" to="/orders/list" />
          </Switch>
        </S.Content>
      </S.Main>
    </S.BodyWrapper>
  );
};
