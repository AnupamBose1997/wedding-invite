# 🎨 Complete Customization Guide

## ✨ Make Every Bit of Your Wedding Site Unique!

Your wedding invitation is now **100% customizable** through Sanity Studio - no coding required!

### 🎯 What You Can Customize

#### 🎨 **Site-Wide Styling**
- **Colors**: Primary, secondary, background, and text colors
- **Fonts**: Choose from 8+ beautiful font combinations
- **Custom CSS**: Advanced styling for developers

#### 🏠 **Hero Section**
- **Background Image**: Upload your perfect photo
- **Overlay Darkness**: Control background image opacity (0-100%)
- **Text Color**: Custom color for hero text
- **Countdown Timer**: Show/hide the countdown
- **Wedding Date**: Precise date and time for countdown

#### 📍 **Venue Section**
- **Venue Details**: Name, address, date, time
- **Google Maps**: Embedded interactive map
- **Description**: Custom venue description

#### 📸 **Photo Gallery**
- **Upload Images**: Drag and drop your favorite photos
- **Image Captions**: Alt text for each photo
- **Responsive Grid**: Automatically adapts to screen size

#### 📝 **RSVP Section**
- **Background Color**: Custom section background
- **Form Types**: Google Forms, Typeform, Custom, or Email buttons
- **Contact Info**: Email and phone for backup
- **Deadline**: RSVP deadline date

#### 💕 **Love Story**
- **Story Text**: Your personal love story
- **Story Images**: Up to 6 photos
- **Custom Layout**: Automatic responsive layout

---

## 🚀 How to Customize Everything

### Step 1: Access Sanity Studio
1. Start your Sanity Studio: `cd sanity-studio && npm run dev`
2. Open: `http://localhost:3333`
3. Click on your "Wedding Invitation" document

### Step 2: Site Settings & Styling
**Location**: Top section in Sanity Studio

#### Change Colors:
1. **Primary Color**: Main theme color (buttons, headings)
2. **Secondary Color**: Accent color (gold elements)
3. **Background Color**: Overall site background
4. **Text Color**: Main text color

#### Change Fonts:
1. **Primary Font**: For titles and headings
   - Dancing Script (romantic script)
   - Great Vibes (elegant script)
   - Playfair Display (classic serif)
   - Montserrat (modern sans-serif)
   - And more!

2. **Body Font**: For paragraphs and text
   - Playfair Display (elegant)
   - Lora (readable)
   - Open Sans (clean)
   - Crimson Text (classic)
   - And more!

#### Custom CSS (Advanced):
Add your own CSS for ultimate control:
```css
/* Example: Custom button hover effect */
.btn-primary:hover {
  transform: rotate(2deg) scale(1.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* Example: Custom font for hero */
.hero-text {
  font-family: 'Your Custom Font', cursive;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
}
```

### Step 3: Hero Section Customization

#### Background Image:
- **Upload**: Drag and drop your perfect photo
- **Hotspot**: Click and drag to set the focal point
- **Size**: Automatically optimized for web

#### Overlay Control:
- **Slider**: 0% (no overlay) to 100% (completely dark)
- **Perfect Balance**: Usually 20-40% works best

#### Text Color:
- **Override**: Set custom color for hero text
- **Contrast**: Ensure good readability over your image

#### Countdown Timer:
- **Toggle**: Show or hide the countdown
- **Date**: Set exact wedding date and time
- **Timezone**: Automatically handles visitor's timezone

### Step 4: Advanced RSVP Setup

#### Google Forms Integration:
1. **Create Form**: Go to forms.google.com
2. **Get ID**: Copy from URL (the long string of letters/numbers)
3. **Paste ID**: In "Google Form ID" field
4. **Automatic**: Form embeds perfectly!

#### Form ID Examples:
- ✅ Good: `1FAIpQLSe7XYZ123ABC456DEF789`
- ❌ Bad: `https://docs.google.com/forms/d/e/1FAI...` (full URL)

#### Custom Background:
- **Color Picker**: Choose any color for RSVP section
- **Gradient**: Automatically creates beautiful gradients
- **Contrast**: Text automatically adjusts for readability

### Step 5: Photo Gallery Magic

#### Upload Tips:
- **Format**: JPG or PNG
- **Size**: Any size (automatically optimized)
- **Quantity**: Unlimited photos
- **Order**: Drag to reorder

#### Image Optimization:
- **Automatic**: Sanity optimizes for web
- **Responsive**: Perfect on all devices
- **Lazy Loading**: Fast page loading

---

## 🎨 Design Tips & Best Practices

### Color Combinations That Work:
1. **Classic Romance**: Pink (#ec4899) + Gold (#f59e0b)
2. **Elegant Navy**: Navy (#1e3a8a) + Rose Gold (#f59e0b)
3. **Rustic Charm**: Sage (#10b981) + Cream (#fef3c7)
4. **Modern Minimal**: Charcoal (#374151) + Blush (#fce7f3)

### Font Pairing Suggestions:
1. **Romantic**: Dancing Script + Playfair Display
2. **Elegant**: Great Vibes + Lora
3. **Modern**: Montserrat + Open Sans
4. **Classic**: Cormorant Garamond + Crimson Text

### Photo Tips:
1. **Hero Image**: High resolution, good contrast for text
2. **Gallery**: Mix of portraits, details, and candid shots
3. **Story Images**: Chronological order of your relationship
4. **Consistent Style**: Similar editing/filters look best

---

## 🔧 Troubleshooting Customization

### Colors Not Showing:
1. **Clear Cache**: Refresh browser (Ctrl+F5)
2. **Wait**: Changes take 10-30 seconds to appear
3. **Republish**: Click "Publish" again in Sanity

### Fonts Not Loading:
1. **Check Spelling**: Font names are case-sensitive
2. **Wait**: Fonts load from Google Fonts
3. **Fallback**: System fonts load while Google Fonts download

### Images Not Displaying:
1. **File Size**: Very large files may take time to process
2. **Format**: Use JPG or PNG
3. **Permissions**: Make sure images are published in Sanity

### Custom CSS Not Working:
1. **Syntax**: Check for typos and missing semicolons
2. **Specificity**: Use `!important` if needed
3. **Testing**: Test in browser developer tools first

---

## 🎉 You're Now a Wedding Site Designer!

With these tools, you can create a wedding invitation that's uniquely yours:

✅ **Colors**: Match your wedding theme perfectly  
✅ **Fonts**: Express your personality  
✅ **Photos**: Show your love story  
✅ **Content**: Share your unique details  
✅ **Forms**: Collect RSVPs your way  

### 🚀 Pro Tips:
1. **Save Often**: Click "Publish" frequently
2. **Preview**: Check your site after each change
3. **Mobile**: Test on your phone too
4. **Feedback**: Ask friends for opinions
5. **Backup**: Sanity automatically saves versions

**Your wedding invitation will be absolutely perfect!** 💕
