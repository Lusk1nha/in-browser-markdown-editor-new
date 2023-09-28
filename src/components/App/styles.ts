import styled from "styled-components";



const StyledApp = styled.section`
  background-color: ${props => props.theme.colors.background};

  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
`

export {
  StyledApp
}