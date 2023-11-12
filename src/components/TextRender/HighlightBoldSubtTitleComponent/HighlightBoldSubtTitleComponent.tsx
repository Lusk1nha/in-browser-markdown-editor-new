import { StyledHighlightBoldSubTitleComponent } from "./styles";

interface IHighlightBoldSubTitleComponentProps {
  children?: string;
}

function HighlightBoldSubTitleComponent({
  children,
}: IHighlightBoldSubTitleComponentProps) {
  return (
    <StyledHighlightBoldSubTitleComponent title={children}>
      {children}
    </StyledHighlightBoldSubTitleComponent>
  );
}

export { HighlightBoldSubTitleComponent };
