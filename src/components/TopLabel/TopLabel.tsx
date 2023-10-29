import { ExpandButton, FunctionalitiesRender, Label, LeftElement, StyledTopLabel } from "./styles";


function TopLabel({ text, functionalities }: ITopLabel) {

  function renderFunctionalities() {
    return functionalities?.map((func, id) => {
      const { name, title, onClick, icon } = func

      return (
        <ExpandButton key={id} id={name} name={name} type="button" title={title} onClick={onClick}>
          {icon}
        </ExpandButton>
      )
    });
  }

  return (
    <StyledTopLabel>
      <LeftElement>
        <Label>{text}</Label>
      </LeftElement>

      <FunctionalitiesRender>
        {renderFunctionalities()}
      </FunctionalitiesRender>
    </StyledTopLabel>
  )
}

export {
  TopLabel
}