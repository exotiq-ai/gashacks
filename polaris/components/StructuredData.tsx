import React from 'react';

interface StructuredDataProps {
  type?: 'organization' | 'webpage' | 'faq';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
  let schemaData;

  if (type === 'organization') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Polaris Real Estate",
      "alternateName": "Polaris Estate",
      "url": "https://polaris.estate",
      "logo": "https://polaris.estate/logo.svg",
      "description": "AI-powered luxury real estate platform for ultra-high-net-worth individuals. Transparent tiered pricing ($35K-$150K) with 94-99% savings vs traditional commissions.",
      "sameAs": [
        "https://linkedin.com/company/polaris-estate",
        "https://twitter.com/polarisestate"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-888-POLARIS",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": ["en"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "priceRange": "$35,000-$150,000",
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Essential Tier Real Estate Services",
            "description": "Core white-glove service for $10M-$25M properties",
            "price": "35000",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premier Tier Real Estate Services",
            "description": "Enhanced international marketing for $25M-$75M properties",
            "price": "75000",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite Tier Real Estate Services",
            "description": "Ultimate discretion & dedicated team for $75M+ properties",
            "price": "150000",
            "priceCurrency": "USD"
          }
        }
      ],
      "areaServed": [
        "Miami, FL",
        "Naples, FL",
        "Aspen, CO",
        "New York, NY",
        "Jackson Hole, WY",
        "Los Angeles, CA",
        "San Francisco, CA",
        "Scottsdale, AZ",
        "Seattle, WA",
        "Park City, UT",
        "Austin, TX",
        "Boston, MA",
        "Santa Barbara, CA",
        "Charleston, SC",
        "Lake Tahoe, CA"
      ]
    };
  } else if (type === 'faq' && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === 'webpage' && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": data.title,
      "description": data.description,
      "url": data.url
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
