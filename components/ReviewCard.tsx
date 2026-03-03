'use client'

import { motion } from 'framer-motion'
import { Star, BadgeCheck } from 'lucide-react'

interface ReviewCardProps {
  author: string
  rating: number
  text: string
  date: string
  isLocalGuide?: boolean
  delay?: number
}

export default function ReviewCard({
  author,
  rating,
  text,
  date,
  isLocalGuide = false,
  delay = 0,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col"
    >
      {/* Rating Stars - Moved to top for better visual hierarchy */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < rating ? '#FFD700' : 'none'}
            stroke={i < rating ? '#FFD700' : '#D1D5DB'}
            className="transition-all"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-charcoal text-base leading-relaxed mb-6 flex-1">{text}</p>

      {/* Author Info - Moved to bottom */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-charcoal">{author}</h4>
            {isLocalGuide && (
              <BadgeCheck size={16} className="text-primary" aria-label="Local Guide" />
            )}
          </div>
          <p className="text-xs text-charcoal-light mt-1">{date}</p>
        </div>
      </div>
    </motion.div>
  )
}
