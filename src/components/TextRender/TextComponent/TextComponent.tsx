import { StyledText } from "./styles";

interface ITextComponentProps {
  children?: React.ReactNode;
}

function TextComponent({ children }: ITextComponentProps) {
  return <StyledText className="text-component">{children}</StyledText>;
}

export { TextComponent };
