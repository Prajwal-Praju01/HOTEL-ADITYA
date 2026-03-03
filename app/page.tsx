'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import FeaturedDishes from '@/components/FeaturedDishes'
import ReviewCard from '@/components/ReviewCard'
import LocationSection from '@/components/LocationSection'
import CTASection from '@/components/CTASection'
import { WHY_CHOOSE_US, FEATURED_REVIEWS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-charcoal-light leading-relaxed"
            >
              At Hotel Aditya, we bring you the authentic taste of Karnataka&apos;s rural heartland
              with our traditional Nati-style cooking. Every dish is prepared using age-old recipes
              and the finest spices, creating flavors that transport you to the villages of
              Karnataka. Our commitment to quality, generous portions, and warm hospitality has made
              us a beloved destination for families seeking genuine non-vegetarian delicacies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <FeaturedDishes />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Why People Love Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              What makes us the preferred choice for authentic Nati cuisine
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-cream hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Highlight */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              Rated 4.4 ⭐ by 7,381+ Happy Customers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map((review, index) => (
              <ReviewCard key={review.author} {...review} delay={index * 0.1} />
            ))}
          </div>

          {/* View All Reviews Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="/reviews"
              className="inline-block bg-white hover:bg-primary hover:text-white text-charcoal font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary"
            >
              Read All Reviews →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <LocationSection />

      {/* CTA */}
      <CTASection />
    </>
  )
}
