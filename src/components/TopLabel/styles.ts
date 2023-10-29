import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";


const StyledTopLabel = styled.div`
  background: ${props => props.theme.colors.content.topLabel.background};
  
  width: 100%;
  height: 42px;

  display: flex;

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

const LeftElement = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  flex-grow: 1;
`

const FunctionalitiesRender = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`

const ExpandButton = styled(RawButton)`
  cursor: pointer;
`

export {
  StyledTopLabel,
  Label,
  LeftElement,
  FunctionalitiesRender,
  ExpandButton
}