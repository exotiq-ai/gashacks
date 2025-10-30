import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'How It Works | Polaris Real Estate',
  description: 'Learn how Polaris combines AI-powered technology with white-glove service to deliver exceptional UHNW real estate outcomes. Transparent process from discovery to closing.',
};

export default function HowItWorks() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      timeline: 'Week 1 | 30 Minutes',
      description: 'During your complimentary consultation, we\'ll discuss your property goals, timeline, and unique requirements. We\'ll provide an initial market overview and answer all your questions.',
      details: [
        '30-minute video or phone call',
        'Property overview and valuation estimate',
        'Custom strategy discussion',
        'Timeline planning',
        'Q&A session',
      ],
    },
    {
      number: '02',
      title: 'AI Valuation & Strategy',
      timeline: 'Week 1-2',
      description: 'Our AI platform analyzes millions of data points to provide an accurate property valuation and optimal pricing strategy tailored to current market conditions.',
      details: [
        'Comprehensive market analysis',
        'AI-powered pricing guidance',
        'Transaction structuring',
        'Marketing plan development',
        'Timeline optimization',
      ],
    },
    {
      number: '03',
      title: 'Launch & Marketing',
      timeline: 'Week 2-3',
      description: 'We execute a sophisticated marketing campaign designed to reach qualified UHNW buyers through exclusive channels and networks.',
      details: [
        'Professional photography/staging coordination',
        'Listing creation across platforms',
        'Targeted UHNW buyer outreach',
        'Private showing coordination',
        'Buyer qualification process',
      ],
    },
    {
      number: '04',
      title: 'Buyer Qualification & Negotiation',
      timeline: 'Week 3-8',
      description: 'We pre-qualify all buyers to ensure serious interest and financial capability, then skillfully negotiate on your behalf to maximize value.',
      details: [
        'Serious buyer vetting',
        'Private showings management',
        'Offer negotiation and optimization',
        'Due diligence support',
        'Contract review and structuring',
      ],
    },
    {
      number: '05',
      title: 'Close with Confidence',
      timeline: 'Week 8-12',
      description: 'Our team manages every detail of the closing process, coordinating with attorneys, CPAs, and all parties to ensure a seamless transaction.',
      details: [
        'Legal review & coordination',
        'Escrow management',
        'Complex entity structuring',
        'International buyer facilitation',
        'Post-close support and optimization',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How does Polaris handle properties over $50M?',
      answer: 'Properties of any value are welcome at Polaris. Our $30K flat fee applies to all transactions, whether $10M or $100M. For ultra-high-value properties, we provide additional concierge services including enhanced privacy measures, international buyer coordination, and specialized legal structuring support.',
    },
    {
      question: 'What if I own multiple properties across markets?',
      answer: 'Our Portfolio Management service is designed exactly for this. You\'ll have a single dedicated advisor managing all your properties, with a unified dashboard for tracking performance, market values, and opportunities across your entire portfolio.',
    },
    {
      question: 'How do you coordinate with my existing advisors?',
      answer: 'We work seamlessly with your attorney, CPA, wealth manager, and family office. Our platform facilitates secure document sharing and communication, and our advisors are experienced in complex transaction structures involving trusts, LLCs, and international entities.',
    },
    {
      question: 'What\'s included in the $30K flat fee?',
      answer: 'Everything. The flat fee covers your dedicated advisor, AI platform access, professional photography and staging coordination, MLS and syndication, all transaction coordination, legal document review, and post-close support. No hidden costs, no surprises.',
    },
    {
      question: 'How quickly can we close?',
      answer: 'Timeline depends on the complexity of your transaction and buyer readiness. Typical UHNW transactions close in 60-90 days, though we\'ve facilitated closes as fast as 30 days for motivated buyers with strong financing.',
    },
    {
      question: 'Do you work with international buyers?',
      answer: 'Absolutely. We facilitate cross-border transactions regularly and provide support for international wire transfers, currency exchange, visa considerations, and remote closing coordination. Our team includes multilingual advisors.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Luxury Real Estate. Reimagined.
          </h1>
          <p className="text-xl text-gray-300">
            A seamless experience from discovery to closing
          </p>
        </div>
      </Section>

      {/* Process Timeline */}
      <Section background="white" padding="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            The Polaris Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From discovery to closing, every step is designed for excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8">
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-polaris-blue text-white flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <Card hover padding="lg" className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-polaris-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500">{step.timeline}</p>
                </div>

                <p className="text-gray-700 mb-6">
                  {step.description}
                </p>

                <div>
                  <p className="font-semibold text-polaris-navy mb-3">What happens:</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="text-polaris-blue mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section background="sky" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden"
            >
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-polaris-navy pr-8">
                  {faq.question}
                </h3>
                <svg
                  className="w-6 h-6 text-polaris-blue flex-shrink-0 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
