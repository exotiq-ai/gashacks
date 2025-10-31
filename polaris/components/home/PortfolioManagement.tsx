'use client';

import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PortfolioManagement: React.FC = () => {
  const tiers = [
    {
      name: 'Essential',
      price: '$200K',
      period: '/year',
      properties: '4-6 properties',
      savings: '$1.5M+ Year 1 ROI',
      features: [
        'Dedicated portfolio advisor',
        'Quarterly portfolio reviews',
        'AI-powered market alerts',
        'Transaction coordination (2/year)',
        'Tax optimization guidance',
        'Asset performance tracking',
      ],
    },
    {
      name: 'Premier',
      price: '$350K',
      period: '/year',
      properties: '7-12 properties',
      savings: '$3M+ Year 1 ROI',
      popular: true,
      features: [
        'Everything in Essential, PLUS:',
        'Monthly strategy sessions',
        'Priority transaction support (4/year)',
        '1031 exchange coordination',
        'International property support',
        'Estate planning integration',
        'Dedicated concierge team',
      ],
    },
    {
      name: 'Elite',
      price: '$500K',
      period: '/year',
      properties: '13+ properties',
      savings: '$5M+ Year 1 ROI',
      features: [
        'Everything in Premier, PLUS:',
        'Weekly advisor access',
        'Unlimited transactions',
        'Multi-generational planning',
        'Private market opportunities',
        'White-glove concierge 24/7',
        'Family office coordination',
        'Custom reporting & analytics',
      ],
    },
  ];

  return (
    <Section background="gray" padding="lg" id="portfolio-management">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          Portfolio Management
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          For clients with multiple luxury properties, we offer comprehensive portfolio management
          to maximize value, minimize costs, and streamline operations across your entire real estate holdings.
        </p>
      </div>

      {/* Tiers */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {tiers.map((tier, index) => (
          <Card
            key={index}
            padding="lg"
            className={`
              relative
              ${tier.popular ? 'ring-2 ring-polaris-blue shadow-2xl scale-105' : ''}
            `}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-polaris-blue text-white text-xs font-semibold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-polaris-navy mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-polaris-blue">{tier.price}</span>
                <span className="text-gray-600">{tier.period}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{tier.properties}</p>
              <p className="text-sm font-semibold text-green-600">{tier.savings}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <svg
                    className="w-5 h-5 text-polaris-blue mr-2 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={feature.startsWith('Everything') ? 'font-semibold' : ''}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
              variant={tier.popular ? 'primary' : 'outline'}
              size="md"
              fullWidth
            >
              Schedule Call
            </Button>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto">
        <Card padding="lg" className="bg-gradient-to-r from-polaris-navy to-blue-900 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Portfolio Management?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-polaris-gold mb-2">94-99%</div>
              <p className="text-sm">Savings vs. traditional commissions on every transaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-polaris-gold mb-2">24/7</div>
              <p className="text-sm">Dedicated support for urgent decisions and opportunities</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-polaris-gold mb-2">1 Team</div>
              <p className="text-sm">Single point of contact across all your properties and markets</p>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Want to learn more about Portfolio Management?
        </p>
        <Button
          href="/pricing#portfolio-management"
          variant="outline"
          size="lg"
        >
          View Complete Pricing Details
        </Button>
      </div>
    </Section>
  );
};

export default PortfolioManagement;
