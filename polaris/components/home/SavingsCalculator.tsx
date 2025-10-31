'use client';

import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const SavingsCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState(40000000); // $40M default

  // Determine tier and fee based on property value
  const getTierInfo = (value: number) => {
    if (value >= 10000000 && value < 25000000) {
      return {
        name: 'Essential',
        fee: 35000,
        description: 'Core white-glove service',
        color: 'bg-polaris-sky border-polaris-blue',
        textColor: 'text-polaris-blue'
      };
    } else if (value >= 25000000 && value < 75000000) {
      return {
        name: 'Premier',
        fee: 75000,
        description: 'Enhanced international marketing',
        color: 'bg-blue-50 border-blue-600',
        textColor: 'text-blue-600'
      };
    } else {
      return {
        name: 'Elite',
        fee: 150000,
        description: 'Ultimate discretion & dedicated team',
        color: 'bg-gray-900/5 border-gray-900',
        textColor: 'text-gray-900'
      };
    }
  };

  const tierInfo = getTierInfo(propertyValue);
  const traditionalCommission = propertyValue * 0.055; // 5.5%
  const polarisFee = tierInfo.fee;
  const savings = traditionalCommission - polarisFee;
  const savingsPercent = ((savings / traditionalCommission) * 100).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatShortCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return formatCurrency(value);
  };

  return (
    <Section background="white" padding="lg" className="scroll-mt-20" id="calculator">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          See Your Potential Savings
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Slider */}
        <div className="mb-12">
          <label className="block text-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Property Value</span>
            <span className="block text-3xl md:text-4xl font-bold text-polaris-blue mt-2">
              {formatCurrency(propertyValue)}
            </span>
          </label>

          <div className="relative">
            <input
              type="range"
              min="10000000"
              max="100000000"
              step="5000000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #1a73e8 0%, #1a73e8 ${((propertyValue - 10000000) / 90000000) * 100}%, #e5e7eb ${((propertyValue - 10000000) / 90000000) * 100}%, #e5e7eb 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$10M</span>
              <span>$100M</span>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Traditional */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Traditional Commission (5.5%)</p>
            <p className="text-3xl md:text-4xl font-bold text-red-600">
              {formatShortCurrency(traditionalCommission)}
            </p>
            <p className="text-xs text-gray-500 mt-2">Based on industry average</p>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 font-semibold">vs.</p>
              <svg className="w-8 h-8 text-gray-400 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Polaris */}
          <div className={`${tierInfo.color} border-2 rounded-xl p-6 text-center`}>
            <p className="text-sm text-gray-600 mb-2">Polaris {tierInfo.name} Tier</p>
            <p className={`text-3xl md:text-4xl font-bold ${tierInfo.textColor}`}>
              {formatShortCurrency(polarisFee)}
            </p>
            <p className="text-xs text-gray-500 mt-2">{tierInfo.description}</p>
          </div>
        </div>

        {/* Savings Display */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <p className="text-lg md:text-xl font-semibold mb-2">YOUR SAVINGS</p>
          <p className="text-5xl md:text-6xl font-bold mb-3">
            {formatShortCurrency(savings)}
          </p>
          <p className="text-lg md:text-xl opacity-90">
            That's {savingsPercent}% less than traditional
          </p>
        </div>

        {/* Tier Ranges */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
          <p className="text-sm font-semibold text-center text-gray-700 mb-4">Our Three Service Tiers:</p>
          <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
            <div className={propertyValue < 25000000 ? 'font-bold text-polaris-blue' : 'text-gray-600'}>
              <p className="font-semibold">Essential</p>
              <p className="text-xs">$10M - $25M</p>
              <p className="text-xs">$35K fee</p>
            </div>
            <div className={propertyValue >= 25000000 && propertyValue < 75000000 ? 'font-bold text-blue-600' : 'text-gray-600'}>
              <p className="font-semibold">Premier</p>
              <p className="text-xs">$25M - $75M</p>
              <p className="text-xs">$75K fee</p>
            </div>
            <div className={propertyValue >= 75000000 ? 'font-bold text-gray-900' : 'text-gray-600'}>
              <p className="font-semibold">Elite</p>
              <p className="text-xs">$75M+</p>
              <p className="text-xs">$150K fee</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button
            href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
            variant="primary"
            size="lg"
          >
            Schedule Your Consultation
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            <a href="/pricing" className="text-polaris-blue hover:underline">
              View complete pricing details →
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1a73e8;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(26, 115, 232, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1a73e8;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(26, 115, 232, 0.3);
        }
      `}</style>
    </Section>
  );
};

export default SavingsCalculator;
