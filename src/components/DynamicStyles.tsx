'use client'

import { SiteSettings } from '@/types/wedding'

interface DynamicStylesProps {
  siteSettings: SiteSettings
}

export default function DynamicStyles({ siteSettings }: DynamicStylesProps) {
  const generateCSS = () => {
    let css = ''
    
    // Font imports
    const fonts = [siteSettings.primaryFont, siteSettings.bodyFont].filter(Boolean)
    const fontImports = fonts.map(font => 
      `@import url('https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@300;400;500;600;700&display=swap');`
    ).join('\n')
    
    css += fontImports
    
    // Helper function to extract color value - handles both string and object formats
    const getColorValue = (color: any) => {
      // Handle string format (old data)
      if (typeof color === 'string') {
        return color.startsWith('#') ? color : `#${color}`
      }
      // Handle object format (new color picker)
      if (color && typeof color === 'object' && color.hex) {
        return color.hex
      }
      return null
    }

    // CSS Variables
    css += `
      :root {
        --primary-color: ${getColorValue(siteSettings.primaryColor) || '#ec4899'};
        --secondary-color: ${getColorValue(siteSettings.secondaryColor) || '#f59e0b'};
        --background-color: ${getColorValue(siteSettings.backgroundColor) || '#ffffff'};
        --text-color: ${getColorValue(siteSettings.textColor) || '#1f2937'};
        --primary-font: '${siteSettings.primaryFont || 'Dancing Script'}', cursive;
        --body-font: '${siteSettings.bodyFont || 'Playfair Display'}', serif;
      }
      
      body {
        background-color: var(--background-color) !important;
        color: var(--text-color) !important;
        font-family: var(--body-font) !important;
      }
      
      .hero-text {
        font-family: var(--primary-font) !important;
        color: var(--primary-color) !important;
      }
      
      .section-title {
        font-family: var(--body-font) !important;
        color: var(--text-color) !important;
      }
      
      .btn-primary {
        background: linear-gradient(to right, var(--primary-color), var(--primary-color)) !important;
        color: white !important;
      }
      
      .btn-secondary {
        background: linear-gradient(to right, var(--secondary-color), var(--secondary-color)) !important;
        color: white !important;
      }
      
      .text-primary-600 {
        color: var(--primary-color) !important;
      }
      
      .text-primary-500 {
        color: var(--primary-color) !important;
      }
      
      .text-primary-400 {
        color: var(--primary-color) !important;
      }
      
      .bg-primary-600 {
        background-color: var(--primary-color) !important;
      }
      
      .bg-primary-700 {
        background-color: var(--primary-color) !important;
      }
      
      .text-gold-200, .text-gold-300 {
        color: var(--secondary-color) !important;
      }
      
      .from-primary-500, .to-primary-600, .from-primary-600, .to-primary-700 {
        --tw-gradient-from: var(--primary-color) !important;
        --tw-gradient-to: var(--primary-color) !important;
      }
      
      .from-gold-400, .to-gold-500, .from-gold-500, .to-gold-600 {
        --tw-gradient-from: var(--secondary-color) !important;
        --tw-gradient-to: var(--secondary-color) !important;
      }
    `
    
    // Custom CSS
    if (siteSettings.customCSS) {
      css += '\n' + siteSettings.customCSS
    }
    
    return css
  }

  return (
    <style jsx global>{`
      ${generateCSS()}
    `}</style>
  )
}
