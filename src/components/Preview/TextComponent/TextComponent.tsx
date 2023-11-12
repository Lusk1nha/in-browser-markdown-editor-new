import { StyledText } from "./styles";

interface ITextComponentProps {
  children?: React.ReactNode;
}

function TextComponent({ children }: ITextComponentProps) {
  return <StyledText>{children}</StyledText>;
}

export { TextComponent };
