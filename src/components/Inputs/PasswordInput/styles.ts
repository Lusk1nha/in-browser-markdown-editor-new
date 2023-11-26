import styled from "styled-components";

const StyledPasswordInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 0.5rem;
`;

const Label = styled.label`
  color: #fff;
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Preview H5 */
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

type InputProps = {
  $isInvalid?: boolean;
};

const Input = styled.input<InputProps>`
  background: none;
  width: 100%;
  height: 45px;

  color: white;

  /* Heading (M) */
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0.765rem;

  border: 1px solid #2b2d31;
  outline: none;

  border-radius: 4px;

  caret-color: ${(props) => props.theme.colors.menu.documentNameValueHover};

  &:focus {
    border: 1px solid white;
  }

  ${(props) =>
    props.$isInvalid &&
    `
    border: 1px solid ${props.theme.colors.menu.documentNameValueHover};

    &:focus {
      border: 1px solid ${props.theme.colors.menu.documentNameValueHover};
    }
  `}
`;

const ErrorMessage = styled.span`
  color: #e46643;
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Heading (M) */
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export { StyledPasswordInput, Label, Input, ErrorMessage };
