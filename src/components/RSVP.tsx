'use client'

import { motion } from 'framer-motion'
import { RSVP as RSVPType } from '@/types/wedding'

interface RSVPProps {
  rsvp: RSVPType
}

const GoogleForm = ({ formId }: { formId: string }) => {
  // Handle different Google Form URL formats
  const getEmbedUrl = (id: string) => {
    if (!id || id.trim() === '') return ''
    
    // Clean the input
    const cleanInput = id.trim()
    
    // If it's already a full URL
    if (cleanInput.includes('docs.google.com/forms')) {
      // Extract the form ID from various URL formats
      let extractedId = ''
      
      // Format: https://docs.google.com/forms/d/1FAIpQLSe.../viewform
      if (cleanInput.includes('/forms/d/') && cleanInput.includes('/viewform')) {
        extractedId = cleanInput.split('/forms/d/')[1].split('/')[0]
      }
      // Format: https://docs.google.com/forms/d/1FAIpQLSe.../edit
      else if (cleanInput.includes('/forms/d/') && cleanInput.includes('/edit')) {
        extractedId = cleanInput.split('/forms/d/')[1].split('/')[0]
      }
      // Format: https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform
      else if (cleanInput.includes('/forms/d/e/')) {
        extractedId = cleanInput.split('/forms/d/e/')[1].split('/')[0]
      }
      
      if (extractedId) {
        return `https://docs.google.com/forms/d/e/${extractedId}/viewform?embedded=true`
      }
      
      // If we can't extract ID, try to use the URL as-is with embedded=true
      if (cleanInput.includes('viewform')) {
        return cleanInput.includes('embedded=true') ? cleanInput : `${cleanInput}?embedded=true`
      }
    }
    
    // If it's just an ID (starts with 1FAIpQLSe or similar)
    if (cleanInput.match(/^1[A-Za-z0-9_-]+$/)) {
      return `https://docs.google.com/forms/d/e/${cleanInput}/viewform?embedded=true`
    }
    
    // Fallback: assume it's an ID
    return `https://docs.google.com/forms/d/e/${cleanInput}/viewform?embedded=true`
  }

  const embedUrl = getEmbedUrl(formId)
  
  if (!embedUrl) {
    return (
      <div className="text-center py-8">
        <p className="text-primary-100 mb-4">Please add your Google Form URL in Sanity Studio</p>
        <p className="text-sm text-primary-200">Go to RSVP Section → Google Form URL or ID</p>
      </div>
    )
  }
  
  return (
    <div className="w-full overflow-hidden">
      {/* Mobile-optimized iframe container */}
      <div className="relative w-full" style={{ paddingBottom: '120%' }}>
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
          title="RSVP Form"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"
          loading="lazy"
          style={{
            minHeight: '500px',
            height: '100%',
            border: 'none',
            outline: 'none'
          }}
        >
          Loading RSVP form...
        </iframe>
      </div>
      
      {/* Mobile-friendly fallback link */}
      <div className="text-center mt-4 px-2">
        <a 
          href={embedUrl.replace('?embedded=true', '').replace('&embedded=true', '')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 backdrop-blur-sm"
        >
          📱 Open Form in New Tab
        </a>
        <p className="text-xs sm:text-sm text-primary-200 mt-2">
          Having trouble? Try opening the form in a new tab
        </p>
      </div>
    </div>
  )
}

const TypeformEmbed = ({ typeformId }: { typeformId: string }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <iframe
          src={`https://${typeformId}.typeform.com/to/${typeformId}`}
          className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
          title="RSVP Typeform"
          style={{
            minHeight: '500px',
            border: 'none'
          }}
        />
      </div>
    </div>
  )
}

export default function RSVP({ rsvp }: RSVPProps) {
  const getColorValue = (color: any) => {
    if (typeof color === 'string') return color
    if (color && typeof color === 'object' && color.hex) return color.hex
    return null
  }

  const sectionStyle = rsvp.backgroundColor 
    ? { backgroundColor: getColorValue(rsvp.backgroundColor) }
    : {}

  const renderForm = () => {
    switch (rsvp.formType) {
      case 'google-forms':
        if (rsvp.googleFormId) {
          return <GoogleForm formId={rsvp.googleFormId} />
        }
        break
      case 'typeform':
        if (rsvp.typeformId) {
          return <TypeformEmbed typeformId={rsvp.typeformId} />
        }
        break
      case 'custom':
        if (rsvp.formEmbed) {
          return (
            <div 
              className="w-full min-h-[500px]"
              dangerouslySetInnerHTML={{ __html: rsvp.formEmbed }}
            />
          )
        }
        break
      case 'buttons':
      default:
        return (
          <div className="space-y-6">
            <p className="text-lg text-primary-100 mb-8">
              We can't wait to celebrate with you! Please let us know if you'll be joining us.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => rsvp.contactInfo?.email && (window.location.href = `mailto:${rsvp.contactInfo.email}?subject=RSVP - Yes!&body=We're excited to celebrate with you!`)}
              >
                ✓ Yes, I'll be there!
              </motion.button>
              
              <motion.button
                className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => rsvp.contactInfo?.email && (window.location.href = `mailto:${rsvp.contactInfo.email}?subject=RSVP - Can't Make It&body=Sorry, we won't be able to attend.`)}
              >
                ✗ Sorry, can't make it
              </motion.button>
            </div>
            
            {rsvp.contactInfo && (
              <div className="text-xs sm:text-sm text-primary-200 mt-6 space-y-2 max-w-md mx-auto">
                {rsvp.contactInfo.email && (
                  <p className="break-all">Email: <a href={`mailto:${rsvp.contactInfo.email}`} className="underline hover:text-white">{rsvp.contactInfo.email}</a></p>
                )}
                {rsvp.contactInfo.phone && (
                  <p>Phone: <a href={`tel:${rsvp.contactInfo.phone}`} className="underline hover:text-white">{rsvp.contactInfo.phone}</a></p>
                )}
              </div>
            )}
          </div>
        )
    }
    
    return (
      <div className="text-center py-8">
        <p className="text-primary-100">Please configure your RSVP form in Sanity Studio</p>
      </div>
    )
  }

  return (
    <section id="rsvp" className="py-16 sm:py-20 text-white" style={sectionStyle}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-elegant mb-4 sm:mb-6 text-white">
            {rsvp.title}
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-100 max-w-2xl mx-auto leading-relaxed">
            {rsvp.description}
          </p>

          {rsvp.deadline && (
            <motion.p 
              className="text-base sm:text-lg mb-8 sm:mb-12 text-gold-200 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Please respond by {new Date(rsvp.deadline).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </motion.p>
          )}

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {renderForm()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
