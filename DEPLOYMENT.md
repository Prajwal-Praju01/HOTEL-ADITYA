# Hotel Aditya - Deployment Guide

Complete guide for deploying the Hotel Aditya website to production.

## Pre-Deployment Checklist

### 1. Update Configuration

- [ ] Update domain in `app/layout.tsx` → `metadataBase`
- [ ] Update domain in `lib/schema.ts` → all URLs
- [ ] Update domain in `app/sitemap.ts`
- [ ] Add real Google Search Console verification code
- [ ] Add environment variables (if any)

### 2. Add Real Images

- [ ] Replace image placeholders in `public/images/`:
  - chicken-biryani.jpg
  - mutton-chops.jpg
  - chicken-lollipop.jpg
  - leg-soup.jpg
  - mutton-keema.jpg
  - boti-fry.jpg
  - og-image.jpg
  - twitter-image.jpg
  - restaurant-exterior.jpg

### 3. Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm run start
```

### 4. Verify Functionality

- [ ] All pages load correctly
- [ ] Click-to-call works
- [ ] WhatsApp links work
- [ ] Google Maps shows correct location
- [ ] Forms submit properly
- [ ] Mobile responsive on all devices
- [ ] SEO meta tags present
- [ ] Lighthouse score 95+

---

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built for Next.js
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Excellent performance

**Steps:**

1. **Push to GitHub**
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Hotel Aditya website"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/hotel-aditya.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import `hotel-aditya` repository
   - Configure:
     - **Framework**: Next.js (auto-detected)
     - **Root Directory**: `./`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
     - **Install Command**: `npm install`
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your domain (e.g., hoteladitya.in)
   - Follow DNS configuration instructions

5. **Post-Deployment**
   - Update URLs in code with production domain
   - Commit and push → auto-deploys

---

### Option 2: Netlify

1. **Build Configuration**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy**
   - Push code to GitHub
   - Visit [netlify.com](https://netlify.com)
   - New site from Git
   - Select repository
   - Build settings are auto-detected
   - Deploy

---

### Option 3: Railway

1. **Create `railway.json`**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm run start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

2. **Deploy**
   - Visit [railway.app](https://railway.app)
   - New Project → Deploy from GitHub
   - Select repository
   - Add environment variables
   - Deploy

---

### Option 4: Self-Hosted (VPS)

**Requirements:**
- Ubuntu 20.04+ server
- Node.js 18+
- Nginx
- PM2

**Steps:**

1. **Server Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

2. **Upload Code**
```bash
# On your local machine
scp -r ./hotel-aditya user@your-server-ip:/var/www/

# SSH into server
ssh user@your-server-ip
cd /var/www/hotel-aditya
```

3. **Build Project**
```bash
npm install
npm run build
```

4. **Start with PM2**
```bash
# Create ecosystem file
nano ecosystem.config.js
```

```javascript
module.exports = {
  apps: [{
    name: 'hotel-aditya',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/hotel-aditya',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

```bash
# Start app
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

5. **Configure Nginx**
```bash
sudo nano /etc/nginx/sites-available/hoteladitya
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/hoteladitya /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

6. **SSL Certificate**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Post-Deployment Tasks

### 1. Update Production URLs

After deployment, update these files with your production domain:

**app/layout.tsx**
```typescript
metadataBase: new URL('https://your-actual-domain.com'),
```

**lib/schema.ts**
```typescript
// Update all instances of 'hoteladitya.vercel.app' to your domain
url: 'https://your-actual-domain.com',
image: 'https://your-actual-domain.com/images/...',
```

### 2. Submit to Google

1. **Google Search Console**
   - Add property (your domain)
   - Verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Google My Business**
   - Claim/update business listing
   - Add website URL
   - Update photos and information

### 3. Performance Testing

```bash
# Lighthouse CI (optional)
npm install -g @lhci/cli
lhci autorun --collect.url=https://yourdomain.com
```

Test manually:
- PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

### 4. Analytics Setup (Optional)

**Google Analytics 4**

1. Create GA4 property
2. Get Measurement ID
3. Add to `app/layout.tsx`:

```typescript
import Script from 'next/script'

// In the <body> tag
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 5. Set Up Monitoring

**Uptime Monitoring** (Free options):
- UptimeRobot: https://uptimerobot.com/
- Pingdom: https://www.pingdom.com/
- StatusCake: https://www.statuscake.com/

**Error Tracking** (Optional):
- Sentry: https://sentry.io/
- LogRocket: https://logrocket.com/

---

## Domain & DNS Configuration

### Configure DNS Records

Point your domain to deployment:

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**For Netlify:**
```
Type: CNAME
Name: www
Value: <your-site>.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### SSL/HTTPS

- **Vercel/Netlify**: Automatic SSL (Let's Encrypt)
- **Self-hosted**: Use Certbot (shown above)

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Verify images are in `public/images/`
- Check Next.js image optimization settings
- Use absolute paths from `/images/...`

### SEO Not Working

- Verify meta tags in page source
- Check robots.txt accessibility
- Validate structured data: https://validator.schema.org/
- Submit sitemap in Search Console

### Performance Issues

- Enable Next.js image optimization
- Compress images before upload
- Use CDN (automatic on Vercel/Netlify)
- Minimize unused JavaScript

---

## Maintenance

### Regular Updates

```bash
# Update dependencies monthly
npm update
npm outdated  # Check for major updates

# Test thoroughly
npm run build
npm run start
```

### Backup

- Repository is backed up on GitHub
- Database backups (if added later)
- Image backups (keep originals separately)

### Content Updates

To update menu, reviews, or restaurant info:
1. Edit `lib/constants.ts`
2. Commit and push
3. Automatic deployment triggers

---

## Cost Breakdown

### Vercel (Recommended for beginners)
- **Hobby**: Free (perfect for starting)
- **Pro**: $20/month (if needed for analytics)

### Custom Domain
- **.com/.in**: ~$10-15/year
- Purchase from: Namecheap, GoDaddy, Google Domains

### Self-Hosted VPS
- Basic VPS: $5-10/month
  - DigitalOcean
  - Linode
  - Vultr
  - AWS Lightsail

### Total Monthly Cost
- **Option 1**: Free (Vercel free tier + existing domain)
- **Option 2**: $5-10/month (VPS self-hosted)

---

## Support Resources

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Next.js Discord: https://discord.gg/nextjs
- Stack Overflow: Tag `next.js`

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Maintenance
npm run lint             # Check for errors
npm update               # Update packages

# Deployment
git add .
git commit -m "Update"
git push                 # Auto-deploys on Vercel/Netlify
```

---

**Deployment Status Checklist:**

- [ ] Code pushed to GitHub
- [ ] Deployed to hosting platform
- [ ] Custom domain configured
- [ ] SSL/HTTPS enabled
- [ ] All pages accessible
- [ ] Images uploaded
- [ ] URLs updated to production
- [ ] Sitemap submitted to Google
- [ ] Analytics configured (optional)
- [ ] Uptime monitoring set up
- [ ] Performance tested (Lighthouse 95+)

---

**Need Help?** Contact the development team or consult the main README.md file.

Good luck with your deployment! 🚀
