import React from "react";

/**
 * LogoMark
 * --------
 * Pure-SVG QLOUD wordmark using Russo One.
 * - Bottom layer: white fill
 * - Top layer: cyan stroke with animated stroke-dashoffset (marching ants)
 *   that travels around every letter outline like electricity
 *   flowing through the wordmark.
 */
const LogoMark = () => (
  <svg
    className="logo-mark-svg"
    viewBox="0 0 200 40"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Qloud Tech"
    role="img"
  >
    <defs>
      <filter id="qloudGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="0.7" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* White fill base */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Russo One', system-ui, sans-serif"
      fontSize="30"
      letterSpacing="3"
      fill="white"
      className="logo-mark-fill"
    >
      QLOUD
    </text>

    {/* Cyan electric outline (marching ants) */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Russo One', system-ui, sans-serif"
      fontSize="30"
      letterSpacing="3"
      fill="none"
      stroke="rgba(0, 212, 255, 1)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#qloudGlow)"
      className="logo-mark-snake"
    >
      QLOUD
    </text>
  </svg>
);

export default LogoMark;
