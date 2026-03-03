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
      className="card p-6 h-full flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-charcoal text-lg">{author}</h4>
            {isLocalGuide && (
              <BadgeCheck size={18} className="text-primary" aria-label="Local Guide" />
            )}
          </div>
          <p className="text-sm text-charcoal-light">{date}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? '#FFD700' : 'none'}
            stroke={i < rating ? '#FFD700' : '#D1D5DB'}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-charcoal-light leading-relaxed flex-1">{text}</p>
    </motion.div>
  )
}
