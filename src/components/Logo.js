import React from "react";

const Logo = () => {
  return (
    <svg
      viewBox="-150 0 650 200"
      width="100%"
      height="50"
      style={{ display: "block" }}
      fontWeight="900"
    >
      {/* مرکز هندسی لوگو */}
      <g transform="translate(250,100)" direction="ltr">
        {/* سمت چپ */}
        <text
          x="0"
          y="0"
          textAnchor="end"
          dominantBaseline="middle"
          fontSize="90"
          fontFamily="sans-serif"
          fill="#222"
        >
          AHMADI
        </text>

        {/* سمت راست */}
        <text
          x="20"
          y="0"
          textAnchor="start"
          dominantBaseline="middle"
          fontSize="90"
          fontFamily="sans-serif"
          fill="#3FD0D4"
        >
          TRIP
        </text>
      </g>
    </svg>
  );
};

export default Logo;
