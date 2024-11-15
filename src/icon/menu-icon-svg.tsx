import * as React from "react";
interface MenuIconProps {
  width: number;
  height: number;
  viewBox: string;
}
const MenuIcon: React.FC<MenuIconProps> = ({
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
    <path
      d="M3 12.5H15M3 6.5H21M3 18.5H21"
      stroke="url(#paint0_linear_5004_5196)"
      strokeWidth={1.84615}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5004_5196"
        x1={5.82176}
        y1={1.45583}
        x2={24.6443}
        y2={11.9854}
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
export default MenuIcon;
