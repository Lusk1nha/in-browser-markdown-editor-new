import styled from "styled-components";

const StyledTextRender = styled.div`
  background: none;

  max-width: 1000px;
  max-height: 810px;

  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.colors.input.textArea.text};

  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  flex-direction: column;

  padding: 1rem 3rem 1rem 1rem;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.colors.input.textArea.scroll.background};
    border-radius: 0px;

    transition: background 200ms linear;
  }

  transition: background 200ms linear;
`;

export { StyledTextRender };
