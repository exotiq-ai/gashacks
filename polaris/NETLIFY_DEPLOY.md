# 🚀 Deploy POLARIS to Netlify - Quick Guide

Your POLARIS website is **ready to deploy to Netlify** in just a few minutes!

---

## ✅ Pre-Deployment Checklist

All of these are complete:
- ✅ Build tested successfully (`npm run build` works)
- ✅ All dependencies installed
- ✅ Netlify configuration file (`netlify.toml`) created
- ✅ Code committed and pushed to GitHub
- ✅ 40 files created (9 pages, 10+ components, full design system)

---

## 📋 Step-by-Step Deployment

### **Step 1: Sign Up for Netlify**

1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Click "Sign up" (top right)
3. Choose "GitHub" as your sign-in method
4. Authorize Netlify to access your GitHub account

---

### **Step 2: Import Your Project**

1. Once logged in, click **"Add new site"** → **"Import an existing project"**

2. Choose **"Deploy with GitHub"**

3. Authorize Netlify to access your repositories (if not already done)

4. Search for and select: **`exotiq-ai/gashacks`**

5. Select branch: **`claude/build-polaris-website-011CUe4J6nRennEzgjHvDnbf`**

---

### **Step 3: Configure Build Settings**

Netlify should auto-detect Next.js, but verify these settings:

```
Base directory: polaris
Build command: npm run build
Publish directory: .next
```

**Environment Variables** (optional for now):
```
NODE_VERSION = 22
```

Click **"Deploy site"**

---

### **Step 4: Wait for Build**

- Build typically takes 2-4 minutes
- You'll see logs in real-time
- Status will change from "Building" to "Published"

Once complete, you'll get a URL like: `https://polaris-abc123.netlify.app`

---

### **Step 5: Test Your Site**

1. Click on the generated URL
2. Test all pages:
   - Homepage (with savings calculator)
   - How It Works
   - Markets
   - About
   - Investors
   - Contact form
3. Test mobile responsiveness
4. Test navigation and all links

---

### **Step 6: Configure Custom Domain** (Optional)

1. In Netlify dashboard, go to **"Domain management"**

2. Click **"Add custom domain"**

3. Enter: `polaris.estate`

4. Netlify will provide DNS configuration:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

5. Update your domain's DNS settings with your registrar (GoDaddy, Namecheap, etc.)

6. Wait for DNS propagation (5 minutes - 48 hours, usually ~1 hour)

7. SSL certificate will be automatically provisioned by Netlify (free)

---

## 🔧 Troubleshooting

### **Build Fails**

If the build fails, check:

1. **Base directory is correct**: Should be `polaris` not root
2. **Node version**: Should be 22 or higher
3. **Build logs**: Look for specific error messages

**Common fixes:**
```bash
# If build fails, try adding this to Environment Variables:
NODE_VERSION = 22
```

### **Images Not Loading**

Unsplash images should load fine. If issues occur:
- Check browser console for CORS errors
- Verify image URLs in components
- Try clearing Netlify cache (Site settings → Build & deploy → Clear cache)

### **404 on Page Refresh**

This shouldn't happen with our `netlify.toml` configuration, but if it does:
- Verify `netlify.toml` is in the root of the `polaris` directory
- Check redirect rules are present

---

## 📊 Post-Deployment

### **1. Performance Check**

Run Lighthouse audit:
1. Open site in Chrome
2. Right-click → Inspect
3. Go to "Lighthouse" tab
4. Click "Analyze page load"
5. **Target scores: 95+ on all metrics**

### **2. Set Up Analytics** (Optional)

Add Google Analytics:
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. In Netlify dashboard: Site settings → Environment variables
4. Add: `NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX`
5. Redeploy site

### **3. Enable Form Submissions** (Future)

For contact form to actually send emails:
1. Sign up for [Resend](https://resend.com) or [SendGrid](https://sendgrid.com)
2. Create API key
3. Add environment variable: `RESEND_API_KEY`
4. Add backend API route (see DEPLOYMENT.md)

---

## 🔄 Continuous Deployment

**Automatic deployments are now enabled!**

Every time you push to your branch, Netlify will automatically:
1. Detect the change
2. Run build
3. Deploy new version
4. Send notification

To update your site:
```bash
# Make changes to code
git add .
git commit -m "Update homepage hero"
git push

# Netlify automatically deploys in 2-3 minutes
```

---

## 📱 Preview Deployments

Create a new branch for testing:
```bash
git checkout -b feature/new-section
# Make changes
git push origin feature/new-section

# Netlify creates preview URL:
# https://deploy-preview-123--polaris.netlify.app
```

---

## 🎯 Production Checklist

Before announcing your site:

- [ ] Test all 9 pages (Homepage, How It Works, Markets, About, Investors, Contact, Privacy, Terms, 404)
- [ ] Test on mobile devices (iOS Safari, Chrome)
- [ ] Test all links and CTAs
- [ ] Verify Calendly booking link works
- [ ] Test savings calculator
- [ ] Verify images load correctly
- [ ] Check Lighthouse scores (95+)
- [ ] Set up custom domain (polaris.estate)
- [ ] SSL certificate active (https://)
- [ ] Submit sitemap to Google Search Console
- [ ] Have attorney review Privacy Policy and Terms

---

## 🔐 Security Headers

Already configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

---

## 💰 Pricing

**Netlify Pricing:**
- **Free tier**: 100GB bandwidth/month, 300 build minutes
- **Pro tier ($19/mo)**: 400GB bandwidth, unlimited builds
- **Business tier ($99/mo)**: 1TB bandwidth, advanced features

**For POLARIS MVP:** Free tier is more than sufficient!

---

## 📞 Support

**Netlify Support:**
- Documentation: https://docs.netlify.com
- Community: https://answers.netlify.com
- Support: support@netlify.com (Pro+ plans)

**POLARIS Questions:**
- Email: founders@polaris.estate
- See: BUILD_SUMMARY.md for complete feature list

---

## 🎉 You're Live!

Once deployed:

1. **Share your site**: `https://polaris.estate` (or Netlify URL)
2. **Monitor analytics**: Check Netlify dashboard for traffic
3. **Gather feedback**: Test with early users
4. **Iterate**: Make improvements based on feedback

---

## 🚀 Next Steps

1. **Deploy to Netlify** (follow steps above)
2. **Test thoroughly** on mobile and desktop
3. **Configure custom domain** (polaris.estate)
4. **Set up Google Analytics** (optional)
5. **Legal review** (Privacy Policy, Terms of Service)
6. **Announce launch** 🎊

---

## 📊 Your Deployment URL

After deployment, your site will be at:
- **Temporary**: `https://polaris-[random].netlify.app`
- **Custom domain**: `https://polaris.estate` (after DNS setup)

---

**Ready to deploy?** Click "Add new site" in Netlify and follow the steps above!

**Find Your True North** 🧭

---

*Last updated: October 30, 2025*
