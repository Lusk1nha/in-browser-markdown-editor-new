import styled from "styled-components";

const StyledPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  transition-property: width, border;
  transition-duration: 150ms;
  transition-timing-function: linear;
`;

const PreviewContainer = styled.div`
  background: none;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  z-index: 5;
`;

export { StyledPreview, PreviewContainer };
