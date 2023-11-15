import styled from "styled-components";

const StyledCodeBlockComponent = styled.div`
  background: ${(props) =>
    props.theme.colors.textComponents.codeBlockBackground};
  padding: 1.5rem;

  border-radius: 0.25rem;
  
  margin: 0.25rem 0;
`;

const CodeText = styled.p`
  color: ${(props) => props.theme.colors.textComponents.codeBlockText};

  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Markdown Code */
  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */

  white-space: pre-line;
  line-break: anywhere;
`;

export { StyledCodeBlockComponent, CodeText };
