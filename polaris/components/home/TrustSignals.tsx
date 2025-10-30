'use client';

import React from 'react';
import Section from '../ui/Section';

const TrustSignals: React.FC = () => {
  const stats = [
    { value: '$130B+', label: 'Annual Market' },
    { value: '71,600+', label: 'UHNW Individuals' },
    { value: '98%+', label: 'Avg Savings' },
    { value: '15', label: 'Luxury Markets' },
  ];

  const badges = [
    { icon: '🔒', label: 'Bank-Level Security' },
    { icon: '✓', label: 'Licensed & Insured' },
    { icon: '✓', label: 'GDPR Compliant' },
    { icon: '✓', label: 'SOC 2 Certified' },
  ];

  return (
    <Section background="white" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          Built on a Foundation of Excellence
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-polaris-blue mb-2">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Security Badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 text-gray-600">
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-sm font-medium">{badge.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TrustSignals;
