# 🚀 POLARIS Deployment Guide

This guide covers deploying the Polaris website to production.

---

## 📋 Pre-Deployment Checklist

### 1. Content Review
- [ ] All copy proofread for typos and grammar
- [ ] Value propositions clear and compelling
- [ ] Contact email correct: `founders@polaris.estate`
- [ ] Calendly link working: https://calendly.com/hello-exotiq/30min
- [ ] All images optimized (WebP format, appropriate sizes)

### 2. Functionality Testing
- [ ] All pages load without errors
- [ ] Navigation works on desktop and mobile
- [ ] Mobile menu opens/closes properly
- [ ] Forms validate correctly
- [ ] Savings calculator computes accurately
- [ ] Testimonials carousel auto-advances
- [ ] All links lead to correct destinations

### 3. Performance
- [ ] Run Lighthouse audit (target 95+ on all metrics)
- [ ] Check Core Web Vitals (LCP <1.2s, CLS <0.1)
- [ ] Verify no console errors
- [ ] Test page load speed on 3G/4G

### 4. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest) - especially iOS Safari
- [ ] Firefox (latest)
- [ ] Edge (latest)

### 5. Legal
- [ ] Privacy Policy reviewed by attorney
- [ ] Terms of Service reviewed by attorney
- [ ] Cookie consent (if collecting analytics)

---

## 🌐 Deployment Options

### **Option 1: Vercel (Recommended)**

Vercel is the easiest and fastest deployment option for Next.js applications.

#### **Steps:**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for production deployment"
   git push origin main
   ```

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

3. **Import Project**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

4. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: npm run build (or pnpm build)
   Output Directory: .next (auto-detected)
   Install Command: npm install (or pnpm install)
   ```

5. **Environment Variables**
   Add any required environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (if using Google Analytics)
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - You'll get a URL: `your-project.vercel.app`

7. **Custom Domain**
   - In Vercel dashboard, go to "Domains"
   - Add `polaris.estate`
   - Follow DNS configuration instructions:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - SSL certificate will be automatically provisioned

#### **Vercel Advantages:**
- ✅ Automatic deployments on git push
- ✅ Preview deployments for branches
- ✅ Free SSL certificate
- ✅ CDN + edge network globally
- ✅ Zero-config Next.js optimization
- ✅ Analytics built-in
- ✅ Generous free tier

---

### **Option 2: Netlify**

Another excellent option with similar features to Vercel.

#### **Steps:**

1. **Push to GitHub** (same as above)

2. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository

4. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

5. **Deploy & Configure Domain** (similar to Vercel)

---

### **Option 3: AWS Amplify**

For AWS ecosystem integration.

#### **Steps:**

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   amplify add hosting
   ```

3. **Deploy**
   ```bash
   amplify publish
   ```

---

### **Option 4: Self-Hosted (VPS/Docker)**

For full control, deploy to your own server.

#### **Prerequisites:**
- Ubuntu/Debian VPS (DigitalOcean, Linode, AWS EC2)
- Node.js 22+ installed
- Nginx or Apache
- SSL certificate (Let's Encrypt)

#### **Steps:**

1. **Build the Application**
   ```bash
   npm run build
   npm run start  # Production server on port 3000
   ```

2. **Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start npm --name "polaris" -- start
   pm2 save
   pm2 startup
   ```

3. **Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name polaris.estate www.polaris.estate;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d polaris.estate -d www.polaris.estate
   ```

---

## 🔧 Post-Deployment Tasks

### 1. **Domain Setup**
- [ ] DNS records configured (A, CNAME)
- [ ] SSL certificate active (https://)
- [ ] www redirect working
- [ ] Verify email: founders@polaris.estate

### 2. **Analytics Setup**
- [ ] Google Analytics 4 installed
- [ ] Google Search Console verified
- [ ] Event tracking configured (button clicks, form submissions)

### 3. **SEO**
- [ ] Submit sitemap to Google Search Console
   - URL: `https://polaris.estate/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify robots.txt accessible
- [ ] Test social sharing (Twitter, LinkedIn)
   - Check Open Graph images display correctly

