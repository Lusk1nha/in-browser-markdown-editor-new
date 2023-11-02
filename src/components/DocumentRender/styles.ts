import styled from "styled-components";



const StyledDocumentRender = styled.ul` 
  max-height: 670px;
  min-height: 200px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.625rem;

  overflow-y: auto;

  padding-right: 0.5rem;

  /* ===== Scrollbar CSS ===== */
  & {
    scrollbar-width: thin;
    scrollbar-color: #e46643 #151619;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #151619;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e46643;
    border-radius: 4px;
  }
`


export {
  StyledDocumentRender
}