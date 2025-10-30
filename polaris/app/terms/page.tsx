import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Terms of Service | Polaris',
  description: 'Polaris Terms of Service - Legal terms and conditions for using our platform.',
};

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />

      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-playfair font-bold text-polaris-navy mb-8">Terms of Service</h1>

          <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Polaris's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Polaris provides an AI-powered real estate platform designed for ultra-high-net-worth individuals to facilitate property transactions. Our services include property valuation, market analysis, transaction coordination, and related advisory services.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not misuse or attempt to disrupt our services</li>
          </ul>

          <h2>4. Fees and Payment</h2>
          <p>
            Polaris charges a flat fee of $30,000 per transaction, regardless of property value. This fee covers all services outlined in your service agreement. Payment terms will be specified in your individual contract.
          </p>

          <h2>5. Professional Services</h2>
          <p>
            Polaris provides technology-enabled real estate services but does not replace the need for professional legal, tax, or financial advice. We recommend consulting with qualified professionals for your specific situation.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our platform are owned by Polaris and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without written permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Polaris shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid for the specific transaction in question.
          </p>

          <h2>8. Disclaimers</h2>
          <p>
            Our services are provided "as is" without warranties of any kind. While we strive for accuracy in our AI-powered valuations and market analysis, we do not guarantee specific outcomes or transaction results.
          </p>

          <h2>9. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
          </p>

          <h2>10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time for violation of these terms or for any other reason at our discretion.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We may modify these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of Florida, without regard to conflict of law principles.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            For questions about these Terms of Service, contact us at:{' '}
            <a href="mailto:legal@polaris.estate" className="text-polaris-blue hover:underline">
              legal@polaris.estate
            </a>
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This is a template terms of service. Before launching, have this reviewed and customized by a qualified attorney to ensure proper legal protection and compliance with applicable laws.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
