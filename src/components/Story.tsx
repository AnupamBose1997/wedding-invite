'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Story as StoryType } from '@/types/wedding'

interface StoryProps {
  story: StoryType
}

export default function Story({ story }: StoryProps) {
  return (
    <section id="story" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {story.title}
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Story Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-base sm:prose-lg max-w-none">
                {story.content.split('\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Story Images */}
            <motion.div
              className="grid grid-cols-2 gap-2 sm:gap-4 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {story.images && Array.isArray(story.images) && story.images.length > 0 ? story.images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${
                    index === 0 ? 'col-span-2 aspect-[3/2]' : 'aspect-square'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={urlFor(image).width(600).height(400).url()}
                    alt={image.alt || `Story image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              )) : (
                <div className="col-span-2 card text-center">
                  <p className="text-gray-600">
                    💕 Story photos will appear here once added through Sanity CMS
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
