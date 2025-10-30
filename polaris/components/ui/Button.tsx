'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-polaris-blue text-white
      hover:bg-polaris-blue-dark
      focus:ring-polaris-blue
      shadow-md hover:shadow-blue
      transform hover:-translate-y-0.5
    `,
    secondary: `
      bg-polaris-navy text-white
      hover:bg-polaris-navy-light
      focus:ring-polaris-navy
      shadow-md hover:shadow-lg
      transform hover:-translate-y-0.5
    `,
    ghost: `
      bg-transparent text-polaris-blue border-2 border-polaris-blue
      hover:bg-polaris-blue hover:text-white
      focus:ring-polaris-blue
    `,
    outline: `
      bg-transparent text-white border-2 border-white
      hover:bg-white hover:text-polaris-navy
      focus:ring-white
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
