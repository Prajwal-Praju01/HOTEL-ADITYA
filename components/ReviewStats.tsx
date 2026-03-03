'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { RESTAURANT_INFO, RATING_BREAKDOWN } from '@/lib/constants'
import { formatRating } from '@/lib/utils'

export default function ReviewStats() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Overall Rating */}
      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-charcoal mb-2">
          {formatRating(RESTAURANT_INFO.rating)}
        </div>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={24}
              fill={i < Math.floor(RESTAURANT_INFO.rating) ? '#FFD700' : 'none'}
              stroke={i < Math.floor(RESTAURANT_INFO.rating) ? '#FFD700' : '#D1D5DB'}
            />
          ))}
        </div>
        <p className="text-charcoal-light">
          Based on {RESTAURANT_INFO.reviewCount.toLocaleString()} reviews
        </p>
      </div>

      {/* Rating Breakdown */}
      <div className="space-y-3">
        {RATING_BREAKDOWN.map((rating, index) => (
          <motion.div
            key={rating.stars}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm font-medium text-charcoal w-8">{rating.stars}★</span>
            <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${rating.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
              />
            </div>
            <span className="text-sm text-charcoal-light w-12 text-right">
              {rating.percentage}%
            </span>
          </motion.div>
        ))}
      </div>

      {/* Google Review CTA */}
      <a
        href={RESTAURANT_INFO.social.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-full block text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
      >
        Leave a Google Review
      </a>
    </div>
  )
}
