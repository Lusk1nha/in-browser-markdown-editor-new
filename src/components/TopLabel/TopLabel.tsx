import { Label, LeftElement, StyledTopLabel } from "./styles";
import { Functionality } from "../../shared/types/Functionality";
import { FunctionalitiesRender } from "../FunctionalitiesRender/FunctionalitiesRender";

interface ITopLabelProps {
  text: string;
  functionalities?: Functionality[];
}

function TopLabel({ text, functionalities }: ITopLabelProps) {
  return (
    <StyledTopLabel>
      <LeftElement>
        <Label>{text}</Label>
      </LeftElement>

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

export { TopLabel };
