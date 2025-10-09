import React from "react";

const WavyLine = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1200"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M 100 900 Q 250 700 400 600 T 700 500 T 1100 650"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeDasharray="8,8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 50 1000 Q 200 800 350 750 T 650 700 T 950 900"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeDasharray="8,8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WavyLine;