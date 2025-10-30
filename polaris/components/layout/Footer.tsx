'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/markets', label: 'Markets' },
      { href: '/#calculator', label: 'Savings Calculator' },
    ],
    company: [
      { href: '/about', label: 'About' },
      { href: '/investors', label: 'Investors' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  };

  return (
    <footer className="bg-polaris-navy text-white">
      <div className="container-polaris">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Tagline */}
          <div className="col-span-1">
            <Logo variant="light" size="md" className="mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered luxury real estate platform for ultra-high-net-worth transactions.
            </p>
            <p className="text-polaris-gold text-sm mt-4 font-medium">
              Find Your True North
            </p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-polaris-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-polaris-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-polaris-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-polaris-navy-light py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Polaris. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:founders@polaris.estate"
                className="text-gray-400 hover:text-polaris-blue transition-colors text-sm"
              >
                founders@polaris.estate
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
