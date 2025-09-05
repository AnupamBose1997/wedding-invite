# 🚀 Quick Start Guide

## Option 1: Preview with Default Content (Fastest)

**Just want to see your wedding site working? Start here!**

1. **Install Node.js** (if not already installed):
   - Go to [nodejs.org](https://nodejs.org)
   - Download and install the LTS version
   - Restart your terminal/command prompt

2. **Start your website**:
   ```bash
   npm install
   npm run dev
   ```

3. **View your site**: Open `http://localhost:3000`

🎉 **That's it!** Your wedding invitation is now running with beautiful default content.

---

## Option 2: Full Setup with Content Management

**Want to add your own content? Follow these steps:**

### Step 1: Get Your Site Running First
Follow Option 1 above to make sure everything works.

### Step 2: Set Up Sanity CMS

1. **Install Sanity CLI**:
   ```bash
   npm install -g @sanity/cli
   ```

2. **Login to Sanity** (opens browser):
   ```bash
   sanity login
   ```

3. **Create a new Sanity project**:
   ```bash
   cd sanity-studio
   sanity init --project-name "wedding-invite-cms" --dataset production --template clean
   ```

4. **Get your Project ID**:
   After running `sanity init`, you'll see output like:
   ```
   ✅ Success! Created project "wedding-invite-cms" with project ID "abc123def"
   ```
   **Copy this Project ID!**

### Step 3: Configure Your Project

1. **Create environment file**:
   Create a file called `.env.local` in your main project folder with:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
   (Replace `abc123def` with your actual Project ID)

2. **Update Sanity Studio config**:
   Edit `sanity-studio/sanity.config.ts` and replace:
   ```typescript
   projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'
   ```
   with:
   ```typescript
   projectId: 'abc123def' // Your actual project ID
   ```

### Step 4: Start Both Services

1. **Terminal 1 - Main Website**:
   ```bash
   npm run dev
   ```
   Opens: `http://localhost:3000`

2. **Terminal 2 - Sanity Studio**:
   ```bash
   cd sanity-studio
   npm install
   npm run dev
   ```
   Opens: `http://localhost:3333`

### Step 5: Add Your Content

1. Go to `http://localhost:3333` (Sanity Studio)
2. Click "Create" → "Wedding Invitation"
3. Fill in all your wedding details:
   - Upload your hero background image
   - Add venue information
   - Upload gallery photos
   - Write your love story
   - Set up RSVP details

4. Your main website (`http://localhost:3000`) will update automatically!

---

## 🔧 Troubleshooting

### "Command not found" errors
- Make sure Node.js is installed
- Restart your terminal
- Try running as administrator (Windows)

### Sanity Studio errors
- Make sure you've completed the login step
- Check that your project ID is correct in both config files
- Try clearing browser cache

### Site not updating with new content
- Make sure you clicked "Publish" in Sanity Studio
- Refresh your website
- Check the browser console for errors

---

## 🎯 What You Get

✅ **Beautiful wedding invitation website**  
✅ **Responsive design (mobile-friendly)**  
✅ **Smooth animations**  
✅ **Photo gallery with lightbox**  
✅ **Countdown timer**  
✅ **Venue information with maps**  
✅ **RSVP integration**  
✅ **Easy content management**  

---

## 🚀 Ready to Deploy?

Once everything looks good locally:

1. Push your code to GitHub
2. Deploy to Vercel (free hosting)
3. Deploy your Sanity Studio
4. Share your beautiful wedding invitation with guests!

See the main `SETUP-GUIDE.md` for detailed deployment instructions.

---

**Need help?** Check the detailed `SETUP-GUIDE.md` or `README.md` files for more information!
