import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";
import { Link } from "react-router-dom";

const StyledForgotPassword = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
`;

const Title = styled.h2`
  color: white;
  font-feature-settings:
    "clig" off,
    "liga" off;

  font-family: Roboto Slab;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  margin-bottom: 0.675rem;
`;

const ComponentSchema = styled.div`
  background-color: #1d1f22;

  max-width: 550px;
  width: 100%;

  min-height: 300px;

  display: flex;
  align-items: center;

  border-radius: 4px;

  padding: 2rem 1.865rem;

  gap: 1rem;
`;

const FormForgotPassword = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const SubmitButton = styled(RawButton)`
  background: ${(props) => props.theme.colors.menu.saveButtonBackground};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.menu.saveButtonText};

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0.6rem 1rem;

  border-radius: 4px;

  transition: background 200ms linear;

  margin-top: 0.465rem;

  &:hover {
    background: ${(props) => props.theme.colors.menu.saveButtonBackgroundHover};
    cursor: pointer;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.475rem;
`

const FormText = styled.p`
  color: #c1c4cb;
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Body (M) */
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const FormLink = styled(Link)`
  color: ${(props) => props.theme.colors.menu.saveButtonBackground};
`;

export {
  StyledForgotPassword,
  Title,
  ComponentSchema,
  FormForgotPassword,
  SubmitButton,
  LinkContainer,
  FormText,
  FormLink,
};
