import * as React from "react";

interface CheckVerifiedIconProps {
  width: number;
  height: number;
  viewBox: string;
}

const CheckVerifiedIcon: React.FC<CheckVerifiedIconProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
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
    <g id="check-verified-01">
      <path
        id="Fill"
        opacity={0.12}
        d="M9.51447 2.91542C8.90071 3.43846 8.1376 3.75455 7.33377 3.8187C5.45794 3.96839 3.96839 5.45794 3.8187 7.33377C3.75455 8.1376 3.43846 8.90071 2.91542 9.51447C1.69486 10.9467 1.69486 13.0533 2.91542 14.4855C3.43846 15.0993 3.75455 15.8624 3.8187 16.6662C3.96839 18.5421 5.45794 20.0316 7.33377 20.1813C8.1376 20.2455 8.90071 20.5615 9.51447 21.0846C10.9467 22.3051 13.0533 22.3051 14.4855 21.0846C15.0993 20.5615 15.8624 20.2455 16.6662 20.1813C18.5421 20.0316 20.0316 18.5421 20.1813 16.6662C20.2455 15.8624 20.5615 15.0993 21.0846 14.4855C22.3051 13.0533 22.3051 10.9467 21.0846 9.51447C20.5615 8.90071 20.2455 8.1376 20.1813 7.33377C20.0316 5.45794 18.5421 3.96839 16.6662 3.8187C15.8624 3.75455 15.0993 3.43846 14.4855 2.91542C13.0533 1.69486 10.9467 1.69486 9.51447 2.91542Z"
        fill="url(#paint0_linear_9132_5937)"
      />
      <path
        id="Icon"
        d="M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z"
        stroke="url(#paint1_linear_9132_5937)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_9132_5937"
        x1={5.13529}
        y1={-6.40694}
        x2={29.2413}
        y2={2.58318}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEECE3" />
        <stop offset={0.25} stopColor="#FCD5BF" />
        <stop offset={0.5} stopColor="#FEAFAE" />
        <stop offset={0.75} stopColor="#FFA4BD" />
        <stop offset={1} stopColor="#FFA9CC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9132_5937"
        x1={5.13529}
        y1={-6.40694}
        x2={29.2413}
        y2={2.58318}
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
export default CheckVerifiedIcon;
