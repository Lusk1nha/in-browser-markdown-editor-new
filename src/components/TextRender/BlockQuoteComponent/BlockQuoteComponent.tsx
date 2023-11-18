import { BlockText, StyledBlockQuote } from "./styles";

interface IBlockQuoteComponentProps {
  children?: string[];
}

function BlockQuoteComponent({ children }: IBlockQuoteComponentProps) {
  return (
    <StyledBlockQuote
      className="block-quote-component"
      title={children?.join("")}
    >
      <BlockText className="block-quote-text">{children}</BlockText>
    </StyledBlockQuote>
  );
}

export { BlockQuoteComponent };
