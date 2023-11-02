import { useContext } from "react"

import { Toggle } from "../../Inputs/Toggle/Toggle"

import { StyledSideBar, SidebarHeader, HeaderTitle, SidebarMyDocumentsContainer, SidebarMyDocumentsTitle, SidebarNewDocumentButton, SidebarThemeContainer } from "./styles"
import { MarkdownContext } from "../../../contexts/MarkdownProvider/MarkdownProvider"

import DocumentRender from "../../DocumentRender/DocumentRender"

import { AppThemeContext } from "../../../contexts/ThemeProvider/AppThemeProvider"
import { AppSidebarContext } from "../../../contexts/SidebarProvider/AppSidebarProvider"
import { MoonIcon } from "../../Icons/MoonIcon"
import { SunIcon } from "../../Icons/SunIcon"

function Sidebar() {
  const { onThemeChange } = useContext(AppThemeContext);
  const { on } = useContext(AppSidebarContext);

  const markdowns = useContext(MarkdownContext);

  return (
    <StyledSideBar $on={on}>
      <SidebarHeader>
        <HeaderTitle>MARKDOWN</HeaderTitle>
      </SidebarHeader>

      <SidebarMyDocumentsContainer>
        <SidebarMyDocumentsTitle>
          MY DOCUMENTS
        </SidebarMyDocumentsTitle>

        <SidebarNewDocumentButton type="button">
          + New Document
        </SidebarNewDocumentButton>

        <DocumentRender markdowns={markdowns} />
      </SidebarMyDocumentsContainer>

      <SidebarThemeContainer>
        <Toggle
          onClick={onThemeChange}
          value={on}
          offContent={<MoonIcon className="moon" />}
          offContentActive={<MoonIcon className="moonActive" fillColor="white" />}
          onContent={<SunIcon className="sun" />}
          onContentActive={<SunIcon className="sunActive" fillColor="white" />}
        />
      </SidebarThemeContainer>
    </StyledSideBar>
  )
}

export {
  Sidebar
}