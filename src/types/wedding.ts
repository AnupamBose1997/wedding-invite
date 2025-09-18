export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SanityColor {
  hex: string
  alpha: number
  hsl: {
    h: number
    s: number
    l: number
    a: number
  }
  hsv: {
    h: number
    s: number
    v: number
    a: number
  }
  rgb: {
    r: number
    g: number
    b: number
    a: number
  }
}

export interface SiteSettings {
  siteName: string
  primaryColor?: SanityColor
  secondaryColor?: SanityColor
  backgroundColor?: SanityColor
  textColor?: SanityColor
  primaryFont: string
  bodyFont: string
  timezone?: string
  logo?: SanityImage
  customCSS?: string
}

export interface Footer {
  coupleNames: string
  nameColor?: SanityColor
  nameFont: string
  thankYouMessage: string
  messageColor?: SanityColor
  copyrightText: string
  copyrightColor?: SanityColor
}

export interface Hero {
  titleStyle: 'ampersand' | 'plus' | 'names-only' | 'custom'
  firstName?: string
  secondName?: string
  customTitle?: string
  titleFont?: string
  contentPosition?: {
    vertical: 'top' | 'center' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
  subtitle: string
  backgroundType: 'image' | 'video'
  backgroundImage?: SanityImage | null
  backgroundVideo?: SanityFile | null
  videoFallbackImage?: SanityImage | null
  overlayOpacity: number
  textColor?: SanityColor
  weddingDate: string
  time?: string
  showCountdown: boolean
  showScrollIndicator: boolean
  scrollIndicatorStyle: 'mouse' | 'arrow' | 'chevron' | 'text'
}

export interface Ceremony {
  enabled: boolean
  title: string
  date: string
  time?: string
  venue: string
  address: string
  mapEmbed?: string
  description?: string
}

export interface WeddingCeremony extends Ceremony {
  mediaType: 'image' | 'video' | 'none'
  image?: SanityImage
  video?: SanityFile
}

export interface Ceremonies {
  haldi: Ceremony
  cocktailDinner: Ceremony
  wedding: WeddingCeremony
  reception: Ceremony
}

export interface Venue {
  name: string
  address: string
  date: string
  time?: string
  time: string
  mapEmbed: string
  description?: string
}

export interface Gallery {
  images: SanityImage[] | null
}

export interface RSVP {
  title: string
  titleFont?: string
  titleColor?: SanityColor
  description: string
  descriptionFont?: string
  descriptionColor?: SanityColor
  backgroundColor?: SanityColor
  formType: 'google-forms' | 'typeform' | 'custom' | 'buttons'
  googleFormId?: string
  formEmbed?: string
  typeformId?: string
  deadline?: string
  contactInfo?: {
    email?: string
    phone?: string
  }
}

export interface ReceptionRSVP {
  title: string
  titleFont?: string
  titleColor?: SanityColor
  description: string
  descriptionFont?: string
  descriptionColor?: SanityColor
  backgroundColor?: SanityColor
  formType: 'google-forms' | 'typeform' | 'custom' | 'buttons'
  googleFormId?: string
  formEmbed?: string
  typeformId?: string
  deadline?: string
  contactInfo?: {
    email?: string
    phone?: string
  }
}

export interface Story {
  title: string
  content: string
  images: SanityImage[] | null
}

export interface WeddingData {
  _id: string
  siteSettings: SiteSettings
  footer?: Footer
  hero: Hero
  ceremonies: Ceremonies | null
  venue: Venue
  gallery: Gallery | null
  rsvp: RSVP
  receptionRSVP?: ReceptionRSVP
  story: Story
}
