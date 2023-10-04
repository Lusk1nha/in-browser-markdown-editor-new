import { useContext } from "react"
import { EditableDocumentItem } from "../EditableDocumentItem/EditableDocumentItem"
import { ExpandButton, RemoveButton, SaveButton, Separator, StyledMenu, Title } from "./styles"
import { SidebarContext } from "../../contexts/SidebarProvider/SidebarProvider"

interface IMenuProps {
  name: string;
  onSave: () => void;
}

function Menu({ name, onSave }: IMenuProps) {
  const { isOpen, onSidebarOpenChange } = useContext(SidebarContext);

  return (
    <StyledMenu>
      <ExpandButton type="button" aria-label="Click here to expand sidebar" title="Click here to expand sidebar" onClick={onSidebarOpenChange}>
        {
          isOpen
            ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.10049" y="0.686523" width="30" height="2" transform="rotate(45 2.10049 0.686523)" fill="white" />
                <rect x="0.686279" y="21.8999" width="30" height="2" transform="rotate(-45 0.686279 21.8999)" fill="white" />
              </svg>
            )
            : (
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <rect width="72" height="72" fill="none" />
                <rect x="21" y="27" width="30" height="2" fill="white" />
                <rect x="21" y="35" width="30" height="2" fill="white" />
                <rect x="21" y="43" width="30" height="2" fill="white" />
              </svg>
            )
        }
      </ExpandButton>

      <Title>
        MARKDOWN
      </Title>

      <Separator />

      <EditableDocumentItem name={name} label="Document Name" fileName="welcome.md" />

      <RemoveButton type="button" aria-label="Click here to remove document" title="Click here to remove document">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M17 4H13V3C13 1.34315 11.6569 0 10 0H8C6.34315 0 5 1.34315 5 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H2V17C2 18.6569 3.34315 20 5 20H13C14.6569 20 16 18.6569 16 17V6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4ZM7 16C7.55228 16 8 15.5523 8 15V9C8 8.44771 7.55228 8 7 8C6.44772 8 6 8.44771 6 9V15C6 15.5523 6.44772 16 7 16ZM8 2C7.44772 2 7 2.44772 7 3V4H11V3C11 2.44772 10.5523 2 10 2H8ZM14 17C14 17.5523 13.5523 18 13 18H5C4.44772 18 4 17.5523 4 17V6H14V17ZM12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V9C10 8.44771 10.4477 8 11 8C11.5523 8 12 8.44771 12 9V15Z" fill="#7C8187" />
        </svg>
      </RemoveButton>

      <SaveButton type="submit" onClick={onSave}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="4" fill="none" />
          <path fillRule="evenodd" clipRule="evenodd" d="M22.4089 12.2578L27.7422 17.5911C27.9086 17.7589 28.0014 17.986 28 18.2222V25.3333C28 26.8061 26.8061 28 25.3333 28H14.6667C13.1939 28 12 26.8061 12 25.3333V14.6667C12 13.1939 13.1939 12 14.6667 12H21.7778C21.8967 12.0022 22.0142 12.0263 22.1244 12.0711C22.2304 12.1144 22.327 12.1778 22.4089 12.2578ZM20.8889 13.7778H17.3333V15.5556H20.8889V13.7778ZM22.6667 26.2222H17.3333V23.5556C17.3333 23.0646 17.7313 22.6667 18.2222 22.6667H21.7778C22.2687 22.6667 22.6667 23.0646 22.6667 23.5556V26.2222ZM25.3333 26.2222C25.8243 26.2222 26.2222 25.8243 26.2222 25.3333V18.5867L22.6667 15.0311V16.4444C22.6667 16.9354 22.2687 17.3333 21.7778 17.3333H16.4444C15.9535 17.3333 15.5556 16.9354 15.5556 16.4444V13.7778H14.6667C14.1757 13.7778 13.7778 14.1757 13.7778 14.6667V25.3333C13.7778 25.8243 14.1757 26.2222 14.6667 26.2222H15.5556V23.5556C15.5556 22.0828 16.7495 20.8889 18.2222 20.8889H21.7778C23.2505 20.8889 24.4444 22.0828 24.4444 23.5556V26.2222H25.3333Z" fill="white" />
        </svg>

        Save Changes
      </SaveButton>
    </StyledMenu>
  )
}

export {
  Menu
}