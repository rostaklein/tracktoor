import React from "react";
import { useMutation } from "react-apollo";
import { useFormik, FormikErrors } from "formik";
import { ApolloError } from "apollo-client";
import { useTranslation } from "react-i18next";
import { LockFilled, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

import { CenteredWrapper } from "../common.styles";
import { LanguageSwitch } from "../LanguageSwitch";

import { LOGIN_MUTATION } from "./queries";
import * as S from "./LoginForm.styles";

import { useAppDispatch } from "~client/context/AppContext";
import { LoginMutation, LoginMutationVariables } from "~client/types";

type FormValues = {
  username: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [login, { loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_MUTATION);

  const {
    errors,
    handleSubmit,
    values,
    handleChange,
    isValid,
    setErrors,
    touched,
  } = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.password) {
        errors.password = t("password_required");
      }
      if (!values.username) {
        errors.username = t("username_required");
      }
      return errors;
    },
    onSubmit: async ({ username, password }) => {
      try {
        const result = await login({
          variables: { username, password },
        });
        if (result.data?.login) {
          dispatch({
            type: "SET_CURRENT_USER",
            user: result.data.login.user,
          });
          localStorage.setItem("auth-token", result.data.login.token ?? "");
        }
      } catch (err) {
        if (err instanceof ApolloError) {
          if (err.graphQLErrors[0].extensions?.code === "USER_NOT_FOUND") {
            setErrors({
              username: t("user_not_found"),
            });
          }
          if (err.graphQLErrors[0].extensions?.code === "INVALID_PASSWORD") {
            setErrors({
              password: t("invalid_password"),
            });
          }
        }
      }
    },
  });

  return (
    <CenteredWrapper>
      <S.LoginWrapper onSubmit={handleSubmit}>
        <S.FormItemStyled
          validateStatus={touched.username && errors.username ? "error" : ""}
          help={touched.username && errors.username}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder={t("Username")}
            name="username"
            onChange={handleChange}
            value={values.username}
            data-test-id="login-username"
          />
        </S.FormItemStyled>
        <S.FormItemStyled
          validateStatus={touched.password && errors.password ? "error" : ""}
          help={touched.password && errors.password}
        >
          <Input
            prefix={<LockFilled />}
            placeholder={t("Password")}
            name="password"
            onChange={handleChange}
            value={values.password}
            type="password"
            data-test-id="login-password"
          />
        </S.FormItemStyled>
        <Button
          icon={<LoginOutlined />}
          loading={loading}
          disabled={!isValid}
          htmlType="submit"
          data-test-id="login-submit-button"
        >
          {t("Log In")}
        </Button>
        <S.LanguageSwitchWrapper>
          <LanguageSwitch />
        </S.LanguageSwitchWrapper>
      </S.LoginWrapper>
    </CenteredWrapper>
  );
};
