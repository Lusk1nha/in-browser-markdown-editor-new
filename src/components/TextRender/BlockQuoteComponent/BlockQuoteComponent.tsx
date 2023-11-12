import { BlockText, StyledBlockQuote } from "./styles";

interface IBlockQuoteComponentProps {
  children?: string;
}

function BlockQuoteComponent({ children }: IBlockQuoteComponentProps) {
  return (
    <StyledBlockQuote title={children}>
      <BlockText>{children}</BlockText>
    </StyledBlockQuote>
  );
}

export { BlockQuoteComponent };
