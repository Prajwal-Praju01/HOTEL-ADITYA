import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { RESTAURANT_INFO, SEO_KEYWORDS } from '@/lib/constants'
import { generateRestaurantSchema, generateLocalBusinessSchema } from '@/lib/schema'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hoteladitya.vercel.app'),
  title: {
    default: 'Hotel Aditya - Authentic Nati Style Non-Veg Restaurant in Bengaluru',
    template: '%s | Hotel Aditya',
  },
  description:
    'Experience authentic Karnataka Nati Style non-vegetarian cuisine at Hotel Aditya, Bengaluru. Rated 4.4★ by 7,381+ customers. ₹200-400 per person. Dine-in, Takeaway & Delivery available.',
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'Hotel Aditya' }],
  creator: 'Hotel Aditya',
  publisher: 'Hotel Aditya',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://hoteladitya.vercel.app',
    title: 'Hotel Aditya - Authentic Nati Style Non-Veg Restaurant in Bengaluru',
    description:
      '4.4★ rated Nati Style Restaurant in Nagapura, Bengaluru. Authentic Karnataka cuisine, family-friendly, affordable pricing. Open 12 PM - 11 PM.',
    siteName: 'Hotel Aditya',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Aditya - Nati Style Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Aditya - Authentic Nati Style Non-Veg Restaurant',
    description: '4.4★ | 7,381 Reviews | ₹200-400 | Traditional Karnataka Cuisine',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateRestaurantSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
