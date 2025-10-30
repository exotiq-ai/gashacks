'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'buyer' | 'investor'>('buyer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    propertyValue: '',
    transactionType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with actual API endpoint later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        propertyValue: '',
        transactionType: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <Section background="navy" padding="xl">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Let's Navigate Your Journey Together
          </h1>
          <p className="text-xl text-gray-300">
            Whether buying, selling, or investing—we're here to guide you
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('buyer')}
              className={`
                flex-1 px-6 py-4 text-lg font-semibold transition-colors
                ${activeTab === 'buyer'
                  ? 'text-polaris-blue border-b-2 border-polaris-blue'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              I'm a Buyer/Seller
            </button>
            <button
              onClick={() => setActiveTab('investor')}
              className={`
                flex-1 px-6 py-4 text-lg font-semibold transition-colors
                ${activeTab === 'investor'
                  ? 'text-polaris-blue border-b-2 border-polaris-blue'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              I'm an Investor
            </button>
          </div>

          {/* Buyer/Seller Form */}
          {activeTab === 'buyer' && (
            <Card padding="lg">
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-polaris-navy mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll be in touch within 24 hours.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-6 text-polaris-blue hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    />
                  </div>

                  {/* Property Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Location *
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    >
                      <option value="">Select a market</option>
                      <option value="miami">Miami / Palm Beach, FL</option>
                      <option value="naples">Naples, FL</option>
                      <option value="aspen">Aspen / Vail, CO</option>
                      <option value="hamptons">New York / Hamptons, NY</option>
                      <option value="jackson">Jackson Hole, WY</option>
                      <option value="la">Los Angeles / Malibu, CA</option>
                      <option value="sf">San Francisco Bay Area, CA</option>
                      <option value="scottsdale">Scottsdale / Paradise Valley, AZ</option>
                      <option value="seattle">Seattle / Bellevue, WA</option>
                      <option value="park-city">Park City, UT</option>
                      <option value="austin">Austin, TX</option>
                      <option value="boston">Boston / Cape Cod, MA</option>
                      <option value="santa-barbara">Santa Barbara, CA</option>
                      <option value="charleston">Charleston, SC</option>
                      <option value="tahoe">Lake Tahoe, CA/NV</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Property Value Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Value Range *
                    </label>
                    <select
                      name="propertyValue"
                      value={formData.propertyValue}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="10-20m">$10M - $20M</option>
                      <option value="20-35m">$20M - $35M</option>
                      <option value="35-50m">$35M - $50M</option>
                      <option value="50-75m">$50M - $75M</option>
                      <option value="75-100m">$75M - $100M</option>
                      <option value="100m+">$100M+</option>
                    </select>
                  </div>

                  {/* Transaction Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction Type *
                    </label>
                    <select
                      name="transactionType"
                      value={formData.transactionType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      <option value="buying">Buying</option>
                      <option value="selling">Selling</option>
                      <option value="both">Both</option>
                      <option value="portfolio">Portfolio Management</option>
                      <option value="exploring">Just Exploring</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your goals..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                  </Button>

                  <p className="text-sm text-center text-gray-500">
                    Or book directly:{' '}
                    <a
                      href="https://calendly.com/hello-exotiq/30min?back=1&month=2025-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-polaris-blue hover:underline"
                    >
                      View calendar
                    </a>
                  </p>
                </form>
              )}
            </Card>
          )}

          {/* Investor Form */}
          {activeTab === 'investor' && (
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Similar structure but investor-focused */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Fund
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interest *
                  </label>
                  <select
                    name="investmentType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  >
                    <option value="">Select interest</option>
                    <option value="seed">Seed Round Participation</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="advisory">Advisory Role</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your interest in Polaris..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polaris-blue focus:border-transparent"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Request Information'}
                </Button>
              </form>
            </Card>
          )}

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-polaris-navy mb-4">Other Contact Methods</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:founders@polaris.estate" className="text-polaris-blue hover:underline">
                  founders@polaris.estate
                </a>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Website:</span> polaris.estate
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
