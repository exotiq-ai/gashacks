import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Pricing | Polaris Real Estate',
  description: 'Transparent tiered pricing for luxury real estate. Transaction fees from $35K-$150K (save 94-99% vs. traditional). Portfolio Management from $200K/year.',
};

export default function Pricing() {
  const transactionTiers = [
    {
      name: 'Essential',
      price: '$35,000',
      propertyRange: '$10M - $25M',
      savings: '$515K - $1.34M',
      savingsPercent: '94-97%',
      traditional: '$550K - $1.38M',
      description: 'Core white-glove service for luxury properties',
      color: 'border-polaris-blue',
      features: [
        'Dedicated UHNW advisor',
        'AI-powered valuation & pricing strategy',
        'Professional photography (up to 50 photos)',
        'MLS listing + syndication',
        'Listing website & marketing materials',
        'Qualified buyer coordination',
        'Document automation & transaction management',
        'Standard closing support',
        '30-day post-close support',
      ],
      bestFor: '$10M-$25M properties, domestic buyers, standard timeline',
    },
    {
      name: 'Premier',
      price: '$75,000',
      propertyRange: '$25M - $75M',
      savings: '$1.30M - $4.05M',
      savingsPercent: '95-98%',
      traditional: '$1.38M - $4.13M',
      description: 'Enhanced services for sophisticated properties',
      color: 'border-blue-600',
      popular: true,
      features: [
        'Everything in Essential, PLUS:',
        'Premium photography (unlimited, drone, twilight)',
        'Cinematic video tour (2-3 min professional production)',
        'Virtual staging (if needed)',
        'Targeted marketing campaign (paid ads, luxury PR)',
        'International buyer coordination',
        'Private events (broker previews, VIP showings)',
        '24/7 concierge support',
        'Complex entity structuring (trusts, LLCs, 1031)',
        'Attorney coordination',
        '90-day post-close support',
      ],
      bestFor: '$25M-$75M properties, international buyers, complex transactions',
    },
    {
      name: 'Elite',
      price: '$150,000',
      propertyRange: '$75M+',
      savings: '$3.98M+',
      savingsPercent: '97-99%',
      traditional: '$4.13M+',
      description: 'Ultimate white-glove experience for iconic estates',
      color: 'border-gray-900',
      features: [
        'Everything in Premier, PLUS:',
        'Exclusive media representation (WSJ, Bloomberg, Robb Report)',
        'Custom marketing microsite',
        'Architectural video (5-10 min cinematic masterpiece)',
        '3D virtual tour (Matterport)',
        'Global luxury networks (Christie\'s, Sotheby\'s)',
        'White-glove showings (private jet coordination)',
        'Maximum privacy protocols (NDAs, off-market options)',
        'Family office coordination',
        'Post-sale concierge (moving, property management)',
        'Lifetime portfolio advisor',
        'Dedicated specialist team',
      ],
      bestFor: '$75M+ properties, maximum discretion, global buyers, iconic properties',
    },
  ];

  const portfolioTiers = [
    {
      name: 'Essential',
      price: '$200,000',
      monthly: '$16,667',
      properties: '4-6 properties',
      color: 'border-polaris-blue',
      features: [
        'AI-powered portfolio dashboard',
        'Real-time valuations',
        'Dedicated portfolio advisor',
        'Quarterly strategic reviews',
        'Proactive optimization',
        '10-14% transaction discount',
        'White-glove concierge',
        '24-hour response time',
      ],
      roi: 'Typical ROI: $1.5M+ in Year 1',
    },
    {
      name: 'Premier',
      price: '$350,000',
      monthly: '$29,167',
      properties: '7-10 properties',
      color: 'border-blue-600',
      popular: true,
      features: [
        'Everything in Essential, PLUS:',
        'Enhanced platform (predictive analytics, benchmarking)',
        'Monthly check-ins',
        'Dedicated analyst support',
        'Semi-annual in-person meetings',
        'Advanced services (estate planning, trust structuring)',
        '20-27% transaction discount',
        'Same-day response guarantee',
      ],
      roi: 'Typical ROI: $2.5M+ in Year 1',
    },
    {
      name: 'Elite',
      price: '$500,000',
      monthly: '$41,667',
      properties: '11+ properties',
      color: 'border-gray-900',
      features: [
        'Everything in Premier, PLUS:',
        'Dedicated team (advisor + associate + analyst + concierge)',
        'Weekly touchpoints + 24/7 direct access',
        'Quarterly in-person meetings',
        'Institutional-grade services',
        '$100K flat per transaction (any value)',
        'White-glove everything included',
        'Immediate response',
      ],
      roi: 'Service pays for itself with 2-3 transactions/year',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Intelligent Pricing. Massive Savings.
          </h1>
          <p className="text-xl text-gray-300">
            Tiered fees based on property value. 94-99% savings vs. traditional commissions.
          </p>
        </div>
      </Section>

      {/* Transaction Pricing */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            Transaction Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three service tiers matched to your property value and complexity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {transactionTiers.map((tier, index) => (
            <Card key={index} hover padding="lg" className={`border-2 ${tier.color} ${tier.popular ? 'ring-2 ring-polaris-blue' : ''} relative`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-polaris-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-bold text-polaris-navy mb-2 text-center">
                {tier.name}
              </h3>

              {/* Property Range */}
              <p className="text-gray-600 text-center mb-4">{tier.propertyRange}</p>

              {/* Price */}
              <div className="text-center mb-4">
                <p className="text-5xl font-bold text-polaris-blue mb-2">{tier.price}</p>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>

              {/* Savings */}
              <div className="bg-green-50 rounded-lg p-4 mb-6 text-center">
                <p className="text-sm text-gray-600">Your Savings</p>
                <p className="text-2xl font-bold text-green-600">{tier.savings}</p>
                <p className="text-xs text-gray-500">vs. traditional {tier.traditional}</p>
                <p className="text-sm font-semibold text-green-700 mt-1">{tier.savingsPercent} savings</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="font-semibold text-polaris-navy mb-3">What's Included:</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start text-sm ${feature.includes('PLUS') || feature.includes('Everything') ? 'font-semibold text-polaris-blue mt-3' : 'text-gray-600'}`}>
                      {!feature.includes('PLUS') && !feature.includes('Everything') && (
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-gray-500 mb-2">Best for:</p>
                <p className="text-sm text-gray-700">{tier.bestFor}</p>
              </div>

              {/* CTA */}
              <Button
                href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
                variant="primary"
                size="md"
                fullWidth
                className="mt-6"
              >
                Schedule Consultation
              </Button>
            </Card>
          ))}
        </div>

        {/* Example Savings */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-polaris-navy mb-6 text-center">Example Savings</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-polaris-navy mb-3">$20M Miami Estate</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditional (5.5%):</span>
                  <span className="font-semibold text-red-600">$1.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Polaris Essential:</span>
                  <span className="font-semibold text-polaris-blue">$35K</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">You Save:</span>
                  <span className="font-bold text-green-600">$1.06M (97%)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl ring-2 ring-polaris-blue">
              <p className="font-semibold text-polaris-navy mb-3">$50M Aspen Compound</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditional (5.5%):</span>
                  <span className="font-semibold text-red-600">$2.75M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Polaris Premier:</span>
                  <span className="font-semibold text-polaris-blue">$75K</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">You Save:</span>
                  <span className="font-bold text-green-600">$2.67M (97%)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-polaris-navy mb-3">$100M Hamptons Estate</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditional (5.5%):</span>
                  <span className="font-semibold text-red-600">$5.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Polaris Elite:</span>
                  <span className="font-semibold text-polaris-blue">$150K</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">You Save:</span>
                  <span className="font-bold text-green-600">$5.35M (97%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Management */}
      <Section background="sky" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            Portfolio Management
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your Personal Real Estate CFO - For UHNW clients with multiple luxury properties (4+)
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {portfolioTiers.map((tier, index) => (
            <Card key={index} hover padding="lg" className={`border-2 ${tier.color} ${tier.popular ? 'ring-2 ring-polaris-blue' : ''} relative`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-polaris-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-polaris-navy mb-2 text-center">
                Portfolio {tier.name}
              </h3>

              <p className="text-gray-600 text-center mb-4">{tier.properties}</p>

              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-polaris-blue mb-1">{tier.price}</p>
                <p className="text-sm text-gray-500">{tier.monthly}/month</p>
              </div>

              <div className="bg-green-50 rounded-lg p-3 mb-6 text-center">
                <p className="text-sm font-semibold text-green-700">{tier.roi}</p>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start text-sm ${feature.includes('PLUS') || feature.includes('Everything') ? 'font-semibold text-polaris-blue mt-3' : 'text-gray-600'}`}>
                      {!feature.includes('PLUS') && !feature.includes('Everything') && (
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                      )}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
                variant="primary"
                size="md"
                fullWidth
                className="mt-6"
              >
                Schedule Portfolio Consultation
              </Button>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-3xl font-bold text-polaris-blue">$1.5M+</p>
              <p className="text-sm text-gray-600">Typical Year 1 ROI</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-polaris-blue">90%+</p>
              <p className="text-sm text-gray-600">Client Retention Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-polaris-blue">$127M</p>
              <p className="text-sm text-gray-600">Avg Portfolio Value</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-8 text-center">
            Pricing Questions
          </h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg shadow-md overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-polaris-navy">
                  How do I know which tier is right for me?
                </h3>
                <svg className="w-6 h-6 text-polaris-blue transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Tiers are primarily based on property value, but we also consider complexity, buyer profile, and timeline. During your complimentary consultation, we'll recommend the right tier and explain exactly what's included. Most clients find the tier system intuitive once they see the service breakdown.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-md overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-polaris-navy">
                  Why tiered pricing instead of one flat fee?
                </h3>
                <svg className="w-6 h-6 text-polaris-blue transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Different properties require different levels of service. A $15M property with domestic buyers needs different marketing than a $100M estate targeting global buyers. Our tiered approach ensures you get exactly the service you need—no more, no less—while still saving 94-99% vs. traditional commissions.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-md overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-polaris-navy">
                  Can I combine Portfolio Management with transaction services?
                </h3>
                <svg className="w-6 h-6 text-polaris-blue transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Absolutely! Portfolio Management clients receive significant discounts on transactions: 10-14% (Essential), 20-27% (Premier), or $100K flat per transaction (Elite). For many clients, 2-3 transactions per year means the Portfolio Management service pays for itself through transaction savings alone.
                </p>
              </div>
            </details>

            <details className="group bg-white rounded-lg shadow-md overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-polaris-navy">
                  What if I only need help with one property right now?
                </h3>
                <svg className="w-6 h-6 text-polaris-blue transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Perfect! Our transaction tiers (Essential, Premier, Elite) are designed for individual property sales. Portfolio Management is only for clients with 4+ properties who want ongoing advisory services. You can start with a transaction and add Portfolio Management later if needed.
                </p>
              </div>
            </details>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="navy" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Save Millions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a complimentary consultation to discuss your property and determine the right service tier.
          </p>
          <Button
            href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
            variant="outline"
            size="lg"
          >
            Schedule Your Consultation
          </Button>
          <p className="text-sm text-gray-400 mt-6">
            No obligation. Just intelligent conversation about your real estate goals.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
