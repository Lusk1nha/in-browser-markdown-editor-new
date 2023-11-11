import { SVGComponentProps } from "../../shared/types/SVGComponentProps";

function HamburgerMenuIcon({ className, fillColor }: SVGComponentProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
    >
      <rect width="72" height="72" fill="none" />
      <rect x="21" y="27" width="30" height="2" fill={fillColor ?? "white"} />
      <rect x="21" y="35" width="30" height="2" fill={fillColor ?? "white"} />
      <rect x="21" y="43" width="30" height="2" fill={fillColor ?? "white"} />
    </svg>
  );
}

export { HamburgerMenuIcon };
