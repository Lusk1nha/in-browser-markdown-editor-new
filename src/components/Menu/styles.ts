import styled from "styled-components";

import { RawButton } from "../../styles/reusables-styles";


const StyledMenu = styled.nav`
  background: ${props => props.theme.colors.menu.navbar};

  width: 100%;
  min-height: 72px;

  display: flex;
  align-items: center;
  gap: 24px;

  padding-right: 16px;
`

const Title = styled.h1`
  color: ${props => props.theme.colors.menu.title};
  font-family: Commissioner;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 5px;
  margin-right: 5px;
`

const Separator = styled.div`
  background: ${props => props.theme.colors.menu.separator};
  width: 1px;
  height: 60%;
`;

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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
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
  StyledMenu,
  Title,
  Separator,
  ExpandButton,
  RemoveButton,
  SaveButton
}