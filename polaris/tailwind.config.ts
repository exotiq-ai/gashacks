import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'polaris-navy-dark': '#0a1628',
        'polaris-navy': '#0a2540',
        'polaris-navy-light': '#1a3a5f',
        'polaris-blue-dark': '#0d5bbd',
        'polaris-blue': '#1a73e8',
        'polaris-blue-light': '#4a90e2',
        'polaris-sky': '#e8f4f8',
        'polaris-sky-light': '#f5fafc',
        // Luxury Accents
        'polaris-gold': '#c9a961',
        'polaris-gold-light': '#d4b978',
        // Semantic Colors
        'polaris-success': '#00c48c',
        'polaris-success-light': '#e6f9f5',
        'polaris-warning': '#ffa726',
        'polaris-warning-light': '#fff4e6',
        'polaris-error': '#ef4444',
        'polaris-error-light': '#fee2e2',
        'polaris-info': '#3b82f6',
        'polaris-info-light': '#dbeafe',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'blue': '0 8px 16px rgba(26, 115, 232, 0.2)',
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'wider': '0.025em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
