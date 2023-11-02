import styled from "styled-components";


const StyledTextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Writable = styled.textarea`
  background: ${props => props.theme.colors.content.textArea.background};

  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.content.textArea.text};

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
    background-color: #1d1f22;
    border-radius: 0px;
  }
`

export {
  StyledTextArea,
  Writable
}