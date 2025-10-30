# 🧭 POLARIS

**AI-Powered Luxury Real Estate Platform for Ultra-High-Net-Worth Transactions**

Polaris is revolutionizing UHNW real estate with transparent $30K flat-fee pricing, AI-powered insights, and white-glove service. Save an average of $1.8M per transaction on properties valued $10M-$100M.

![Polaris](public/og-image.jpg)

---

## 🚀 Features

### **For UHNW Clients**
- **Transparent Pricing** - $30K flat fee on all transactions ($10M - $100M+ properties)
- **AI-Powered Valuation** - 90%+ accuracy using machine learning models
- **White-Glove Service** - Dedicated UHNW advisors, 24/7 concierge support
- **National Platform** - 15 premier luxury markets from Miami to Aspen
- **Portfolio Management** - Multi-property tracking and optimization
- **Average $1.8M Savings** - vs. traditional 5-6% commissions

### **For Investors**
- **$130B+ Market Opportunity** - Serving 71,600+ UHNW individuals
- **$5M Seed Round** - Launching Q1 2026 in Miami
- **AI-Native Platform** - Purpose-built for luxury real estate
- **Strong Unit Economics** - Transparent, predictable revenue model

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Inter (body), Playfair Display (headings)
- **Animation**: Framer Motion (future), CSS animations
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (recommended)

---

## 📦 Installation

### Prerequisites
- Node.js 22.x or higher
- npm or pnpm

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/exotiq-ai/gashacks.git
   cd gashacks/polaris
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
polaris/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── how-it-works/      # Process & FAQs page
│   ├── markets/           # 15 luxury markets page
│   ├── about/             # Mission & team page
│   ├── investors/         # Investor deck page
│   ├── contact/           # Contact form page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── not-found.tsx      # 404 error page
│
├── components/
│   ├── layout/            # Header, Footer, Navigation
│   ├── home/              # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── SavingsCalculator.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustSignals.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── Logo.tsx           # Custom POLARIS logo
│
├── public/
│   ├── robots.txt
│   └── sitemap.xml
│
├── tailwind.config.ts     # Custom design system
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies
```

---

## 🎨 Design System

### Colors
```css
/* Primary Brand */
--polaris-navy: #0a2540        /* Primary brand color */
--polaris-blue: #1a73e8        /* CTAs, links */
--polaris-gold: #c9a961        /* Luxury accents */
--polaris-sky: #e8f4f8         /* Backgrounds */
```

### Typography
- **Headings**: Playfair Display (serif, luxury)
- **Body**: Inter (sans-serif, modern)

### Spacing
- 8px base grid system
- Consistent padding and margins

---

## 📄 Pages Overview

### 1. **Homepage** (`/`)
- Hero with parallax background
- Problem section (Old Way vs Polaris Way)
- How It Works (3-column features)
- Interactive Savings Calculator
- Testimonials carousel
- Trust signals & stats
- Dual CTA (Buyers/Investors)

### 2. **How It Works** (`/how-it-works`)
- 5-step process timeline
- Technology features
- White-glove service details
- Comprehensive FAQs

### 3. **Markets** (`/markets`)
- 15 luxury market cards
- Expansion timeline (2026-2032)
- Market stats (UHNW population, avg property value)

### 4. **About** (`/about`)
- Company mission & values
- What sets Polaris apart
- Team placeholder
- Investor/advisor information

### 5. **Investors** (`/investors`)
- Market opportunity ($130B+)
- Why now (NAR settlement, AI maturity)
- Traction & momentum
- $5M seed round ask

### 6. **Contact** (`/contact`)
- Dual-tab form (Buyer/Seller vs Investor)
- Property location dropdown
- Value range selector
- Direct Calendly integration

### 7. **Privacy Policy** (`/privacy`)
- GDPR-compliant template
- Data collection & usage
- User rights

### 8. **Terms of Service** (`/terms`)
- Service description
- Fee structure ($30K flat)
- Liability disclaimers

### 9. **404 Error** (`/not-found`)
- Elegant branded error page
- Navigation back to key pages

---

## 🔗 Integrations

### **Calendly** (Consultation Booking)
- **URL**: https://calendly.com/hello-exotiq/30min
- Integrated as direct link and embedded widget
- Used on Homepage, Contact page, and CTAs

### **Google Analytics 4** (Future)
```typescript
// Add to app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### **Form Handling** (Future)
- Contact form submissions
- Email notifications to `founders@polaris.estate`
- Consider: Resend, SendGrid, or Supabase

---

## 🚢 Deployment

### **Vercel (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Polaris website"
   git push
   ```

2. **Deploy to Vercel**
   - Connect GitHub repository
   - Set environment variables (if any)
   - Deploy automatically

3. **Custom Domain**
   - Add `polaris.estate` in Vercel settings
   - Configure DNS records (provided by Vercel)

### **Environment Variables**
```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX    # Google Analytics (future)
```

---

## ✅ Pre-Launch Checklist

### Content
- [ ] All copy proofread (no typos)
- [ ] Value props clear and compelling
- [ ] CTAs prominent on every page
- [ ] Contact information accurate

### Design
- [ ] Logo looks perfect at all sizes
- [ ] Colors consistent across site
- [ ] Typography hierarchy clear
- [ ] Spacing consistent (8px grid)

### Functionality
- [ ] All pages load without errors
- [ ] Navigation works (desktop + mobile)
- [ ] Forms submit successfully
- [ ] Calendly integration functional
- [ ] Calculator calculates correctly
- [ ] All links go to correct destinations

### Performance
- [ ] Lighthouse score 95+ (all pages)
- [ ] Images optimized (WebP, proper sizes)
- [ ] No console errors

### SEO
- [ ] Meta tags on every page
- [ ] Open Graph images set
- [ ] Sitemap generated
- [ ] Robots.txt configured

### Legal
- [ ] Privacy Policy present (attorney review recommended)
- [ ] Terms of Service present (attorney review recommended)

---

## 🎯 Success Metrics

### Performance Targets
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **LCP (Largest Contentful Paint)**: <1.2s
- **CLS (Cumulative Layout Shift)**: <0.1
- **Time to Interactive**: <2s

### User Behavior Targets
- **Consultation Booking Rate**: >5% of visitors
- **Investor Inquiry Rate**: >2% of /investors visitors
- **Time on Site**: >3 minutes
- **Bounce Rate**: <40%

---

## 📧 Contact & Support

- **Email**: founders@polaris.estate
- **Website**: polaris.estate
- **Project**: Exotiq Inc.

---

## 📝 License

Copyright © 2025 Polaris. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is strictly prohibited.

---

## 🙏 Acknowledgments

Built with ❤️ by world-class developers for the ultra-wealthy.

**Powered by:**
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Fonts](https://fonts.google.com/) - Typography
- [Unsplash](https://unsplash.com/) - Stock photography

---

**POLARIS v1.0** - Find Your True North 🧭
