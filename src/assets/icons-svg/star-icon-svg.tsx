import * as React from "react";
interface StarIconProps {
  width: number;
  height: number;
  viewBox: string;
}

const StarIcon: React.FC<StarIconProps> = ({
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
    <g id="star-01">
      <path
        id="Solid"
        d="M12.6456 2.27566C12.2372 2.08096 11.7628 2.08096 11.3545 2.27566C11.0014 2.44398 10.8068 2.73622 10.7087 2.89654C10.6072 3.06228 10.503 3.27341 10.4015 3.47919L8.24576 7.84648L3.42371 8.55129C3.19672 8.58442 2.96381 8.61841 2.7749 8.66384C2.59214 8.70779 2.25423 8.80284 1.98531 9.08668C1.67422 9.41505 1.52792 9.86626 1.58714 10.3147C1.63833 10.7023 1.85618 10.9776 1.97838 11.1204C2.10469 11.268 2.27334 11.4322 2.43771 11.5923L5.9255 14.9894L5.10254 19.7877C5.06369 20.0139 5.02383 20.246 5.00849 20.4398C4.99365 20.6272 4.97931 20.9781 5.16601 21.3218C5.38196 21.7194 5.76584 21.9983 6.21071 22.0807C6.59531 22.152 6.9246 22.0299 7.09823 21.9579C7.27778 21.8834 7.4862 21.7737 7.68936 21.6668L12 19.3999L16.3107 21.6668C16.5139 21.7737 16.7223 21.8834 16.9018 21.9579C17.0755 22.0299 17.4047 22.152 17.7893 22.0807C18.2342 21.9983 18.6181 21.7194 18.834 21.3218C19.0207 20.9781 19.0064 20.6272 18.9916 20.4398C18.9762 20.246 18.9364 20.0139 18.8975 19.7877L18.0745 14.9894L21.5624 11.5922C21.7267 11.4322 21.8954 11.268 22.0217 11.1204C22.1439 10.9776 22.3617 10.7023 22.4129 10.3147C22.4721 9.86626 22.3258 9.41505 22.0147 9.08668C21.7458 8.80284 21.4079 8.70779 21.2252 8.66384C21.0362 8.61841 20.8033 8.58442 20.5763 8.55129L15.7543 7.84648L13.5986 3.47927C13.4971 3.27347 13.3929 3.06229 13.2914 2.89654C13.1932 2.73622 12.9986 2.44398 12.6456 2.27566Z"
        fill="url(#paint0_linear_9132_5845)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_9132_5845"
        x1={4.84302}
        y1={-6.26582}
        x2={29.7025}
        y2={3.41329}
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
export default StarIcon;