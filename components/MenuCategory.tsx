'use client'

import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/utils'

interface MenuItem {
  name: string
  description: string
  price: number
  popular?: boolean
}

interface MenuCategoryProps {
  title: string
  emoji: string
  items: MenuItem[]
  delay?: number
}

export default function MenuCategory({ title, emoji, items, delay = 0 }: MenuCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-primary/20">
        <span className="text-4xl">{emoji}</span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">{title}</h3>
      </div>

      {/* Menu Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.05 }}
            className="flex justify-between items-start gap-4 pb-4 border-b border-gray-200 last:border-0"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-charcoal text-lg">{item.name}</h4>
                {item.popular && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                    POPULAR
                  </span>
                )}
                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">
                  NON-VEG
                </span>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed">{item.description}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-xl font-bold text-primary">{formatPrice(item.price)}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
