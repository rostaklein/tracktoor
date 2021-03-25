import React, { Suspense } from "react";
import { useQuery } from "react-apollo";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloError } from "apollo-client";
import { Callout } from "@blueprintjs/core";

import { useAppDispatch, useAppState } from "../../context/AppContext";
import { CenteredSpinner } from "../common.styles";

import { ME_QUERY } from "./queries";
import { LoginForm } from "./LoginForm";

import { MeQuery } from "~/src/client/types";

const isBackendError = (error?: ApolloError) => {
  return (
    error?.networkError ||
    error?.graphQLErrors.length === 0 ||
    error?.graphQLErrors[0].extensions?.code === "INTERNAL_SERVER_ERROR"
  );
};

const isNotAuthorizedError = (error?: ApolloError) => {
  return (
    error &&
    error.graphQLErrors.length &&
    error.graphQLErrors[0].extensions?.code === "NOT_AUTHORIZED"
  );
};

export const AuthWrapper: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppState();
  const { t } = useTranslation();

  const { called, loading, error } = useQuery<MeQuery>(ME_QUERY, {
    onError: (error) => {
      const token = localStorage.getItem("auth-token");
      if (token && isNotAuthorizedError(error)) {
        localStorage.removeItem("auth-token");
        // Toaster.create().show({ message: t("inactivity_logged_out") });
      }
    },
    onCompleted: (data) => {
      if (data && data.me) {
        const { id, name, username } = data.me;
        dispatch({
          type: "SET_CURRENT_USER",
          user: {
            id,
            name,
            username,
          },
        });
      }
    },
  });

  if (loading || !called) {
    return <CenteredSpinner />;
  }

  if (!currentUser) {
    return (
      <Suspense fallback={<CenteredSpinner />}>
        {isBackendError(error) && (
          <Callout intent="danger">
            {t("Could not connect to the backend server")}
          </Callout>
        )}
        <LoginForm />
      </Suspense>
    );
  }

  return <Router>{children}</Router>;
};
