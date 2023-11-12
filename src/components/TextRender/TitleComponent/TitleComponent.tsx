import { StyledTitle } from "./styles";

interface ITitleComponentProps {
  children?: string;
}

function TitleComponent({ children }: ITitleComponentProps) {
  return <StyledTitle title={children}>{children}</StyledTitle>;
}

export { TitleComponent };
