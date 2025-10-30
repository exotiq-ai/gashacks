'use client';

import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Saved $2.1M on our Aspen estate. The AI insights were remarkably accurate, and the white-glove service exceeded expectations. Polaris redefined what luxury real estate should be.",
      name: "Sarah M.",
      title: "Tech Executive, San Francisco",
      rating: 5,
    },
    {
      quote: "Finally, a platform that understands UHNW transactions. Portfolio management across our five properties is seamless. The combination of technology and expertise is unmatched.",
      name: "James R.",
      title: "Private Equity Partner, New York",
      rating: 5,
    },
    {
      quote: "The transparency and sophistication impressed us immediately. Our $45M Miami transaction was effortless, saving us nearly $2.5M in the process. Exceptional experience.",
      name: "Maria G.",
      title: "Family Office, Miami",
      rating: 5,
    },
    {
      quote: "As someone who appreciates innovation, Polaris is exactly what the luxury market needed. Smart technology, smarter people, incredible results.",
      name: "Robert K.",
      title: "Venture Capitalist, San Francisco",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Section background="gray" padding="lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-polaris-navy mb-4">
          Trusted by the World's Most Discerning Clients
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Testimonial Display */}
        <div className="relative">
          <Card padding="lg" className="min-h-[280px]">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-polaris-gold fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-polaris-navy text-lg">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[activeIndex].title}
                </p>
              </div>
            </blockquote>
          </Card>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === activeIndex
                  ? 'bg-polaris-blue w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
