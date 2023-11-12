import styled from "styled-components";

const StyledHighlightBoldSubTitleComponent = styled.h5`
  color: ${(props) => props.theme.colors.textComponents.highlightBoldText};

  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Preview H6 */
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { StyledHighlightBoldSubTitleComponent };
