import { useContext } from "react"
import { EditableDocumentItem } from "../EditableDocumentItem/EditableDocumentItem"
import { Separator, StyledMenu, Title } from "./styles"

import { AppSidebarContext } from "../../contexts/SidebarProvider/AppSidebarProvider"

import { Functionality } from "../../shared/types/Functionality";
import { FunctionalitiesRender } from "../FunctionalitiesRender/FunctionalitiesRender";
import { ExpandButton } from "../../styles/reusables-styles";
import { CrossIcon } from "../Icons/CrossIcon";
import { HamburgerMenuIcon } from "../Icons/HamburgerMenuIcon";

interface IMenuProps {
  name: string;
  title: string;
  functionalities: Functionality[];
}

function Menu({ title, name, functionalities }: IMenuProps) {
  const { on, onSidebarOpenChange } = useContext(AppSidebarContext);

  return (
    <StyledMenu>
      <ExpandButton type="button" aria-label="Click here to expand sidebar" title="Click here to expand sidebar" onClick={onSidebarOpenChange}>
        {
          on
            ? <CrossIcon className="cross" />
            : <HamburgerMenuIcon className="hamburgerMenu" />
        }
      </ExpandButton>

      <Title>
        {title}
      </Title>

      <Separator />

      <EditableDocumentItem
        name={name}
        label="Document Name"
        title="Insert here the name of the document"
        placeholder="Insert a file name..."
      />

      <FunctionalitiesRender
        name="menu"
        buttons={functionalities}
        styles={{
          gap: "1.5rem"
        }}
      />
    </StyledMenu>
  )
}

export {
  Menu
}