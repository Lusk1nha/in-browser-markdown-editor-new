import styled, { css } from "styled-components";

type WrapperProps = {
  $maxHeight?: number | string;
  $justifyContent?: "flex-start" | "flex-end" | "center";
  $alignItems?: "flex-start" | "flex-end" | "center";
  $flex?: number | "none" | "unset";
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  ${(props) =>
    props.$maxHeight !== null &&
    props.$maxHeight !== undefined &&
    css`
      max-height: ${props.$maxHeight};
    `}

  ${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

    ${(props) =>
    props.$flex !== null &&
    props.$flex !== undefined &&
    css`
      flex: ${props.$flex};
    `}
`;

const RawButton = styled.button`
  background: none;
  display: flex;
  border: none;
  outline: none;
`;

const ExpandButton = styled(RawButton)`
  background: ${(props) => props.theme.colors.menu.expandButtonBackground};

  width: 72px;
  height: 100%;

  color: ${(props) => props.theme.colors.menu.expandButtonText};

  align-items: center;
  justify-content: center;

  transition: background 200ms linear;

  &:hover {
    background: ${(props) =>
      props.theme.colors.menu.expandButtonBackgroundHover};
    cursor: pointer;
  }
`;

const RemoveButton = styled(RawButton)`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #1d1f22;
  }
`;

const SaveButton = styled(RawButton)`
  background: ${(props) => props.theme.colors.menu.saveButtonBackground};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.menu.saveButtonText};

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-right: 16px;

  border-radius: 4px;

  transition: background 200ms linear;

  &:hover {
    background: ${(props) => props.theme.colors.menu.saveButtonBackgroundHover};
    cursor: pointer;
  }
`;

export { Wrapper, RawButton, ExpandButton, SaveButton, RemoveButton };
