import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Privacy Policy | Polaris',
  description: 'Polaris Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Header />

      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-playfair font-bold text-polaris-navy mb-8">Privacy Policy</h1>

          <p className="text-sm text-gray-500 mb-8">Last Updated: January 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Polaris ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information (email, phone, address)</li>
            <li>Property information and preferences</li>
            <li>Financial information for transaction processing</li>
            <li>Communications with our team</li>
          </ul>

          <p>We also automatically collect certain information when you use our website:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages viewed and time spent</li>
            <li>IP address and device information</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about properties and transactions</li>
            <li>Process payments and manage accounts</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers and business partners</li>
            <li>Legal and regulatory authorities when required</li>
            <li>Professional advisors (attorneys, CPAs) with your consent</li>
          </ul>

          <p>We do not sell your personal information to third parties.</p>

          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including encryption, access controls, and secure servers. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to certain data processing activities</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our website.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or to exercise your rights, contact us at:{' '}
            <a href="mailto:privacy@polaris.estate" className="text-polaris-blue hover:underline">
              privacy@polaris.estate
            </a>
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This is a template privacy policy. Before launching, have this reviewed and customized by a qualified attorney to ensure compliance with applicable laws including GDPR, CCPA, and other privacy regulations.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
