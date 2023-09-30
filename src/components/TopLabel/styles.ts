import styled from "styled-components";


const StyledTopLabel = styled.div`
  background: ${props => props.theme.colors.content.topLabel.background};
  
  width: 100%;
  height: 42px;

  display: flex;
  align-items: center;

  padding: 0 1rem;
`

const Label = styled.h4`
  color: ${props => props.theme.colors.content.topLabel.text};
  
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
`

export {
  StyledTopLabel,
  Label
}