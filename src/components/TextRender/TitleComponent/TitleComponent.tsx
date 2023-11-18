import { StyledTitle } from "./styles";

interface ITitleComponentProps {
  children?: string[];
}

function TitleComponent({ children }: ITitleComponentProps) {
  return (
    <StyledTitle className="title-component" title={children?.join("")}>
      {children}
    </StyledTitle>
  );
}

export { TitleComponent };
