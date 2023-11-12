import styled from "styled-components";

const StyledText = styled.p`
  color: ${(props) => props.theme.colors.textComponents.text};

  /* Preview Paragraph */
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

export { StyledText };
