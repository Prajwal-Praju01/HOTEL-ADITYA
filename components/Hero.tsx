'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, Phone, MapPin } from 'lucide-react'
import { RESTAURANT_INFO } from '@/lib/constants'
import { formatRating } from '@/lib/utils'
import OpenIndicator from './OpenIndicator'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-charcoal via-charcoal-light to-earthy-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6"
          >
            <MapPin size={18} />
            <span className="text-sm font-medium">Nagapura, Bengaluru</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {RESTAURANT_INFO.tagline}
          </motion.h1>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8"
          >
            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={24} fill="currentColor" />
              <span className="text-white text-xl font-bold">
                {formatRating(RESTAURANT_INFO.rating)}
              </span>
            </div>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <span className="text-white/90 text-lg">
              {RESTAURANT_INFO.reviewCount.toLocaleString()} Reviews
            </span>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <span className="text-white/90 text-lg">
              {RESTAURANT_INFO.priceRange.currency}
              {RESTAURANT_INFO.priceRange.min}–{RESTAURANT_INFO.priceRange.currency}
              {RESTAURANT_INFO.priceRange.max}
            </span>
            <div className="w-px h-6 bg-white/30 hidden sm:block" />
            <OpenIndicator />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the authentic taste of traditional Karnataka cuisine with our rustic
            Nati-style preparations. Serving generations with love and the finest spices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Menu
            </Link>
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-cream text-charcoal font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <Link
              href="/order"
              className="w-full sm:w-auto bg-earthy-brown hover:bg-earthy-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Order Online
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFF8DC"
          />
        </svg>
      </div>
    </section>
  )
}
