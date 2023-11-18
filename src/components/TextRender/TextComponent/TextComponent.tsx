import { StyledText } from "./styles";

interface ITextComponentProps {
  children?: string[];
}

function TextComponent({ children }: ITextComponentProps) {
  return (
    <StyledText className="text-component" title={children?.join("")}>
      {children}
    </StyledText>
  );
}

export { TextComponent };
