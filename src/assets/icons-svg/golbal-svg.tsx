import * as React from "react";

interface GlobalIconProps {
  width: number;
  height: number;
  viewBox: string;
}

const GlobalIcon: React.FC<GlobalIconProps> = ({
  width = 24,
  height = 25,
  viewBox = "0 0 24 25",
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
    <g id="globe-04">
      <g id="Solid">
        <path
          d="M13.8939 13.0808L16.5342 14.2124C16.6642 14.268 16.8143 14.3323 16.9397 14.3995C17.0808 14.4751 17.2866 14.6025 17.4539 14.8273C17.6655 15.1116 17.7696 15.4617 17.7477 15.8155C17.7304 16.0951 17.6276 16.3143 17.5506 16.4547C17.4823 16.5795 17.3917 16.7153 17.3132 16.8329C16.8225 17.5692 16.381 18.5866 15.6848 19.1588C15.5325 19.284 15.357 19.378 15.1683 19.4353C14.2961 19.7002 12.7076 19.7484 11.8114 19.3959C11.5777 19.304 11.3708 19.1549 11.2097 18.9623C10.6052 18.2393 10.4447 16.9969 10.1561 16.1306L10.1484 16.1079C10.12 16.0246 10.0614 15.8527 10.0454 15.6674C10.0318 15.5106 10.0431 15.3526 10.0787 15.1993C10.2262 14.5637 10.6368 13.9001 10.9664 13.3503C11.0351 13.2356 11.1415 13.081 11.3119 12.9437C11.5359 12.7631 11.8071 12.6507 12.0932 12.62C12.3108 12.5967 12.4953 12.6308 12.625 12.6633C13.051 12.7699 13.4916 12.9084 13.8939 13.0808Z"
          fill="url(#paint0_linear_9132_5836)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.5C5.92487 1.5 1 6.42487 1 12.5C1 18.5751 5.92487 23.5 12 23.5C18.0751 23.5 23 18.5751 23 12.5C23 6.42487 18.0751 1.5 12 1.5ZM3.50553 9.51869C3.17808 10.4517 3 11.4551 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 8.6675 18.6045 5.39451 15.2291 4.09664C15.1462 5.34217 15.5812 7.30831 14.5371 8.26943C13.4421 9.27736 11.4822 9.7136 10.1439 10.3083L9.25538 11.493C9.18549 11.5863 9.10167 11.6981 9.01972 11.7908C8.92445 11.8984 8.77813 12.044 8.56315 12.1514C8.284 12.2907 7.96834 12.3396 7.66013 12.2911C7.42276 12.2538 7.23928 12.1592 7.11593 12.0854C7.00979 12.0218 6.89611 11.9406 6.80129 11.8728L3.50553 9.51869Z"
          fill="url(#paint1_linear_9132_5836)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_9132_5836"
        x1={4.44882}
        y1={-7.74764}
        x2={30.9655}
        y2={2.1415}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEECE3" />
        <stop offset={0.25} stopColor="#FCD5BF" />
        <stop offset={0.5} stopColor="#FEAFAE" />
        <stop offset={0.75} stopColor="#FFA4BD" />
        <stop offset={1} stopColor="#FFA9CC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_9132_5836"
        x1={4.44882}
        y1={-7.74764}
        x2={30.9655}
        y2={2.1415}
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
export default GlobalIcon;
