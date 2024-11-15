import * as React from "react";
interface LogoIconProps {
  width: number;
  height: number;
  viewBox: string;
}
const LogoIcon: React.FC<LogoIconProps> = ({
  width = 31,
  height = 32,
  viewBox = "0 0 31 32",
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
    <g clipPath="url(#clip0_5014_5705)">
      <rect
        y={0.943848}
        width={31}
        height={31}
        rx={8}
        fill="url(#paint0_linear_5014_5705)"
      />
      <g filter="url(#filter0_i_5014_5705)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 15.0999C22.9234 12.7769 19.649 7.73104 19.649 2.26465C19.649 -3.20174 22.9234 -8.24764 27.9929 -10.5775L25.9266 -14.8169C22.6529 -13.3142 19.8766 -10.9498 17.9097 -7.97881C15.8928 -4.92501 14.8211 -1.38185 14.8211 2.26465C14.8211 5.91115 15.8928 9.4543 17.9169 12.5012C19.8837 15.4722 22.66 17.8366 25.9336 19.3393L28 15.0999Z"
          fill="url(#paint1_linear_5014_5705)"
        />
      </g>
      <g filter="url(#filter1_i_5014_5705)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25488 43.6629C10.3315 41.3399 13.6059 36.294 13.6059 30.8276C13.6059 25.3612 10.3315 20.3153 5.26203 17.9855L7.32832 13.7461C10.602 15.2488 13.3783 17.6132 15.3452 20.5842C17.3621 23.638 18.4338 27.1811 18.4338 30.8276C18.4338 34.4741 17.3621 38.0173 15.338 41.0642C13.3711 44.0352 10.5949 46.3996 7.32128 47.9023L5.25488 43.6629Z"
          fill="url(#paint2_linear_5014_5705)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_i_5014_5705"
        x={14.8211}
        y={-16.1021}
        width={13.1789}
        height={35.4414}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-2.57037} />
        <feGaussianBlur stdDeviation={0.642592} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_5014_5705"
        />
      </filter>
      <filter
        id="filter1_i_5014_5705"
        x={5.25488}
        y={13.7461}
        width={13.1789}
        height={35.4414}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.57} />
        <feGaussianBlur stdDeviation={0.642592} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_5014_5705"
        />
      </filter>
      <linearGradient
        id="paint0_linear_5014_5705"
        x1={4.85971}
        y1={-12.0869}
        x2={26.1522}
        y2={44.9702}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FEECE3" />
        <stop offset={0.25} stopColor="#FCD5BF" />
        <stop offset={0.5} stopColor="#FEAFAE" />
        <stop offset={0.75} stopColor="#FFA4BD" />
        <stop offset={1} stopColor="#FFA9CC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5014_5705"
        x1={21.4105}
        y1={-14.8169}
        x2={21.4105}
        y2={19.3393}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0.9} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_5014_5705"
        x1={11.8443}
        y1={13.7461}
        x2={11.8443}
        y2={47.9023}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} stopOpacity={0.9} />
      </linearGradient>
      <clipPath id="clip0_5014_5705">
        <rect
          width={31}
          height={31}
          fill="white"
          transform="translate(0 0.943848)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default LogoIcon;
