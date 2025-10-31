import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'About | Polaris Real Estate',
  description: 'Learn about Polaris\'s mission to revolutionize UHNW real estate with transparent pricing, AI technology, and white-glove service.',
};

export default function About() {
  const differentiators = [
    {
      title: 'UHNW-Specific',
      description: 'Built exclusively for $10M+ transactions',
      detail: 'Not mass-market retrofitted',
    },
    {
      title: 'Technology + Human',
      description: 'AI efficiency with dedicated advisors',
      detail: 'Never self-service',
    },
    {
      title: 'Transparent Pricing',
      description: 'Tiered pricing: $35K-$150K',
      detail: 'Matched to your property value',
    },
    {
      title: 'National Platform',
      description: '15 luxury markets from Day 1',
      detail: 'Not a regional player',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Guiding UHNW Real Estate with Intelligence and Integrity
          </h1>
          <p className="text-xl text-polaris-gold">
            We're building the North Star of luxury real estate
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-8">
            Why We Exist
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              The luxury real estate industry has operated the same way for decades: opaque practices,
              misaligned incentives, and exorbitant fees that provide minimal value to clients. For
              ultra-high-net-worth individuals transacting properties valued at $10M-$100M, traditional
              commissions represent an absurd tax on wealth—often $600K to $3M per transaction.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We believe there's a better way.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Polaris combines sophisticated artificial intelligence with white-glove human service to
              deliver exceptional outcomes at a fraction of traditional costs. We're not here to disrupt
              for disruption's sake. We're here to elevate the entire UHNW real estate experience.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our platform leverages AI for what technology does best—data analysis, market insights,
              document processing, and efficiency—while our dedicated advisors provide what only humans
              can: judgment, negotiation expertise, relationship building, and truly personalized service.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This is luxury real estate reimagined. This is your North Star.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="my-12 py-8 border-t border-b border-polaris-gold/30">
            <blockquote className="text-2xl md:text-3xl font-playfair text-center text-polaris-gold italic">
              "Intelligence. Integrity. Excellence."
            </blockquote>
          </div>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section background="sky" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            What Sets Polaris Apart
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <Card key={index} padding="lg" className="text-center">
              <h3 className="text-xl font-semibold text-polaris-navy mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-2">
                {item.description}
              </p>
              <p className="text-sm text-gray-500">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="white" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-6">
            Led by Industry Veterans
          </h2>

          <Card padding="lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              We're assembling a world-class team of real estate, technology, and luxury service experts.
              Our leadership will bring decades of combined experience from top-tier firms in proptech,
              private equity, and ultra-high-net-worth services.
            </p>
            <p className="text-polaris-blue font-semibold">
              Interested in joining Polaris? We're hiring exceptional talent.
            </p>
            <a
              href="mailto:founders@polaris.estate"
              className="inline-block mt-4 text-polaris-blue hover:text-polaris-blue-dark underline"
            >
              View Opportunities →
            </a>
          </Card>
        </div>
      </Section>

      {/* Investors & Advisors */}
      <Section background="gray" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-6">
            Backed by Leading Investors
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            We're raising a $5M seed round to launch our national platform and establish Polaris as the
            premier UHNW real estate solution. Our vision is backed by strategic advisors from leading
            proptech companies, luxury brands, and venture capital firms.
          </p>

          <p className="text-gray-600">
            Interested investors can reach out to:{' '}
            <a
              href="mailto:founders@polaris.estate"
              className="text-polaris-blue hover:text-polaris-blue-dark font-semibold"
            >
              founders@polaris.estate
            </a>
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
