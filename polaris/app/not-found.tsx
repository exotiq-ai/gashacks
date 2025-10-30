import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-polaris-navy to-polaris-navy-dark flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo variant="light" size="lg" />
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-white/20">404</div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          Lost Your Way?
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8">
          This page doesn't exist, but we can help you find your true north.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Return Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/how-it-works" className="text-polaris-blue hover:text-polaris-blue-light transition-colors">
              How It Works
            </Link>
            <Link href="/markets" className="text-polaris-blue hover:text-polaris-blue-light transition-colors">
              Markets
            </Link>
            <Link href="/about" className="text-polaris-blue hover:text-polaris-blue-light transition-colors">
              About
            </Link>
            <Link href="/investors" className="text-polaris-blue hover:text-polaris-blue-light transition-colors">
              Investors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
