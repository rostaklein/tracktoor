import { FormGroup } from "@blueprintjs/core";
import styled from "styled-components";

export const LoginWrapper = styled.form`
  width: 240px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
`;

export const FormItemStyled = styled(FormGroup)`
  margin-bottom: 5px;
`;

export const Logo = styled.img`
  width: 150px;
  margin: 30px auto;
`;

export const LanguageSwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
  button {
    color: gray;
  }
`;
