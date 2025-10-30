'use client';

import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'navy' | 'sky';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  ...rest
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-polaris-navy text-white',
    sky: 'bg-polaris-sky-light',
  };

  const paddings = {
    sm: 'py-12',
    md: 'py-16 md:py-20',
    lg: 'py-16 md:py-24 lg:py-32',
    xl: 'py-24 md:py-32 lg:py-40',
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`} {...rest}>
      <div className="container-polaris">
        {children}
      </div>
    </section>
  );
};

export default Section;
