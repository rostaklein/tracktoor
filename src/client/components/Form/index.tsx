import React from "react";
import { useField } from "formik";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";
import styled from "styled-components";
import { Divider, Form } from "antd";

import { Colors } from "../common.styles";

export const StyledForm = styled.form`
  padding: 15px 35px;
`;

export const StyledDivider = styled(Divider)`
  &.ant-divider-with-text-left {
    font-size: 14px;
    margin: 8px 0;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  margin-bottom: 0px;
  line-height: normal;
  display: flex;
  flex-direction: column;
  .ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-control {
    line-height: normal;
    margin-bottom: 0px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const StyledFormLabel = styled.label`
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.GRAY4};
  margin-bottom: 4px;
  display: inline-block;
`;

type FieldProps = {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  withLabel?: boolean;
  type?: "input" | "textarea";
};

type Props = FieldProps & InputProps;

export const FormInput: React.FC<Props> = ({
  icon,
  label,
  name,
  withLabel,
  ...rest
}) => {
  const [{ value, onChange }, { touched, error }] = useField(name);
  const errorMessage = touched && error;
  const status = errorMessage ? "error" : "";
  const getValue = () => {
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number") {
      return value;
    }
    return "";
  };
  return (
    <StyledFormItem validateStatus={status} help={errorMessage}>
      <>
        {withLabel && <StyledLabel>{label}</StyledLabel>}
        <Input
          prefix={icon && icon}
          placeholder={label}
          name={name}
          onChange={onChange}
          value={getValue()}
          data-test-id={`form-item-${name}`}
          {...rest}
        />
      </>
    </StyledFormItem>
  );
};
