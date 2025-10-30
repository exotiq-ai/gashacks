'use client';

import React from 'react';
import Button from '../ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-polaris">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Buyers/Sellers */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-polaris-blue to-polaris-blue-dark p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Ready to Find Your True North?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Schedule a complimentary 30-minute consultation with a Polaris advisor. No obligation, just intelligent conversation about your real estate goals.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Personalized market analysis',
                'Savings calculation for your property',
                'Portfolio strategy (if applicable)',
                'Answer all your questions',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
              variant="outline"
              size="lg"
              fullWidth
            >
              Schedule Consultation
            </Button>
          </div>

          {/* For Investors */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-polaris-navy to-polaris-navy-dark p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Invest in the Future
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Interested in learning more about Polaris as an investment opportunity? We're building the national platform for UHNW real estate.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                '$130B+ market opportunity',
                'AI-powered disruption',
                '15-market national footprint',
                'Strong unit economics',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5 text-polaris-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              href="/investors"
              variant="outline"
              size="lg"
              fullWidth
            >
              Investor Inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
