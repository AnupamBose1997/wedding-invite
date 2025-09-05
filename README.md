# Wedding Invitation Website

A beautiful, responsive wedding invitation website built with **Next.js** and **Sanity CMS**. Features animations, photo galleries, venue information, and RSVP functionality.

## 🌟 Features

- **Responsive Design**: Beautiful on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Content Management**: Easy editing via Sanity CMS
- **Photo Gallery**: Interactive lightbox gallery
- **Countdown Timer**: Real-time countdown to wedding day
- **Venue Information**: Interactive maps and details
- **RSVP Integration**: Embed forms from Google Forms, Typeform, etc.
- **SEO Optimized**: Meta tags and Open Graph support

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your system.

### 1. Install Node.js

If you don't have Node.js installed:
1. Go to [nodejs.org](https://nodejs.org)
2. Download and install the LTS version
3. Restart your terminal/command prompt

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Sanity CMS

#### Option A: Use Default Content (Quick Preview)
The site will work with default content. Skip to step 4 to see it in action!

#### Option B: Set up Sanity CMS (Full Features)

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Login to Sanity:
```bash
sanity login
```

3. Create a new Sanity project:
```bash
cd sanity-studio
sanity init
```

4. Choose:
   - "Create new project"
   - Give it a name (e.g., "wedding-invite-cms")
   - Choose "Clean project" template
   - Choose dataset → "production"

5. Update the project ID in:
   - `sanity-studio/sanity.config.ts`
   - `src/lib/sanity.ts`

6. Start Sanity Studio:
```bash
cd sanity-studio
npm install
npm run dev
```

7. Visit `http://localhost:3333` to access Sanity Studio

### 4. Run the Website

```bash
npm run dev
```

Visit `http://localhost:3000` to see your wedding invitation!

## 📝 Content Management

### Using Sanity Studio

1. Open `http://localhost:3333` (Sanity Studio)
2. Click "Create" → "Wedding Invitation"
3. Fill in all sections:
   - **Hero**: Main title, subtitle, background image, date
   - **Venue**: Name, address, date, time, map embed
   - **Gallery**: Upload photos
   - **RSVP**: Title, description, form embed code
   - **Story**: Your love story and photos

### Adding Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Paste it in Sanity Studio → Venue → Map Embed

### Adding RSVP Forms

#### Google Forms:
1. Create a Google Form
2. Click "Send" → "Embed HTML"
3. Copy the iframe code
4. Paste in Sanity Studio → RSVP → Form Embed

#### Typeform:
1. Create a Typeform
2. Go to "Share" → "Embed"
3. Copy the embed code
4. Paste in Sanity Studio

## 🎨 Customization

### Colors & Styling

Edit `tailwind.config.ts` to change:
- Color scheme (primary, gold colors)
- Fonts
- Animations

### Components

All components are in `src/components/`:
- `Hero.tsx` - Main hero section
- `Countdown.tsx` - Countdown timer
- `Venue.tsx` - Venue details and map
- `Gallery.tsx` - Photo gallery with lightbox
- `RSVP.tsx` - RSVP section
- `Story.tsx` - Love story section
- `Navigation.tsx` - Navigation menu

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Deploy!

### Deploy Sanity Studio

```bash
cd sanity-studio
npm run build
sanity deploy
```

Your studio will be available at `https://your-project-name.sanity.studio`

## 🛠️ Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📱 Mobile Responsive

The site is fully responsive and looks great on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 SEO Features

- Meta tags for social sharing
- Open Graph images
- Twitter Card support
- Semantic HTML structure
- Fast loading times

## 🤝 Support

If you need help:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Sanity documentation](https://www.sanity.io/docs)
3. Look at the component files for examples

## 📄 License

This project is free to use for personal wedding invitations.

---

Made with ❤️ for your special day!
