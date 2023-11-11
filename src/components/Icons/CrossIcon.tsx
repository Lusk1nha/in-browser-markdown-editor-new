import { SVGComponentProps } from "../../shared/types/SVGComponentProps";

function CrossIcon({ className, fillColor }: SVGComponentProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.10049"
        y="0.686523"
        width="30"
        height="2"
        transform="rotate(45 2.10049 0.686523)"
        fill={fillColor ?? "white"}
      />
      <rect
        x="0.686279"
        y="21.8999"
        width="30"
        height="2"
        transform="rotate(-45 0.686279 21.8999)"
        fill={fillColor ?? "white"}
      />
    </svg>
  );
}

export { CrossIcon };
