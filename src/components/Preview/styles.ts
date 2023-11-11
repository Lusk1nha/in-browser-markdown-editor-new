import styled from "styled-components";

const StyledPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  transition-property: width, border;
  transition-duration: 150ms;
  transition-timing-function: linear;
`;

const PreviewContainer = styled.section`
  background: none;

  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.colors.input.textArea.text};

  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  padding: 1rem;

  transition: background 200ms linear;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.colors.input.textArea.scroll.background};
    border-radius: 0px;

    transition: background 200ms linear;
  }

  z-index: 5;
`;

export { StyledPreview, PreviewContainer };
