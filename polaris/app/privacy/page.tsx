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

          <h2 id="cookies">7. Cookies and Tracking Technologies</h2>
          <p>
            Polaris uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand how you interact with our platform. Cookies are small text files stored on your device that help us remember your preferences and improve our services.
          </p>

          <h3>Types of Cookies We Use:</h3>

          <h4>Essential Cookies (Always Active)</h4>
          <p>
            These cookies are strictly necessary for the website to function and cannot be disabled in our systems. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you've requested cannot be provided.
          </p>
          <ul>
            <li><strong>Session cookies:</strong> Maintain your session as you navigate the site</li>
            <li><strong>Security cookies:</strong> Authenticate users and prevent fraudulent use</li>
            <li><strong>Preference cookies:</strong> Remember your cookie consent choices</li>
          </ul>

          <h4>Analytics Cookies (Optional)</h4>
          <p>
            We use Google Analytics 4 to understand how visitors interact with our website. This helps us improve our content, design, and services. These cookies collect information anonymously and report website trends without identifying individual visitors.
          </p>
          <ul>
            <li><strong>_ga:</strong> Distinguishes unique users (expires in 2 years)</li>
            <li><strong>_ga_*:</strong> Maintains session state (expires in 2 years)</li>
            <li><strong>_gid:</strong> Distinguishes users (expires in 24 hours)</li>
          </ul>

          <h4>Marketing Cookies (Optional - Not Currently Active)</h4>
          <p>
            Marketing cookies may be set through our site by advertising partners in the future. They build a profile of your interests and show you relevant ads on other sites. These cookies are not currently in use but may be enabled when we launch advertising campaigns.
          </p>

          <h3>Managing Your Cookie Preferences:</h3>
          <p>
            You can manage your cookie preferences at any time through:
          </p>
          <ul>
            <li><strong>Our Cookie Banner:</strong> On your first visit, you'll see a cookie consent banner where you can accept all, reject non-essential, or customize your preferences</li>
            <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. However, disabling essential cookies may impact site functionality</li>
            <li><strong>Opt-Out Tools:</strong> For Google Analytics, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-polaris-blue hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
          </ul>

          <h3>Third-Party Cookies:</h3>
          <p>
            We may allow select third-party services to set cookies through our website:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Website analytics and performance measurement</li>
            <li><strong>Calendly:</strong> Scheduling consultation appointments (embedded widget)</li>
          </ul>

          <h3>Cookie Retention:</h3>
          <p>
            Cookies have different lifespans. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them manually. Analytics cookies typically expire after 2 years.
          </p>

          <h3>Updates to Cookie Usage:</h3>
          <p>
            We may update our use of cookies from time to time. Any changes will be reflected in this Privacy Policy with an updated "Last Updated" date. We encourage you to review this section periodically.
          </p>

          <p className="mt-4 p-4 bg-polaris-sky rounded-lg">
            <strong>Your Control:</strong> You can withdraw your consent to optional cookies at any time by clearing your browser cookies and adjusting preferences in our cookie banner when you revisit the site.
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
