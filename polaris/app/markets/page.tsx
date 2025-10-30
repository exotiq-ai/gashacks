import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Markets | Polaris Real Estate',
  description: 'Polaris serves 15 premier luxury real estate markets across the United States. From Miami to Aspen to the Hamptons—we\'re where you are.',
};

export default function Markets() {
  const markets = [
    {
      name: 'Miami / Palm Beach, FL',
      uhnw: '13,200',
      avgValue: '$20M',
      status: 'Launching Q1 2026',
      image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=2070',
    },
    {
      name: 'Naples, FL',
      uhnw: '2,800',
      avgValue: '$15M',
      status: 'Launching Q4 2027',
      image: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070',
    },
    {
      name: 'Aspen / Vail, CO',
      uhnw: '3,400',
      avgValue: '$25M',
      status: 'Launching Q1 2028',
      image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2070',
    },
    {
      name: 'New York / Hamptons, NY',
      uhnw: '18,500',
      avgValue: '$30M',
      status: 'Launching Q2 2028',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070',
    },
    {
      name: 'Jackson Hole, WY',
      uhnw: '1,200',
      avgValue: '$18M',
      status: 'Launching Q3 2028',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
    },
    {
      name: 'Los Angeles / Malibu, CA',
      uhnw: '12,800',
      avgValue: '$28M',
      status: 'Launching Q1 2029',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2074',
    },
    {
      name: 'San Francisco Bay Area, CA',
      uhnw: '9,600',
      avgValue: '$22M',
      status: 'Launching Q2 2029',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070',
    },
    {
      name: 'Scottsdale / Paradise Valley, AZ',
      uhnw: '4,200',
      avgValue: '$12M',
      status: 'Launching Q4 2029',
      image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070',
    },
    {
      name: 'Seattle / Bellevue, WA',
      uhnw: '5,100',
      avgValue: '$16M',
      status: 'Launching Q2 2030',
      image: 'https://images.unsplash.com/photo-1555084189-e8e4c9d0ec35?q=80&w=2070',
    },
    {
      name: 'Park City, UT',
      uhnw: '1,800',
      avgValue: '$14M',
      status: 'Launching Q3 2030',
      image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2070',
    },
    {
      name: 'Austin, TX',
      uhnw: '3,900',
      avgValue: '$13M',
      status: 'Launching Q1 2031',
      image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=2071',
    },
    {
      name: 'Boston / Cape Cod, MA',
      uhnw: '6,400',
      avgValue: '$19M',
      status: 'Launching Q2 2031',
      image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070',
    },
    {
      name: 'Santa Barbara, CA',
      uhnw: '2,100',
      avgValue: '$17M',
      status: 'Launching Q3 2031',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2072',
    },
    {
      name: 'Charleston, SC',
      uhnw: '1,600',
      avgValue: '$11M',
      status: 'Launching Q1 2032',
      image: 'https://images.unsplash.com/photo-1608127030589-e787281fb0ec?q=80&w=2070',
    },
    {
      name: 'Lake Tahoe, CA/NV',
      uhnw: '2,300',
      avgValue: '$16M',
      status: 'Launching Q2 2032',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070',
    },
  ];

  const timeline = [
    { year: '2026', phase: 'Phase 1', description: 'Miami Launch', markets: '1 Market' },
    { year: '2027', phase: 'Phase 2', description: 'FL + CO Expansion', markets: '3 Markets' },
    { year: '2028', phase: 'Phase 3', description: 'Major Metros', markets: '8 Markets' },
    { year: '2029', phase: 'Phase 4', description: 'Regional Coverage', markets: '13 Markets' },
    { year: '2030+', phase: 'Phase 5', description: 'National Platform', markets: '15+ Markets' },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Luxury Markets. National Reach.
          </h1>
          <p className="text-xl text-gray-300">
            From Miami to Aspen to the Hamptons—we're where you are
          </p>
        </div>
      </Section>

      {/* Markets Grid */}
      <Section background="white" padding="lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <Card key={index} hover padding="lg" className="group">
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${market.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-polaris-navy mb-3">
                {market.name}
              </h3>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">UHNW Residents</span>
                  <span className="font-semibold text-polaris-navy">{market.uhnw}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg Property Value</span>
                  <span className="font-semibold text-polaris-navy">{market.avgValue}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className={`
                inline-block px-3 py-1 rounded-full text-xs font-medium
                ${market.status.includes('Q1 2026') || market.status.includes('Q4 2027')
                  ? 'bg-polaris-blue/10 text-polaris-blue'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {market.status}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expansion Timeline */}
      <Section background="sky" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-polaris-navy mb-4">
            Built for National Scale from Day 1
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From inception, Polaris is designed as a national platform. Our technology scales seamlessly,
            allowing us to serve UHNW clients across all premier markets in the United States.
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-polaris-blue/20" />

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-polaris-blue text-white flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <p className="font-semibold text-polaris-navy mb-1">{item.phase}</p>
                    <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                    <p className="text-xs text-polaris-blue font-medium">{item.markets}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
