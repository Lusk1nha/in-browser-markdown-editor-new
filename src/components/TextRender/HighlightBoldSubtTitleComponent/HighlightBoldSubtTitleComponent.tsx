import { StyledHighlightBoldSubTitleComponent } from "./styles";

interface IHighlightBoldSubTitleComponentProps {
  children?: string[];
}

function HighlightBoldSubTitleComponent({
  children,
}: IHighlightBoldSubTitleComponentProps) {
  return (
    <StyledHighlightBoldSubTitleComponent
      className="highlight-bold-component"
      title={children?.join("")}
    >
      {children}
    </StyledHighlightBoldSubTitleComponent>
  );
}

export { HighlightBoldSubTitleComponent };
