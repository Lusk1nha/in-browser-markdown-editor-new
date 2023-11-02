import { Functionality } from "../../shared/types/Functionality";

import { FunctionalityButton, StyledFunctionalitiesRender } from "./styles"

interface IFunctionalitiesRenderProps {
  name?: string;
  buttons?: Functionality[];
  styles?: {
    gap?: string;
  }
}

function FunctionalitiesRender({ name, buttons, styles }: IFunctionalitiesRenderProps) {

  const componentName = name
    ? `functionality-${name}-id`
    : `functionality-id`

  function renderFunctionalities(buttons: Functionality[]) {
    return buttons?.map((func, id) => {
      const { name, title, onClick, icon, onRender } = func

      if (!onRender) {
        return (
          <FunctionalityButton key={id} id={name} name={name} type="button" title={title} onClick={onClick}>
            {icon}
          </FunctionalityButton>
        )
      }

      return onRender(id)
    });
  }

  if (!buttons) {
    return null
  }

  return (
    <StyledFunctionalitiesRender id={componentName} $styled_gap={styles?.gap}>
      {renderFunctionalities(buttons)}
    </StyledFunctionalitiesRender>
  )
}

export {
  FunctionalitiesRender
}