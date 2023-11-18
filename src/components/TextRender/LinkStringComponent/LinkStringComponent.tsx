import { StyledLinkString } from "./styles";

interface ILinkStringComponentProps {
  children?: string[];
  url?: string;
}

function LinkStringComponent({ children, url }: ILinkStringComponentProps) {
  return (
    <StyledLinkString href={url} title={children?.join("")} target="_blank">
      {children}
    </StyledLinkString>
  );
}

export { LinkStringComponent };
