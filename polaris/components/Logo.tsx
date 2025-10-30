'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: { width: 120, height: 32, fontSize: 20 },
    md: { width: 160, height: 42, fontSize: 26 },
    lg: { width: 200, height: 52, fontSize: 32 },
    xl: { width: 240, height: 62, fontSize: 38 },
  };

  const colors = {
    light: '#ffffff',
    dark: '#0a2540',
    blue: '#1a73e8',
  };

  const { width, height, fontSize } = sizes[size];
  const color = colors[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Polaris"
    >
      {/* North Star Icon - Subtle accent above the O */}
      <g opacity="0.9">
        <path
          d="M78 6 L79.5 10 L83.5 10 L80.25 12.5 L81.75 16.5 L78 14 L74.25 16.5 L75.75 12.5 L72.5 10 L76.5 10 Z"
          fill={variant === 'light' ? '#c9a961' : '#1a73e8'}
          opacity="0.8"
        />
      </g>

      {/* POLARIS Wordmark */}
      <text
        x="0"
        y="42"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize={fontSize}
        fontWeight="600"
        fill={color}
        letterSpacing="-0.02em"
      >
        {/* P */}
        <tspan x="0">P</tspan>
        {/* O with visual connection to north star */}
        <tspan>O</tspan>
        {/* LARIS */}
        <tspan>LARIS</tspan>
      </text>

      {/* Subtle underline accent (optional) */}
      <line
        x1="0"
        y1="48"
        x2="50"
        y2="48"
        stroke={variant === 'light' ? '#c9a961' : '#1a73e8'}
        strokeWidth="2"
        opacity="0.3"
      />
    </svg>
  );
};

export default Logo;
