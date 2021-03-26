import { Button, Tooltip } from "@blueprintjs/core";
import React from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppState } from "~/src/client/context/AppContext";

export const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppState();
  const { t } = useTranslation();

  const onLogoutClick = () => {
    localStorage.removeItem("auth-token");
    dispatch({ type: "SET_CURRENT_USER", user: null });
  };
  return (
    <>
      {currentUser?.name}
      <Tooltip placement="bottom-end" content={t("Log Out")}>
        <Button onClick={onLogoutClick} icon="log-out" />
      </Tooltip>
    </>
  );
};
