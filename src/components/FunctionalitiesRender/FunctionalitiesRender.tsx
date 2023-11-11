import { Functionality } from "../../shared/types/Functionality";

import { FunctionalityButton, StyledFunctionalitiesRender } from "./styles";

interface IFunctionalitiesRenderProps {
  name?: string;
  buttons?: (Functionality | null)[];
  styles?: {
    gap?: string;
  };
}

function FunctionalitiesRender({
  name,
  buttons,
  styles,
}: IFunctionalitiesRenderProps) {
  const componentName = name ? `functionality-${name}-id` : `functionality-id`;

  function renderFunctionalities(buttons: (Functionality | null)[]) {
    const nonNullButtons = buttons?.filter((button) => {
      if (button === null || button === undefined) {
        return false;
      }

      return true;
    }) as Functionality[];

    return nonNullButtons?.map((func, id) => {
      const { name, title, onClick, icon, onRender } = func;

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

      return onRender(id);
    });
  }

  if (!buttons) {
    return null;
  }

  return (
    <StyledFunctionalitiesRender id={componentName} $styled_gap={styles?.gap}>
      {renderFunctionalities(buttons)}
    </StyledFunctionalitiesRender>
  );
}

export { FunctionalitiesRender };
