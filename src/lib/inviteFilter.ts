// Invitation filtering utility for different guest groups

export type InviteType = 'full' | 'reception'

export interface InviteConfig {
  type: InviteType
  showHero: boolean
  showStory: boolean
  showCeremonies: string[] // Array of ceremony keys to show
  showGallery: boolean
  showRSVP: boolean
  showCountdown: boolean
  customTitle?: string
  customSubtitle?: string
  rsvpFormType?: 'main' | 'reception'
}

export const getInviteConfig = (inviteType: string | null | undefined): InviteConfig => {
  switch (inviteType?.toLowerCase()) {
    case 'reception':
      return {
        type: 'reception',
        showHero: true,
        showStory: true,
        showCeremonies: ['reception'], // Only show reception
        showGallery: false,
        showRSVP: true,
        showCountdown: true,
        customTitle: 'Wedding Reception Invitation',
        rsvpFormType: 'reception'
      }
    
    default: // 'full' or any other value
      return {
        type: 'full',
        showHero: true,
        showStory: true,
        showCeremonies: ['haldi', 'cocktailDinner', 'wedding', 'reception'], // Show all
        showGallery: true,
        showRSVP: true,
        showCountdown: true,
        rsvpFormType: 'main'
      }
  }
}

export const filterCeremoniesForInvite = (ceremonies: any, allowedCeremonies: string[]) => {
  if (!ceremonies) return null
  
  const filtered: any = {}
  
  allowedCeremonies.forEach(ceremonyKey => {
    if (ceremonies[ceremonyKey]) {
      filtered[ceremonyKey] = ceremonies[ceremonyKey]
    }
  })
  
  return Object.keys(filtered).length > 0 ? filtered : null
}

export const getNavigationItemsForInvite = (config: InviteConfig) => {
  const items = [
    { name: 'Home', href: '#home' }
  ]
  
  if (config.showStory) {
    items.push({ name: 'Story', href: '#story' })
  }
  
  if (config.showCeremonies.length > 0) {
    items.push({ name: 'When & Where', href: '#venue' })
  }
  
  if (config.showRSVP) {
    items.push({ name: 'RSVP', href: '#rsvp' })
  }
  
  return items
}
