import { StyledCodeBlockComponent, CodeText } from "./styles";

interface ICodeBlockComponentProps {
  children?: React.ReactNode;
}

function CodeBlockComponent({ children }: ICodeBlockComponentProps) {
  return (
    <StyledCodeBlockComponent>
      <CodeText>{children}</CodeText>
    </StyledCodeBlockComponent>
  );
}

export { CodeBlockComponent };
