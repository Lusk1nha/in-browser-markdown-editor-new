import styled from "styled-components";

const StyledSubTitle = styled.h1`
  color: ${(props) => props.theme.colors.textComponents.subtitle};
  font-feature-settings:
    "clig" off,
    "liga" off;

  /* Preview H2 */
  font-family: Roboto Slab;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export { StyledSubTitle };
