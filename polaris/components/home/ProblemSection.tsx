'use client';

import React from 'react';
import Section from '../ui/Section';

const ProblemSection: React.FC = () => {
  return (
    <Section background="white" padding="lg">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          The Traditional Model Is Broken
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* OLD WAY */}
        <div className="relative">
          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-red-900/20" />
            {/* X Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-red-500/90 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">The Traditional Way</h3>
          <ul className="space-y-3 mb-6">
            {[
              '5-6% commissions ($600K-$3M on $10M-$100M properties)',
              'Opaque pricing and hidden costs',
              'Misaligned incentives',
              'Limited transparency',
              'Outdated processes',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">❌</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          {/* Stat Callout */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-sm text-gray-600 mb-1">Average Commission on a $40M Property</p>
            <p className="text-3xl font-bold text-red-600">$2.4M</p>
          </div>
        </div>

        {/* POLARIS WAY */}
        <div className="relative">
          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-polaris-blue/20" />
            {/* Checkmark Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-green-500/90 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-polaris-blue mb-4">The Polaris Way</h3>
          <ul className="space-y-3 mb-6">
            {[
              'Tiered pricing: $35K-$150K (matched to your property)',
              '94-99% savings vs. traditional',
              'AI-driven insights + progressive white-glove service',
              'Full transaction transparency',
              'Modern, streamlined experience',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          {/* Stat Callout */}
          <div className="bg-polaris-sky border-l-4 border-polaris-blue p-4 rounded">
            <p className="text-sm text-gray-600 mb-1">Premier Tier Fee on a $40M Property</p>
            <p className="text-3xl font-bold text-polaris-blue">$75K</p>
            <p className="text-lg font-semibold text-green-600 mt-2">
              SAVE $2.12M (97% savings)
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Includes: International marketing, 24/7 support, video tour, entity structuring
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;
