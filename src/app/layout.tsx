import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anupam ❤️ Aastha - Wedding Invitation',
  description: 'Join us as we celebrate our special day! Wedding invitation with all the details you need.',
  keywords: ['wedding', 'invitation', 'celebration', 'love', 'marriage'],
  authors: [{ name: 'Anupam & Aastha' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Anupam ❤️ Aastha - Wedding Invitation',
    description: 'Join us as we celebrate our special day!',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anupam ❤️ Aastha - Wedding Invitation',
    description: 'Join us as we celebrate our special day!',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
