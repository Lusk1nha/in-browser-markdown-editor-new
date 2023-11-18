import styled from "styled-components";

type StyledBoldSubTitleProps = {
  $size?: "small" | "medium" | "large";
};

const StyledBoldSubTitle = styled.h3<StyledBoldSubTitleProps>`
  color: ${(props) => props.theme.colors.textComponents.boldSubtitle};

  font-feature-settings:
    "clig" off,
    "liga" off;
  font-family: Roboto Slab;
  font-size: ${({ $size }) =>
    $size === "large" ? "24px" : $size === "medium" ? "20px" : "16px"};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { StyledBoldSubTitle };
