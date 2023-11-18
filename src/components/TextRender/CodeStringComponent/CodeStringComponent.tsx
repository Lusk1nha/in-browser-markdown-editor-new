import { StyledCodeString } from "./styles";

interface ICodeStringComponentProps {
  children?: string[];
}

function CodeStringComponent({ children }: ICodeStringComponentProps) {
  return (
    <StyledCodeString
      className="code-string-component"
      title={children?.join("")}
    >
      {children}
    </StyledCodeString>
  );
}

export { CodeStringComponent };
