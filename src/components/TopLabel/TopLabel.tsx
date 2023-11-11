import { Label, LeftElement, StyledTopLabel } from "./styles";
import { Functionality } from "../../shared/types/Functionality";
import { FunctionalitiesRender } from "../FunctionalitiesRender/FunctionalitiesRender";

// Define the properties that the TopLabel component accepts
interface ITopLabelProps {
  text: string;
  functionalities?: Functionality[];
}

// TopLabel component to render a label with optional functionalities
function TopLabel({ text, functionalities }: ITopLabelProps) {
  return (
    <StyledTopLabel>
      {/* LeftElement is a styled component for the left element of the top label */}
      <LeftElement>
        {/* Label is a styled component for rendering the label text */}
        <Label>{text}</Label>
      </LeftElement>

      {/* FunctionalitiesRender component for rendering optional functionalities */}
      <FunctionalitiesRender
        name="topLabel"
        buttons={functionalities}
        styles={{
          gap: "0.65rem",
        }}
      />
    </StyledTopLabel>
  );
}

// Export the TopLabel component for usage in other parts of the application
export { TopLabel };
