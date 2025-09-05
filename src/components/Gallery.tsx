'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { urlFor } from '@/lib/sanity'
import { Gallery as GalleryType } from '@/types/wedding'

interface GalleryProps {
  gallery: GalleryType
}

export default function Gallery({ gallery }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-br from-pink-50 to-gold-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-full">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Memories
        </motion.h2>

        {gallery.images && gallery.images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {gallery.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group touch-manipulation"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={urlFor(image).width(500).height(500).url()}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <div className="card">
              <p className="text-gray-600 text-lg">
                📸 Photo gallery will be displayed here once images are added through Sanity CMS.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Upload your favorite photos in the Sanity Studio to create a beautiful gallery.
              </p>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full max-w-4xl flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.images && selectedImage !== null && (
                <Image
                  src={urlFor(gallery.images[selectedImage]).width(1200).height(800).url()}
                  alt={gallery.images[selectedImage].alt || `Gallery image ${selectedImage + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[85vh] max-w-full w-auto h-auto rounded-lg"
                />
              )}
              
              {/* Close button */}
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/60 rounded-full p-2 sm:p-3 hover:bg-black/80 transition-colors touch-manipulation"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation arrows */}
              {selectedImage !== null && selectedImage > 0 && (
                <button
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/60 rounded-full p-2 sm:p-3 hover:bg-black/80 transition-colors touch-manipulation"
                  onClick={() => setSelectedImage(selectedImage - 1)}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {gallery.images && selectedImage !== null && selectedImage < gallery.images.length - 1 && (
                <button
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/60 rounded-full p-2 sm:p-3 hover:bg-black/80 transition-colors touch-manipulation"
                  onClick={() => setSelectedImage(selectedImage + 1)}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
