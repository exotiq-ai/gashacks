'use client';

import React from 'react';
import Logo from '../Logo';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-polaris-navy/60 via-polaris-navy/50 to-polaris-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-polaris text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo variant="light" size="xl" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight tracking-tight">
          Find Your True North in
          <br />
          Luxury Real Estate
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
          AI-Powered Platform for Ultra-High-Net-Worth Transactions
        </p>

        {/* Value Proposition */}
        <p className="text-lg md:text-xl text-polaris-gold font-medium mb-10">
          Save an average of $1.8M per transaction
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
            variant="primary"
            size="lg"
          >
            Schedule Consultation
          </Button>
          <Button
            href="#how-it-works"
            variant="outline"
            size="lg"
          >
            How It Works
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
