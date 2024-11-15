import * as React from "react";
interface LogoIconProps {
  width: number;
  height: number;
  viewBox: string;
}
const LogoIcon: React.FC<LogoIconProps> = ({
  width,
  height,
  viewBox,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      id="Rectangle"
      width={31}
      height={31}
      rx={8}
      fill="url(#paint0_linear_5014_152)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5014_152"
        x1={4.85971}
        y1={-13.0308}
        x2={26.1522}
        y2={44.0263}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEECE3" />
        <stop offset={0.25} stopColor="#FCD5BF" />
        <stop offset={0.5} stopColor="#FEAFAE" />
        <stop offset={0.75} stopColor="#FFA4BD" />
        <stop offset={1} stopColor="#FFA9CC" />
      </linearGradient>
    </defs>
  </svg>
);
export default LogoIcon;
