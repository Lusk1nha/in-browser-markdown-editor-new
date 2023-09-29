import { DocumentMD } from "../../shared/types/DocumentMD"
import { DocumentItem } from "../DocumentItem/DocumentItem"
import { Toggle } from "../Inputs/Toggle/Toggle"
import { ISidebarProps } from "./ISidebarProps"
import { StyledSideBar, SidebarHeader, HeaderTitle, SidebarMyDocumentsContainer, SidebarMyDocumentsTitle, SidebarNewDocumentButton, SidebarDocumentRender, SidebarThemeContainer } from "./styles"


const mockedDocuments: DocumentMD[] = [
  { date: "01 April 2022", name: "untitled-document.md" },
  { date: "01 April 2022", name: "welcome.md" }
]

function Sidebar({ isOpen, onThemeChange }: ISidebarProps) {

  function generateDocumentItem(documents: DocumentMD[]) {
    return documents?.map((doc, index) => <DocumentItem key={index} label={doc.date} name={doc.name} />)
  }

  return (
    <StyledSideBar on={isOpen}>
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

        <SidebarDocumentRender>
          {generateDocumentItem(mockedDocuments)}
        </SidebarDocumentRender>
      </SidebarMyDocumentsContainer>

      <SidebarThemeContainer>
        <Toggle onClick={onThemeChange} />
      </SidebarThemeContainer>
    </StyledSideBar>
  )
}

export {
  Sidebar
}