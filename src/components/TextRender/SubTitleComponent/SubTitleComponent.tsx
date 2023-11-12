import { StyledSubTitle } from "./styles";

interface ITitleComponentProps {
  children?: string;
}

function SubTitleComponent({ children }: ITitleComponentProps) {
  return <StyledSubTitle title={children}>{children}</StyledSubTitle>;
}

export { SubTitleComponent };
