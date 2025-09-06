import { client, queries } from '@/lib/sanity'
import { WeddingData } from '@/types/wedding'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import Story from '@/components/Story'
import Venue from '@/components/Venue'
import Gallery from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import DynamicStyles from '@/components/DynamicStyles'

// Default data for when Sanity is not set up yet
const defaultData: WeddingData = {
  _id: 'default',
  siteSettings: {
    siteName: 'Our Wedding',
    primaryFont: 'Dancing Script',
    bodyFont: 'Playfair Display'
  },
  footer: {
    coupleNames: 'Anupam & Aastha',
    nameFont: 'Dancing Script',
    thankYouMessage: 'Thank you for being part of our journey',
    copyrightText: '© 2025 Wedding Invitation'
  },
  hero: {
    titleStyle: 'ampersand' as const,
    firstName: 'Anupam',
    secondName: 'Aastha',
    titleFont: 'Dancing Script',
    contentPosition: {
      vertical: 'center' as const,
      horizontal: 'center' as const
    },
    subtitle: 'We\'re getting married!',
    backgroundType: 'image' as const,
    backgroundImage: null,
    overlayOpacity: 30,
    weddingDate: '2024-12-25T16:00:00.000Z',
    showCountdown: true,
    showScrollIndicator: true,
    scrollIndicatorStyle: 'mouse' as const
  },
  ceremonies: null,
  venue: {
    name: 'Beautiful Garden Venue',
    address: '123 Wedding Lane, Love City, LC 12345',
    date: '2024-12-25T00:00:00.000Z',
    time: '4:00 PM - 10:00 PM',
    mapEmbed: '',
    description: 'A beautiful outdoor venue perfect for our special day.'
  },
  gallery: {
    images: null
  },
  rsvp: {
    title: 'Will You Join Us?',
    titleFont: 'Playfair Display',
    description: 'Your presence would make our day even more special. Please let us know if you can celebrate with us!',
    descriptionFont: 'Lora',
    formType: 'buttons' as const,
    deadline: '2024-12-15T00:00:00.000Z',
    contactInfo: {
      email: 'wedding@example.com',
      phone: '+1 (555) 123-4567'
    }
  },
  story: {
    title: 'Our Love Story',
    content: 'Every love story is beautiful, but ours is our favorite. We met in college and have been inseparable ever since. Through all of life\'s adventures, we\'ve supported each other and grown together.\n\nNow we\'re ready to take the next step and would love to have you there to celebrate with us as we begin this new chapter of our lives together.',
    images: null
  }
}

async function getWeddingData(): Promise<WeddingData> {
  // Check if Sanity is configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  
  if (!projectId || projectId === 'your-project-id' || projectId === '') {
    console.log('Using default data - Sanity not configured yet')
    return defaultData
  }

  try {
    const data = await client.fetch(queries.wedding)
    return data || defaultData
  } catch (error) {
    console.log('Using default data - Sanity fetch error:', error)
    return defaultData
  }
}

export default async function Home() {
  const data = await getWeddingData()

  return (
    <main>
      <DynamicStyles siteSettings={data.siteSettings} />
      <Navigation titleFont={data.hero.titleFont} logo={data.siteSettings.logo} />
      
      <section id="home">
        <Hero hero={data.hero} />
      </section>
      
      {data.hero.showCountdown && (
        <Countdown 
          targetDate={data.hero.weddingDate} 
          showCountdown={data.hero.showCountdown}
        />
      )}
      
      <section id="story">
        <Story story={data.story} />
      </section>
      
      <section id="venue">
        <Venue venue={data.venue} ceremonies={data.ceremonies} />
      </section>
      
      <section id="gallery">
        <Gallery gallery={data.gallery} />
      </section>
      
      <section id="rsvp">
        <RSVP rsvp={data.rsvp} />
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 
              className="text-3xl mb-2"
              style={{ 
                fontFamily: data.footer?.nameFont || 'Dancing Script',
                color: data.footer?.nameColor?.hex || '#ffffff'
              }}
            >
              {data.footer?.coupleNames || 'Anupam & Aastha'}
            </h3>
            <p style={{ color: data.footer?.messageColor?.hex || '#9CA3AF' }}>
              {data.footer?.thankYouMessage || 'Thank you for being part of our journey'}
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p 
              className="text-sm"
              style={{ color: data.footer?.copyrightColor?.hex || '#6B7280' }}
            >
              {data.footer?.copyrightText || '© 2025 Wedding Invitation'}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Enable ISR (Incremental Static Regeneration) - revalidate every 30 seconds
export const revalidate = 30
