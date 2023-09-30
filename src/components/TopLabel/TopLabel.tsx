import { Label, StyledTopLabel } from "./styles";



function TopLabel({ text }: ITopLabel) {

  return (
    <StyledTopLabel>
      <Label>{text}</Label>
    </StyledTopLabel>
  )
}

export {
  TopLabel
}