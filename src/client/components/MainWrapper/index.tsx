import React, { useEffect, Suspense, LazyExoticComponent, lazy } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LanguageSwitch } from "../LanguageSwitch";
import { MainMenu } from "../MainMenu";
import { CenteredSpinner } from "../common.styles";

import * as S from "./styles";
import { Logout } from "./components/Logout";

import LogoImage from "~client/images/tracktoor_logo.svg";

const ListBatches = lazy(() => import("../Batches"));

type RouteConfig = {
  path: string;
  title: string;
  Component?: LazyExoticComponent<React.FC<{}>>;
};

export const MainWrapper: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const routes: RouteConfig[] = [
    {
      path: "/batches",
      title: t("Batches"),
      Component: ListBatches,
    },
    {
      path: "/customers/new",
      title: t("Add customer"),
    },
    {
      path: "/customers/list",
      title: t("Customers"),
    },
    {
      path: "/customers/:id",
      title: t("Customer detail"),
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
          <Suspense fallback={<CenteredSpinner />}>
            <Switch>
              {routes.map(({ path, Component }) => (
                <Route path={path} key={path} component={Component} />
              ))}
              <Redirect from="/" to="/orders/list" />
            </Switch>
          </Suspense>
        </S.Content>
      </S.Main>
    </S.BodyWrapper>
  );
};
