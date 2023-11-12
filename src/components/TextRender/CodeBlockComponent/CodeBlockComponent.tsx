import { StyledCodeBlockComponent, CodeText } from "./styles";

interface ICodeBlockComponentProps {
  children?: React.ReactNode;
}

function CodeBlockComponent({ children }: ICodeBlockComponentProps) {
  return (
    <StyledCodeBlockComponent className="codeblock-component">
      <CodeText>{children}</CodeText>
    </StyledCodeBlockComponent>
  );
}

export { CodeBlockComponent };
