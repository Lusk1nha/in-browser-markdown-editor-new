import styled from "styled-components";

const StyledPageNotFound = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  color: ${(props) => props.theme.colors.notFound.title};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export { StyledPageNotFound, Text };
