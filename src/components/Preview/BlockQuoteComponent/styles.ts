import styled from "styled-components";

const StyledBlockQuote = styled.div`
  background: ${(props) =>
    props.theme.colors.textComponents.blockQuoteBackground};

  width: 100%;
  padding: 1.5rem;

  border-left: 0.25rem solid red;

  border-radius: 0.25rem;
`;

const BlockText = styled.p`
  color: ${(props) => props.theme.colors.textComponents.blockQuoteText};
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Preview Paragraph Bold */
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
`;

export { StyledBlockQuote, BlockText };
