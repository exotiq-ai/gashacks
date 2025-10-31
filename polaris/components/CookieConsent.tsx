'use client';

import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('polaris-cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (e) {
        console.error('Failed to parse cookie preferences:', e);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('polaris-cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('polaris-cookie-consent-date', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Initialize analytics if accepted
    if (prefs.analytics) {
      initializeAnalytics();
    }
  };

  const acceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  const initializeAnalytics = () => {
    // Placeholder for Google Analytics 4 initialization
    // Will be implemented when GA4 is set up
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 border-polaris-blue shadow-2xl animate-slide-up">
        <div className="container-polaris max-w-6xl mx-auto">
          {!showSettings ? (
            // Simple Banner
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-polaris-navy mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We use essential cookies to make our site work and optional cookies to understand how you use our site and improve your experience. You can customize your preferences or accept all cookies.{' '}
                  <a href="/privacy#cookies" className="text-polaris-blue hover:underline font-medium">
                    Learn more
                  </a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 text-sm font-semibold text-polaris-navy border-2 border-gray-300 rounded-lg hover:border-polaris-blue hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  Customize
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="px-6 py-3 text-sm font-semibold text-polaris-navy border-2 border-gray-300 rounded-lg hover:border-polaris-blue hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 text-sm font-semibold text-white bg-polaris-blue rounded-lg hover:bg-polaris-blue-dark transition-all shadow-md whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-polaris-navy">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close settings"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-polaris-navy">Essential Cookies</h4>
                      <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded">
                        Always Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Required for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="mt-1 w-5 h-5 text-polaris-blue rounded focus:ring-2 focus:ring-polaris-blue opacity-50 cursor-not-allowed"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-polaris-navy mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics 4.
                    </p>
                    <p className="text-xs text-gray-500">
                      Cookies used: _ga, _ga_*, _gid (Google Analytics)
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="mt-1 w-5 h-5 text-polaris-blue rounded focus:ring-2 focus:ring-polaris-blue cursor-pointer"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-polaris-navy mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Track your browsing habits to enable us to show advertising more relevant to you and your interests. May be set through our site by advertising partners.
                    </p>
                    <p className="text-xs text-gray-500">
                      Currently not in use. Will be enabled when advertising campaigns launch.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="mt-1 w-5 h-5 text-polaris-blue rounded focus:ring-2 focus:ring-polaris-blue cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-polaris-navy border-2 border-gray-300 rounded-lg hover:border-polaris-blue hover:bg-gray-50 transition-all"
                >
                  Reject All
                </button>
                <button
                  onClick={saveCustom}
                  className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-polaris-blue rounded-lg hover:bg-polaris-blue-dark transition-all shadow-md"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setShowSettings(false)}
        />
      )}
    </>
  );
};

export default CookieConsent;
