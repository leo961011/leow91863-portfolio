import React from "react";

const Logo = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    style={{ display: "block" }}
    xmlns="http://www.w3.org/2000/svg"
    className="logo-animate"
  >
    <defs>
      <radialGradient id="drop" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </radialGradient>
    </defs>
    <path
      d="M32 8C32 8 16 32 32 56C48 32 32 8 32 8Z"
      fill="url(#drop)"
      stroke="#0ea5e9"
      strokeWidth="3"
    >
      <animate
        attributeName="d"
        values="
          M32 8C32 8 16 32 32 56C48 32 32 8 32 8Z;
          M32 10C32 10 18 32 32 54C46 32 32 10 32 10Z;
          M32 8C32 8 16 32 32 56C48 32 32 8 32 8Z
        "
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    <circle
      cx="32"
      cy="32"
      r="8"
      fill="#fff"
      opacity="0.15"
    >
      <animate
        attributeName="r"
        values="8;12;8"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default Logo;