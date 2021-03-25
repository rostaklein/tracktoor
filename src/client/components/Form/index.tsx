import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import { Divider, FormGroup, InputGroup } from "@blueprintjs/core";

import { Colors } from "../common.styles";

export const StyledForm = styled.form`
  padding: 15px 35px;
`;

export const StyledDivider = styled(Divider)``;

export const StyledFormItem = styled(FormGroup)`
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
  withLabel?: boolean;
  type?: "input" | "textarea";
};

type Props = FieldProps & Partial<InputGroup>;

export const FormInput: React.FC<Props> = ({
  label,
  name,
  withLabel,
  ...rest
}) => {
  const [{ value, onChange }, { touched, error }] = useField(name);
  const errorMessage = touched && error;
  return (
    <StyledFormItem
      helperText={errorMessage}
      intent={errorMessage ? "danger" : "none"}
    >
      <>
        {withLabel && <StyledLabel>{label}</StyledLabel>}
        <InputGroup
          placeholder={label}
          name={name}
          onChange={onChange}
          value={value}
          data-test-id={`form-item-${name}`}
          {...rest}
        />
      </>
    </StyledFormItem>
  );
};
