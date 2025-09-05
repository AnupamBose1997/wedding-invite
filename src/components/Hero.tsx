'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor, fileUrl } from '@/lib/sanity'
import { Hero as HeroType } from '@/types/wedding'

interface HeroProps {
  hero: HeroType
}

export default function Hero({ hero }: HeroProps) {
  const overlayOpacity = (hero.overlayOpacity || 30) / 100
  
  const getColorValue = (color: any) => {
    if (typeof color === 'string') return color
    if (color && typeof color === 'object' && color.hex) return color.hex
    return null
  }
  
  const textColor = getColorValue(hero.textColor) || 'white'
  
  // Generate title based on style
  const getTitle = () => {
    switch (hero.titleStyle) {
      case 'ampersand':
        return `${hero.firstName || 'Anupam'} & ${hero.secondName || 'Aastha'}`
      case 'plus':
        return `${hero.firstName || 'Anupam'} + ${hero.secondName || 'Aastha'}`
      case 'names-only':
        return `${hero.firstName || 'Anupam'} ${hero.secondName || 'Aastha'}`
      case 'custom':
        return hero.customTitle || 'Our Wedding'
      default:
        return `${hero.firstName || 'Anupam'} & ${hero.secondName || 'Aastha'}`
    }
  }
  
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {hero.backgroundType === 'video' && hero.backgroundVideo ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              className="absolute inset-0 w-full h-full object-cover"
              poster={hero.videoFallbackImage ? urlFor(hero.videoFallbackImage).width(1920).height(1080).url() : undefined}
              preload="auto"
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              style={{
                pointerEvents: 'none'
              }}
              onError={(e) => {
                console.log('Video failed to load:', e)
                // Hide video element on error
                const video = e.target as HTMLVideoElement
                video.style.display = 'none'
              }}
            >
              <source src={fileUrl(hero.backgroundVideo)} type="video/mp4" />
              <source src={fileUrl(hero.backgroundVideo)} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            {/* Fallback image for when video doesn't load */}
            {hero.videoFallbackImage && (
              <Image
                src={urlFor(hero.videoFallbackImage).width(1920).height(1080).url()}
                alt="Wedding background"
                fill
                className="object-cover"
                priority
              />
            )}
          </>
        ) : (
          <Image
            src={hero.backgroundImage ? urlFor(hero.backgroundImage).width(1920).height(1080).url() : '/default-hero.svg'}
            alt="Wedding background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div 
          className="absolute inset-0 bg-black" 
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ color: textColor }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full"
        >
          <motion.h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-elegant mb-3 sm:mb-4 md:mb-6 leading-tight tracking-wide break-words"
            style={{ 
              color: textColor,
              wordBreak: 'break-word',
              hyphens: 'auto'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {getTitle()}
          </motion.h1>
          
          <motion.p 
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-elegant mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: textColor, opacity: 0.9 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="text-lg md:text-xl font-elegant"
            style={{ color: textColor, opacity: 0.8 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {new Date(hero.weddingDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {hero.showScrollIndicator && (
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const nextSection = document.querySelector('#countdown, #story, #venue')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{ color: textColor }}
        >
          {hero.scrollIndicatorStyle === 'mouse' && (
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 rounded-full flex justify-center" style={{ borderColor: textColor }}>
              <div className="w-1 h-2 sm:h-3 rounded-full mt-1 sm:mt-2 animate-pulse" style={{ backgroundColor: textColor }} />
            </div>
          )}
          
          {hero.scrollIndicatorStyle === 'arrow' && (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          
          {hero.scrollIndicatorStyle === 'chevron' && (
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
          
          {hero.scrollIndicatorStyle === 'text' && (
            <div className="text-center">
              <div className="text-xs sm:text-sm font-medium mb-1">Scroll Down</div>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </motion.div>
      )}
    </section>
  )
}
