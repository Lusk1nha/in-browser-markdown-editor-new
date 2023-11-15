import styled from "styled-components";

const StyledNumberedListComponent = styled.ol`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
`;

const NumericText = styled.li`
  color: ${(props) => props.theme.colors.textComponents.numericList};

  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Roboto Slab;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

export { StyledNumberedListComponent, NumericText };
