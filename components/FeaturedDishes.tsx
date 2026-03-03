'use client'

import { motion } from 'framer-motion'
import { FEATURED_DISHES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'

export default function FeaturedDishes() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Signature Dishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Handpicked favorites loved by thousands
          </motion.p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_DISHES.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-charcoal-light">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-charcoal-light mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{formatPrice(dish.price)}</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                    NON-VEG
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
