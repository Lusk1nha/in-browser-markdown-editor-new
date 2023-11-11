import styled from "styled-components";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
`;

export { StyledApp };
