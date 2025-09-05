'use client'

import { motion } from 'framer-motion'
import { Ceremonies, Venue as VenueType } from '@/types/wedding'

interface VenueProps {
  venue: VenueType
  ceremonies: Ceremonies | null
}

interface TimelineEvent {
  title: string
  date: string
  venue: string
  address: string
  mapEmbed?: string
  description?: string
  type: 'haldi' | 'cocktail' | 'wedding' | 'reception' | 'legacy'
}

export default function Venue({ venue, ceremonies }: VenueProps) {
  // Collect all events for timeline
  const timelineEvents: TimelineEvent[] = []

  // Add ceremonies if available
  if (ceremonies) {
    if (ceremonies.haldi?.enabled) {
      timelineEvents.push({
        ...ceremonies.haldi,
        type: 'haldi'
      })
    }
    if (ceremonies.cocktailDinner?.enabled) {
      timelineEvents.push({
        ...ceremonies.cocktailDinner,
        type: 'cocktail'
      })
    }
    if (ceremonies.wedding?.enabled) {
      timelineEvents.push({
        ...ceremonies.wedding,
        type: 'wedding'
      })
    }
    if (ceremonies.reception?.enabled) {
      timelineEvents.push({
        ...ceremonies.reception,
        type: 'reception'
      })
    }
  }

  // Add legacy venue as reception if no ceremonies are configured
  if (timelineEvents.length === 0) {
    timelineEvents.push({
      title: venue.name,
      date: venue.date,
      venue: venue.name,
      address: venue.address,
      mapEmbed: venue.mapEmbed,
      description: venue.description,
      type: 'legacy'
    })
  }

  const getEventOrder = (type: string) => {
    switch (type) {
      case 'haldi': return 1
      case 'cocktail': return 2
      case 'wedding': return 3
      case 'reception': return 4
      default: return 5
    }
  }

  // Sort events by logical order (haldi, cocktail, wedding, reception), then by date
  timelineEvents.sort((a, b) => {
    const orderA = getEventOrder(a.type)
    const orderB = getEventOrder(b.type)
    if (orderA !== orderB) {
      return orderA - orderB
    }
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  return (
    <section id="venue" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          When &amp; Where
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-200"></div>
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="relative flex items-start pb-12 sm:pb-16 last:pb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-sm">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-400"></div>
                </div>

                {/* Event card */}
                <div className="ml-4 sm:ml-8 flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-elegant text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <div className="text-base sm:text-lg text-gray-600 space-y-1">
                          <p className="font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <p>
                            {new Date(event.date).toLocaleTimeString('en-US', {
                              hour: 'numeric',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-gray-600">
                        <p className="font-medium text-gray-800 text-sm sm:text-base">{event.venue}</p>
                        <p className="text-xs sm:text-sm">{event.address}</p>
                      </div>
                      
                      {event.description && (
                        <p className="text-gray-600 italic text-sm sm:text-base">{event.description}</p>
                      )}
                    </div>

                    {/* Map */}
                    <div className="order-first lg:order-last">
                      {event.mapEmbed ? (
                        <div 
                          className="w-full h-48 sm:h-64 rounded-lg overflow-hidden shadow-sm border border-gray-100"
                          dangerouslySetInnerHTML={{ __html: event.mapEmbed }}
                        />
                      ) : (
                        <div className="w-full h-48 sm:h-64 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                          <div className="text-center text-gray-400">
                            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="text-sm">Map will be displayed here</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}