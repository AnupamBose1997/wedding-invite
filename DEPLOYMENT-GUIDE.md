# 🚀 Wedding Website Deployment Guide

Complete guide to deploy your wedding website and make it live on the internet!

## 📋 Prerequisites

Before deploying, make sure:
- ✅ Your website works locally (`npm run dev`)
- ✅ Sanity Studio works locally (`cd sanity-studio && npm run dev`)
- ✅ You have a GitHub account
- ✅ You have a Vercel account (free)

---

## Step 1: 📤 Push Code to GitHub

### 1.1 Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New Repository"** (green button)
3. Name it: `wedding-invite` or `our-wedding-website`
4. Make it **Public** (so Vercel can access it for free)
5. **DON'T** initialize with README (your project already has files)
6. Click **"Create Repository"**

### 1.2 Connect Your Local Project to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial wedding website setup"

# Connect to your GitHub repository (replace with YOUR username and repo name)
git remote add origin https://github.com/YOUR-USERNAME/wedding-invite.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

### 1.3 Verify Upload
- Go to your GitHub repository page
- You should see all your wedding website files there

---

## Step 2: 🌐 Deploy to Vercel (Free Hosting)

### 2.1 Sign Up for Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Project
1. On Vercel dashboard, click **"New Project"**
2. Find your `wedding-invite` repository
3. Click **"Import"**
4. **Configure Project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (should auto-fill)
   - **Output Directory:** `.next` (should auto-fill)

### 2.3 Add Environment Variables
Click **"Environment Variables"** and add these:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET = production
```

**To find your Sanity Project ID:**
1. Go to [Sanity.io](https://sanity.io) → Sign In
2. Go to your project dashboard
3. Copy the Project ID (looks like: `abc123def`)

### 2.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a live URL like: `https://wedding-invite-abc123.vercel.app`

---

## Step 3: 🎨 Deploy Sanity Studio

### 3.1 Prepare Studio for Deployment
In your terminal, go to the sanity-studio folder:

```bash
cd sanity-studio
```

### 3.2 Build and Deploy Studio
```bash
# Build the studio
npm run build

# Deploy to Sanity's hosting
npx sanity deploy
```

### 3.3 Choose Studio URL
- You'll be asked to choose a studio hostname
- Pick something like: `your-names-wedding` or `anupam-aastha-wedding`
- Your studio will be available at: `https://your-names-wedding.sanity.studio`

### 3.4 Configure CORS (Important!)
Your website needs permission to fetch data from Sanity:

```bash
# Add your Vercel domain to allowed origins
npx sanity cors add https://your-vercel-domain.vercel.app --credentials
```

**Replace `your-vercel-domain.vercel.app` with your actual Vercel URL!**

---

## 🎉 You're Live!

### Your Wedding Website URLs:
- **Main Website:** `https://your-project.vercel.app`
- **Sanity Studio:** `https://your-studio.sanity.studio`

### 📝 How to Update Content:
1. Go to your Sanity Studio URL
2. Sign in with your Sanity account
3. Edit content (colors, text, images, etc.)
4. Click **"Publish"**
5. Changes appear on your website automatically!

### 🔄 How to Update Code:
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated website features"
   git push
   ```
4. Vercel automatically rebuilds and deploys!

---

## 🆓 Cost Breakdown

- **GitHub:** Free
- **Vercel Hosting:** Free (includes custom domain)
- **Sanity CMS:** Free (up to 3 users, 10GB bandwidth)
- **Total Cost:** $0/month 🎉

---

## 🌐 Custom Domain (Optional)

### If you want your own domain (like `anupam-aastha.com`):

1. **Buy domain** from Namecheap, GoDaddy, or Google Domains
2. **In Vercel:**
   - Go to your project → Settings → Domains
   - Add your custom domain
   - Follow the DNS setup instructions
3. **Your website will be available at your custom domain!**

---

## 🔧 Troubleshooting

### Common Issues:

**❌ "Build failed" on Vercel:**
- Check that your code works locally first
- Verify environment variables are set correctly

**❌ "Can't fetch data from Sanity":**
- Make sure CORS is configured: `npx sanity cors add https://your-domain.vercel.app --credentials`
- Verify your Sanity Project ID is correct

**❌ "Studio won't load":**
- Check your internet connection
- Try `npx sanity deploy` again

**❌ "Changes not showing on website":**
- Make sure you clicked "Publish" in Sanity Studio
- Wait 1-2 minutes for changes to propagate

---

## 📞 Need Help?

If you run into issues:
1. Check the error messages carefully
2. Make sure all steps were followed exactly
3. Try the troubleshooting section above
4. Both Vercel and Sanity have great documentation and support

---

## 🎊 Congratulations!

Your wedding website is now live on the internet! Share the URL with your family and friends, and enjoy managing your content through the beautiful Sanity Studio interface.

**Happy Wedding Planning! 💕**
