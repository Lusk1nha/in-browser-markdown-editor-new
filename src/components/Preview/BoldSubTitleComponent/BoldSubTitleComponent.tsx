import { StyledBoldSubTitle } from "./styles";

interface IBoldSubTitleProps {
  children?: string;
  size?: "small" | "medium" | "large";
}

function BoldSubTitleComponent({ children, size }: IBoldSubTitleProps) {
  const elements = {
    small: "h5",
    medium: "h4",
    large: "h3",
  };

  const $size = size ?? "large";

  return (
    <StyledBoldSubTitle as={elements[$size]} title={children} $size={$size}>
      {children}
    </StyledBoldSubTitle>
  );
}

export { BoldSubTitleComponent };
