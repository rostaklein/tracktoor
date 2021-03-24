import React from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import { FileOutlined, NumberOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";

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
          <Row gutter={16} align="bottom">
            <Col>
              <FormInput
                name="identifier"
                label={t("Batch identifier")}
                icon={<NumberOutlined />}
                withLabel
              />
            </Col>
            <Col sm={6}>
              <FormInput name="name" label={t("Name")} withLabel />
            </Col>
            <Col sm={10}>
              <FormInput
                name="note"
                label={t("Note")}
                icon={<FileOutlined />}
                withLabel
              />
            </Col>
            <Col>
              <Button
                type="primary"
                htmlType="submit"
                loading={props.submit.loading}
              >
                {props.submit.text}
              </Button>
            </Col>
          </Row>
        </StyledForm>
      )}
    </Formik>
  );
};
