import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`

const RawButton = styled.button`
  background: none;
  display: flex;
  border: none;
  outline: none;
`

const ExpandButton = styled(RawButton)`
  background: ${props => props.theme.colors.menu.expandButtonBackground};

  width: 72px;
  height: 100%;

  color: ${props => props.theme.colors.menu.expandButtonText};

  align-items: center;
  justify-content: center;

  transition: background 200ms linear;

  &:hover {
    background: ${props => props.theme.colors.menu.expandButtonBackgroundHover};
    cursor: pointer;
  }
`

const RemoveButton = styled(RawButton)`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #1D1F22;
  }
`

const SaveButton = styled(RawButton)`
  background: ${props => props.theme.colors.menu.saveButtonBackground};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.menu.saveButtonText};
  
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding-right: 16px;
  
  border-radius: 4px;

  transition: background 200ms linear;

  &:hover {
    background: ${props => props.theme.colors.menu.saveButtonBackgroundHover};
    cursor: pointer;
  }
`

export {
  Wrapper,
  RawButton,
  ExpandButton,
  SaveButton,
  RemoveButton
}