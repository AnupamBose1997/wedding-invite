# Wedding Invitation Setup Guide

Follow these steps to get your wedding invitation website up and running!

## 📋 Prerequisites

Before you begin, make sure you have:
- A computer with internet connection
- Basic understanding of copy-paste operations

## 🚀 Step 1: Install Node.js

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (recommended for most users)
3. Run the installer and follow the setup wizard
4. Restart your computer after installation
5. Open Command Prompt (Windows) or Terminal (Mac/Linux)
6. Type `node --version` and press Enter
7. You should see a version number like `v18.17.0`

## 💻 Step 2: Set Up Your Project

1. Open Command Prompt or Terminal
2. Navigate to your project folder:
   ```bash
   cd C:\Anupam\wedding-invite
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```
4. Wait for installation to complete (may take a few minutes)

## 🎨 Step 3: See Your Site (Quick Preview)

Run your website locally:
```bash
npm run dev
```

Open your browser and go to: `http://localhost:3000`

🎉 **You should see your wedding invitation with default content!**

## 📝 Step 4: Set Up Content Management (Sanity CMS)

### Option A: Keep Default Content
If you're happy with the default content and just want to change text/images later, you can skip to Step 6.

### Option B: Set Up Full CMS (Recommended)

1. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```

2. Log in to Sanity (will open browser):
   ```bash
   sanity login
   ```

3. Navigate to Sanity studio folder:
   ```bash
   cd sanity-studio
   ```

4. Initialize Sanity project:
   ```bash
   sanity init
   ```

5. Choose these options:
   - ✅ "Create new project"
   - 📝 Project name: "wedding-invite-cms" (or your choice)
   - 📝 Dataset: "production"
   - ✅ "Clean project with no predefined schemas"

6. Install dependencies:
   ```bash
   npm install
   ```

7. Start Sanity Studio:
   ```bash
   npm run dev
   ```

8. Open: `http://localhost:3333`

## ✏️ Step 5: Add Your Content

1. In Sanity Studio (`http://localhost:3333`):
   - Click "Create" → "Wedding Invitation"
   - Fill in all sections with your information
   - Upload your photos
   - Save/Publish

2. Your website (`http://localhost:3000`) will update automatically!

## 📍 Step 6: Add Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for your wedding venue
3. Click the "Share" button
4. Select "Embed a map"
5. Click "Copy HTML"
6. In Sanity Studio, paste this code in "Venue" → "Map Embed"

## 📝 Step 7: Add RSVP Form

### Google Forms (Free):
1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with RSVP questions
3. Click "Send" → "Embed HTML" (< > icon)
4. Copy the iframe code
5. Paste in Sanity Studio → "RSVP" → "Form Embed"

### Typeform (Premium features):
1. Create account at [Typeform](https://typeform.com)
2. Create your RSVP form
3. Go to "Share" → "Embed"
4. Copy the embed code
5. Paste in Sanity Studio

## 🌐 Step 8: Deploy Your Website (Free)

### Deploy to Vercel:

1. Create account at [Vercel](https://vercel.com)
2. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial wedding invite"
   git push origin main
   ```
3. In Vercel, click "Import Project"
4. Connect your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production
6. Click "Deploy"

### Deploy Sanity Studio:
```bash
cd sanity-studio
sanity deploy
```

## 🎯 Step 9: Share Your Invitation

Your website will be available at: `https://your-project-name.vercel.app`

Share this link with your guests!

## 🛠️ Customization Tips

### Change Colors:
Edit `tailwind.config.ts` and modify the color values.

### Change Fonts:
Update the Google Fonts import in `src/app/globals.css`.

### Add Sections:
Create new components in `src/components/` and add them to `src/app/page.tsx`.

## 🆘 Troubleshooting

### "Command not found" errors:
- Make sure Node.js is installed correctly
- Restart your terminal/command prompt
- Try running as administrator (Windows)

### Sanity login issues:
- Make sure you have internet connection
- Try using incognito/private browser mode
- Clear browser cache

### Site not updating:
- Check if Sanity Studio shows your content
- Try refreshing the website
- Make sure you clicked "Publish" in Sanity

## 📞 Need Help?

1. Check the main README.md file
2. Look at the component files for examples
3. Google the specific error message
4. Check Next.js and Sanity documentation

---

**Congratulations! You now have a beautiful, professional wedding invitation website! 💕**
