import styled from "styled-components";

const StyledLinkString = styled.a`
  color: ${(props) => props.theme.colors.textComponents.codeBlockText};

  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline;
`;

export { StyledLinkString };
