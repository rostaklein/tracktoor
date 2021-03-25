import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { Button } from "@blueprintjs/core";

import { FormInput, StyledForm } from "~/src/client/components/Form";

export type FormValues = {
  identifier: string | null;
  name: string | null;
  note: string | null;
};

type Props = {
  initialValues: FormValues;
  onSubmit: (values: FormValues, resetForm: () => void) => Promise<void>;
  submit: {
    text: React.ReactNode;
    loading: boolean;
  };
};

export const CustomerForm: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Formik<FormValues>
      initialValues={props.initialValues}
      onSubmit={(values, { resetForm }) => props.onSubmit(values, resetForm)}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormInput
            name="identifier"
            label={t("Batch identifier")}
            withLabel
          />
          <FormInput name="name" label={t("Name")} withLabel />
          <FormInput name="note" label={t("Note")} withLabel />
          <Button intent="primary" type="submit" loading={props.submit.loading}>
            {props.submit.text}
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
