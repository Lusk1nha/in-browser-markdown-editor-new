import { StyledTitle } from "./styles";

interface ITitleComponentProps {
  children?: string;
}

function TitleComponent({ children }: ITitleComponentProps) {
  console.log(children);
  return (
    <StyledTitle className="title-component" title={children}>
      {children}
    </StyledTitle>
  );
}

export { TitleComponent };
