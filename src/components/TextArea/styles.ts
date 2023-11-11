import styled from "styled-components";

type StyledTextAreaProps = {
  $isFullScreen?: boolean;
};
const StyledTextArea = styled.div<StyledTextAreaProps>`
  width: ${({ $isFullScreen }) => ($isFullScreen ? "0px" : "100%")};
  display: flex;
  flex-direction: column;

  overflow: hidden;

  transition-property: width, border;
  transition-duration: 150ms;
  transition-timing-function: linear;

  border-right: ${({ $isFullScreen }) => ($isFullScreen ? "0px" : "1px")} solid
    ${(props) => props.theme.colors.content.separator};
`;

const Writable = styled.textarea`
  background: none;

  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.colors.input.textArea.text};

  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  border: none;
  outline: none;

  resize: none;

  padding: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.theme.colors.input.textArea.scroll.background};
    border-radius: 0px;

    transition: background 200ms linear;
  }
`;

export { StyledTextArea, Writable };
