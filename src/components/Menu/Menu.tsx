import { useContext } from "react";
import { EditableDocumentItem } from "../EditableDocumentItem/EditableDocumentItem";
import { GroupTitleSeparator, Separator, StyledMenu, Title } from "./styles";

import { AppSidebarContext } from "../../contexts/SidebarProvider/AppSidebarProvider";

import { Functionality } from "../../shared/types/Functionality";
import { FunctionalitiesRender } from "../FunctionalitiesRender/FunctionalitiesRender";
import { ExpandButton } from "../../styles/reusables-styles";
import { CrossIcon } from "../Icons/CrossIcon";
import { HamburgerMenuIcon } from "../Icons/HamburgerMenuIcon";

// Define the properties that the Menu component accepts
interface IMenuProps {
  name: string;
  title: string;
  functionalities: (Functionality | null)[];
}

// Menu component to render a sidebar menu with title, document item, and functionalities
function Menu({ title, name, functionalities }: IMenuProps) {
  // Access the sidebar context to get the state and function for sidebar control
  const { on, onSidebarOpenChange } = useContext(AppSidebarContext);

  // Determine which icon to use based on the sidebar state
  const expandIcon = on ? (
    <CrossIcon className="cross" />
  ) : (
    <HamburgerMenuIcon className="hamburgerMenu" />
  );

  return (
    <StyledMenu id="menu">
      {/* ExpandButton is a styled button for toggling the sidebar */}
      <ExpandButton
        type="button"
        aria-label="Click here to expand sidebar"
        title="Click here to expand sidebar"
        onClick={onSidebarOpenChange}
      >
        {/* Render the determined expand icon */}
        {expandIcon}
      </ExpandButton>

      <GroupTitleSeparator>
        {/* Title is a styled component for rendering the menu title */}
        <Title>{title}</Title>

        {/* Separator is a styled component for visual separation */}
        <Separator />
      </GroupTitleSeparator>

      {/* EditableDocumentItem for rendering an editable document item in the menu */}
      <EditableDocumentItem
        name={name}
        label="Document Name"
        title="Insert here the name of the document"
        placeholder="Insert a file name..."
      />

      {/* FunctionalitiesRender for rendering a list of functionalities in the menu */}
      <FunctionalitiesRender
        name="menu"
        buttons={functionalities}
        styles={{
          gap: "1rem",
        }}
      />
    </StyledMenu>
  );
}

// Export the Menu component for usage in other parts of the application
export { Menu };
