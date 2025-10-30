'use client';

import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const HowItWorksSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Intelligence',
      description: 'The perfect balance of AI efficiency and human excellence',
      items: [
        'Smart property valuation',
        'Real-time market analysis',
        'Document automation',
        'Predictive insights',
        '90%+ accuracy (McKinsey)',
      ],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'White-Glove Service',
      description: 'Dedicated UHNW advisors for personalized guidance',
      items: [
        'Dedicated UHNW advisor',
        '24/7 concierge support',
        'Complex transaction expertise',
        'International buyer coordination',
        'Attorney & CPA collaboration',
      ],
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Unmatched Results',
      description: 'Exceptional outcomes for your real estate portfolio',
      items: [
        'Average $1.8M savings',
        'Portfolio management',
        'Multi-property support',
        'Network of 15+ luxury markets',
        'Post-close optimization',
      ],
    },
  ];

  return (
    <Section background="sky" padding="lg" className="scroll-mt-20" id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          Intelligent Technology. Human Excellence.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          The perfect balance of AI efficiency and white-glove service
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} hover padding="lg" className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-polaris-blue/10 text-polaris-blue mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-polaris-navy mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              {feature.description}
            </p>

            {/* Items */}
            <ul className="space-y-2 text-left">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start text-sm text-gray-600">
                  <span className="text-polaris-blue mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
