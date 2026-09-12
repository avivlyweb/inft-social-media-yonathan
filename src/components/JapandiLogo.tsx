import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Japandi Minimalist Logo: Two interlocking organic circles creating a harmonious
 * digital node & zen leaf motif, symbolizing balance between technology and mindful living.
 */
export function JapandiLogo({ className = "h-9 w-9 sm:h-10 sm:w-10", size = 36 }: LogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-[#2A2723] text-[#F9F7F2] shadow-sm hover:scale-105 transition-transform duration-200 border border-[#403B35] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[68%] h-[68%]"
        aria-hidden="true"
      >
        {/* Left organic circle (Nature / Balance) */}
        <circle
          cx="42"
          cy="50"
          r="28"
          stroke="#E6DEC9"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-90"
        />
        {/* Right organic circle (Digital / Connected) */}
        <circle
          cx="58"
          cy="50"
          r="28"
          stroke="#C89D7C"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-90"
        />
        {/* Harmonious center petal overlap */}
        <path
          d="M 50 25 C 40 40 40 60 50 75 C 60 60 60 40 50 25 Z"
          fill="#D6C7AE"
          className="opacity-80"
        />
        {/* Digital balance node */}
        <circle cx="50" cy="50" r="4.5" fill="#2A2723" stroke="#F9F7F2" strokeWidth="2.5" />
      </svg>
    </div>
  );
}
