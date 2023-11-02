import styled from "styled-components";
import { RawButton } from "../../styles/reusables-styles";


interface IStyledFunctionalitiesRenderProps {
  $styled_gap?: string;
}

const StyledFunctionalitiesRender = styled.div<IStyledFunctionalitiesRenderProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $styled_gap }) => $styled_gap ?? 'unset'};
`

const FunctionalityButton = styled(RawButton)`
  cursor: pointer;
`

export {
  StyledFunctionalitiesRender,
  FunctionalityButton
}