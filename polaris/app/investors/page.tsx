import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Investors | Polaris Real Estate',
  description: 'Invest in the future of luxury real estate. $130B+ market opportunity, AI-powered disruption, 15-market national footprint.',
};

export default function Investors() {
  const marketStats = [
    { value: '$130B+', label: 'Annual Market' },
    { value: '71,600+', label: 'UHNW Individuals' },
    { value: '$1.8M', label: 'Avg Savings' },
  ];

  const trends = [
    {
      title: 'NAR Settlement (2024)',
      description: 'Commission disclosure rules disrupting traditional model',
      detail: 'First major regulatory change in decades',
    },
    {
      title: 'AI Technology Maturity',
      description: 'LLMs ready for complex real estate documents',
      detail: '90%+ valuation accuracy proven',
    },
    {
      title: 'Proven Market Demand',
      description: 'Ridley: $1.5B+ in mass-market transactions',
      detail: 'UHNW segment ready for AI solution',
    },
    {
      title: 'UHNW Wealth Migration',
      description: 'Florida, Texas, Colorado booming',
      detail: 'Domestic & international capital flows',
    },
  ];

  const fundingUse = [
    'Launch the Miami market (Q1 2026)',
    'Build world-class AI platform',
    'Assemble exceptional team',
    'Execute 18-month roadmap to Series A',
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Invest in the Future of Luxury Real Estate
          </h1>
          <p className="text-xl text-gray-300">
            AI-powered platform for UHNW transactions | $130B+ market opportunity
          </p>
        </div>
      </Section>

      {/* The Opportunity */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            A Massive, Underserved Market
          </h2>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {marketStats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl md:text-6xl font-bold text-polaris-blue mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              The ultra-high-net-worth real estate market represents one of the largest underserved
              opportunities in proptech. With 71,600+ individuals with $30M+ net worth transacting
              $130B+ in luxury properties annually, the total addressable market is enormous—yet
              completely dominated by traditional brokerages charging 5-6% commissions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Polaris is purpose-built to serve this market with AI-powered efficiency and white-glove
              service, delivering average savings of $1.8M per transaction. We're not disrupting the
              mass market—we're elevating the luxury market.
            </p>
          </Card>
        </div>
      </Section>

      {/* Why Now */}
      <Section background="sky" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            Perfect Market Timing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {trends.map((trend, index) => (
            <Card key={index} hover padding="lg">
              <h3 className="text-xl font-semibold text-polaris-navy mb-3">
                {trend.title}
              </h3>
              <p className="text-gray-700 mb-2">
                {trend.description}
              </p>
              <p className="text-sm text-gray-600">
                {trend.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Traction */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-6">
            Early Momentum
          </h2>

          <Card padding="lg">
            <p className="text-gray-700 leading-relaxed">
              Launching Q1 2026 with $5M seed capital. Early interest from UHNW clients in Miami,
              Aspen, and the Hamptons confirms strong product-market fit.
            </p>
          </Card>
        </div>
      </Section>

      {/* The Ask */}
      <Section background="navy" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">
            Join Us in Building Polaris
          </h2>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-xl text-white mb-8">
              We're raising a <span className="font-bold text-polaris-gold">$5M seed round</span> to:
            </p>

            <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
              {fundingUse.map((item, index) => (
                <li key={index} className="flex items-start text-white">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-polaris-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 mb-6">
              This capital provides runway to demonstrate product-market fit, achieve first $3M in revenue,
              and position for national expansion.
            </p>

            <p className="text-white mb-2">
              For qualified investors interested in learning more:
            </p>
            <a
              href="mailto:founders@polaris.estate"
              className="text-polaris-gold font-semibold text-xl hover:underline"
            >
              founders@polaris.estate
            </a>
          </div>

          <Button
            href="/contact"
            variant="outline"
            size="lg"
          >
            Request Investor Deck
          </Button>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