### 4. **Monitoring**
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry, if needed)
- [ ] Performance monitoring (Vercel Analytics or similar)

### 5. **Email Setup**
- [ ] founders@polaris.estate configured
- [ ] Test form submissions send emails
- [ ] Set up auto-responders (optional)

---

## 🎯 Performance Optimization

### **Image Optimization**
```bash
# Convert images to WebP
npm install -g sharp-cli
sharp -i input.jpg -o output.webp --webp
```

### **Lighthouse Audit**
```bash
# Run Lighthouse via CLI
npm install -g lighthouse
lighthouse https://polaris.estate --view
```

**Target Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### **Core Web Vitals Targets:**
- **LCP (Largest Contentful Paint)**: <1.2s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

---

## 🐛 Troubleshooting

### **Build Fails**
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### **Images Not Loading**
- Check Next.js `next.config.js` allows image domains
- Verify images exist in `/public` directory
- Check browser console for 404 errors

### **Fonts Not Loading**
- Verify Google Fonts import in `app/layout.tsx`
- Check network tab in DevTools
- Clear browser cache

### **Mobile Menu Not Working**
- Check JavaScript enabled
- Verify no console errors
- Test in different browsers/devices

---

## 🔄 Continuous Deployment

### **Automatic Deployments (Vercel/Netlify)**

Once configured, every push to `main` branch automatically deploys:

```bash
# Make changes
git add .
git commit -m "Update homepage hero"
git push origin main

# Vercel/Netlify detects push and deploys automatically
# Check deployment status in dashboard
```

### **Preview Deployments**

Create a new branch for testing:
```bash
git checkout -b feature/new-section
# Make changes
git push origin feature/new-section

# Vercel creates preview URL:
# https://polaris-abc123.vercel.app
```

---

## 📊 Analytics & Tracking

### **Google Analytics 4 Setup**

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)

2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. Install package:
   ```bash
   npm install @next/third-parties
   ```

4. Add to `app/layout.tsx`:
   ```typescript
   import { GoogleAnalytics } from '@next/third-parties/google'

   <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
   ```

5. **Events to Track:**
   - Schedule Consultation button clicks
   - Investor Inquiry clicks
   - Form submissions
   - Calculator interactions
   - Page views by section

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (SSL certificate)
- [ ] Environment variables properly secured
- [ ] No sensitive data in client-side code
- [ ] Content Security Policy configured (optional)
- [ ] Rate limiting on forms (prevent spam)
- [ ] CORS configured if using API routes
- [ ] Regular dependency updates (`npm audit`)

---

## 📞 Support & Maintenance

### **Regular Updates**
- Update dependencies monthly: `npm update`
- Check for Next.js updates: `npm outdated`
- Review analytics and user behavior
- Update testimonials as they come in
- Refresh market data quarterly

### **Backup Strategy**
- Git repository is your source of truth
- Vercel/Netlify maintain deployment history
- Consider database backups if adding backend

### **Contact**
For deployment issues or questions:
- **Email**: founders@polaris.estate
- **Hosting Support**: Vercel/Netlify support channels

---

## 🎉 Launch Day Checklist

### **Morning of Launch:**
1. Final Lighthouse audit (95+ scores)
2. Test all forms one more time
3. Verify Calendly link works
4. Check all pages on mobile and desktop
5. Clear cache and test as new visitor
6. Screenshot homepage for social sharing

### **Launch:**
1. Deploy to production
2. Verify custom domain works (https://polaris.estate)
3. Test from different devices/networks
4. Monitor analytics in real-time
5. Watch for errors in Vercel dashboard

### **Post-Launch:**
1. Announce on social media (if applicable)
2. Email early supporters/investors
3. Submit to startup directories
4. Monitor uptime and performance
5. Gather feedback from first visitors

---

## 🚀 You're Ready!

The Polaris website is built to world-class standards. Deploy with confidence.

**Next Steps:**
1. Choose deployment platform (Vercel recommended)
2. Configure custom domain
3. Set up analytics
4. Launch!

**Questions?** Contact: founders@polaris.estate

**Find Your True North** 🧭
