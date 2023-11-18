import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.textComponents.title};

  font-family: Roboto Slab;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { StyledTitle };
