# ⛽ Gas Hacks

**Premium ethanol blend calculator for performance vehicles**

Calculate optimal E85 fuel blends with precision, track your tank history, and optimize your performance tune.

![Gas Hacks](client/public/icon-512.png)

---

## 🚀 Features

### Core Calculator
- **Real-time Blend Calculations** - Calculate E10, E30, E50, E85, and custom ethanol blends
- **Vehicle Database** - Pre-configured tank sizes for Audi, BMW, Porsche, Mercedes, and more
- **Cost Calculator** - Compare fuel blend expenses with real-time pricing
- **Visual Fuel Gauge** - See your current tank level and blend at a glance
- **Octane Rating Calculator** - Know exactly what octane you're running

### User Features
- **Tank History Tracking** - Save calculations to the cloud (requires free account)
- **Quick Presets** - Track Day (E85), Daily Driver (E30), Economy (E10), Winter (E20)
- **Dark/Light Theme** - Premium Daytona Grey aesthetic inspired by Audi S8
- **PWA Support** - Install on iOS/Android as a native app

### Safety & Legal
- **Safety Disclaimer** - Shows on first launch
- **Privacy Policy** - GDPR compliant
- **Terms of Service** - Clear usage terms
- **Account Deletion** - Full GDPR compliance with data deletion

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4
- **Backend**: Node.js, Express, tRPC 11
- **Database**: MySQL/TiDB with Drizzle ORM
- **Authentication**: Manus OAuth (email + name)
- **Deployment**: Progressive Web App + Capacitor for native iOS/Android

---

## 📦 Installation

### Prerequisites
- Node.js 22.x
- pnpm (recommended) or npm
- MySQL database (for production)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/exotiq-ai/gashacks.git
   cd gashacks
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Configure database connection and OAuth credentials
   - See `DEPLOYMENT_GUIDE.md` for details

4. **Push database schema**
   ```bash
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open in browser**
   - Navigate to `http://localhost:3000`

---

## 📱 Mobile Deployment

### Progressive Web App (PWA)
The app is already configured as a PWA. Users can install it directly from their mobile browser:
- **iOS**: Safari → Share → Add to Home Screen
- **Android**: Chrome → Menu → Install App

### Native iOS/Android Apps
See `DEPLOYMENT_GUIDE.md` for complete instructions on building native apps with Capacitor.

**Quick start:**
```bash
# Install Capacitor
pnpm add @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android

# Initialize
npx cap init "Gas Hacks" "com.exotiq.gashacks" --web-dir=client/dist

# Build web assets
cd client && pnpm build && cd ..

# Add platforms
npx cap add ios
npx cap add android

# Open in Xcode/Android Studio
npx cap open ios
npx cap open android
```

---

## 🎨 Design Philosophy

Gas Hacks combines the sleek aesthetic of Audi S8 with Porsche Design Studio principles:
- **Daytona Grey** color palette
- **Glass morphism** effects
- **Premium animations** and micro-interactions
- **Apple-level polish** throughout

---

## 📄 Documentation

- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment instructions for web and mobile
- **[MOBILE_BUILD_GUIDE.md](MOBILE_BUILD_GUIDE.md)** - Capacitor setup and native app builds
- **[PRIVACY_POLICY.md](PRIVACY_POLICY.md)** - Privacy policy for Exotiq Inc.
- **[TERMS_OF_SERVICE.md](TERMS_OF_SERVICE.md)** - Terms of service with safety disclaimers
- **[todo.md](todo.md)** - Project roadmap and feature tracking

---

## 🔒 Privacy & Security

- **No tracking** - We don't track your usage or sell your data
- **Local storage** - Preferences stored locally on your device
- **Cloud sync** - Tank history synced securely (opt-in with account)
- **Account deletion** - Full GDPR compliance with one-click account deletion

---

## ⚠️ Safety Disclaimer

**Gas Hacks is for informational purposes only.**

The fuel blend calculations provided by this app are **estimates** and should not be considered professional automotive advice. Improper fuel blending can cause:
- Engine damage
- Reduced performance
- Warranty violations
- Emissions violations
- Safety hazards

**Before modifying your vehicle:**
- Consult with a qualified automotive professional or tuner
- Understand the risks of alternative fuel blends
- Check your vehicle warranty terms
- Ensure your fuel system can handle ethanol

**Exotiq Inc. is not responsible for any damage to vehicles or injury resulting from use of this app. You assume all risks.**

---

## 📞 Support

- **Email**: hello@exotiq.ai
- **Website**: [exotiq.ai](https://exotiq.ai)
- **Issues**: [GitHub Issues](https://github.com/exotiq-ai/gashacks/issues)

---

## 📝 License

Copyright © 2025 Exotiq Inc. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

---

## 🙏 Acknowledgments

Built with ❤️ by automotive enthusiasts for enthusiasts.

**Powered by:**
- [Manus](https://manus.im) - Development platform
- [Radix UI](https://www.radix-ui.com/) - Component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [tRPC](https://trpc.io/) - Type-safe APIs

---

**Gas Hacks v11.0** - Unlock your engine's potential 🏁
