import { Functionality } from "../../shared/types/Functionality";

import { FunctionalityButton, StyledFunctionalitiesRender } from "./styles";

// Define the properties that the FunctionalitiesRender component accepts
interface IFunctionalitiesRenderProps {
  name?: string;
  buttons?: (Functionality | null)[];
  styles?: {
    gap?: string;
  };
}

// FunctionalitiesRender component to render a list of functionalities
function FunctionalitiesRender({
  name,
  buttons,
  styles,
}: IFunctionalitiesRenderProps) {
  // Create a unique component name for identification
  const componentName = name ? `functionality-${name}-id` : `functionality-id`;

  // Function to manage functionalities and filter out null values
  function manageFunctionalities(buttons: (Functionality | null)[]) {
    const nonNullButtons = buttons?.filter(
      getNotNullButtons
    ) as Functionality[];

    return nonNullButtons?.map(renderButton);
  }

  // If no buttons are provided, return null
  if (!buttons) {
    return null;
  }

  // Render the StyledFunctionalitiesRender container with managed functionalities
  return (
    <StyledFunctionalitiesRender id={componentName} $styled_gap={styles?.gap}>
      {manageFunctionalities(buttons)}
    </StyledFunctionalitiesRender>
  );
}

/**
 * Function to filter out null values from the list of functionalities
 * @param {Functionality | null} button used to know if is null or a functionality
 * @returns {boolean} Returns a boolean
 */
function getNotNullButtons(button: Functionality | null): boolean {
  if (!button) {
    return false;
  }

  return true;
}

/**
 * Function to render a button or custom functionality
 * @param {Functionality} func Functionality to render the component
 * @param {number} id incremental id of the button
 * @returns {React.ReactNode} Returns a functionality button or custom button
 */
function renderButton(func: Functionality, id: number): React.ReactNode {
  const { name, title, onClick, icon, onRender } = func;

  // If no custom rendering logic is provided, render a standard button
  if (!onRender) {
    return (
      <FunctionalityButton
        key={id}
        id={name}
        name={name}
        type="button"
        title={title}
        onClick={onClick}
      >
        {icon}
      </FunctionalityButton>
    );
  }

  // If custom rendering logic is provided, call the onRender function
  return onRender(id);
}

// Export the FunctionalitiesRender component for usage in other parts of the application
export { FunctionalitiesRender };
