import styled from "styled-components";

const StyledCodeString = styled.code`
  color: ${(props) => props.theme.colors.textComponents.codeString};

  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export { StyledCodeString };
