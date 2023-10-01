import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";

type StyledSideBarProps = {
  $on: boolean;
}

const StyledSideBar = styled.aside<StyledSideBarProps>`
  max-width: 250px;
  width: ${props => props.$on === true ? '250px' : '0'};
  background: ${props => props.theme.colors.menu.sidebar};
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: ${props => props.$on === true ? '27px' : '0'};

  gap: 27px;

  /* transition: width 80ms linear; */

  ${props => !props.$on && `
    * {
      visibility: hidden;
      opacity: 0;
    }
  `}
`

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column; 
`

const HeaderTitle = styled.h2`
  color: ${props => props.theme.colors.menu.title};
  font-family: Commissioner;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 5px;
`

const SidebarMyDocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`

const SidebarMyDocumentsTitle = styled.h3`
  color: ${props => props.theme.colors.menu.myDocumentsText};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
`

const SidebarNewDocumentButton = styled(RawButton)`
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

  padding: 12px 1rem;

  border-radius: 4px;

  transition: background 200ms linear;

  &:hover {
    background: ${props => props.theme.colors.menu.saveButtonBackgroundHover};
    cursor: pointer;
  }
`

const SidebarThemeContainer = styled.div`
  display: flex;
  margin-top: auto;
`


export {
  StyledSideBar,
  SidebarHeader,
  HeaderTitle,
  SidebarMyDocumentsContainer,
  SidebarMyDocumentsTitle,
  SidebarNewDocumentButton,
  SidebarThemeContainer
}