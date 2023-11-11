import styled from "styled-components";


const StyledTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Writable = styled.textarea`
  background: ${props => props.theme.colors.input.textArea.background};

  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.input.textArea.text};

  font-family: Roboto Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  border: none;
  outline: none;

  resize: none;

  padding: 1rem;

  transition: background 200ms linear;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.input.textArea.scroll.background};
    border-radius: 0px;

    transition: background 200ms linear;
  }
`

export {
  StyledTextArea,
  Writable
}