'use client'

import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Users, Heart, Award, Clock } from 'lucide-react'
import CTASection from '@/components/CTASection'
import { RESTAURANT_INFO } from '@/lib/constants'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Authenticity',
      description:
        'We stay true to traditional Karnataka recipes passed down through generations, ensuring every bite is authentic.',
    },
    {
      icon: <Award size={40} />,
      title: 'Quality',
      description:
        'Only the freshest ingredients and finest spices go into our dishes, maintaining the highest standards.',
    },
    {
      icon: <Users size={40} />,
      title: 'Family-Friendly',
      description:
        'A welcoming atmosphere perfect for families to gather and enjoy delicious meals together.',
    },
    {
      icon: <Clock size={40} />,
      title: 'Consistency',
      description:
        'Same great taste, every single time. Our commitment to consistency has earned 7,381+ reviews.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-earthy-dark">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-4"
          >
            About Hotel Aditya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Where Traditional Nati Style Meets Modern Hospitality
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-charcoal-light text-lg leading-relaxed">
                <p>
                  Hotel Aditya was born from a passion for authentic Karnataka cuisine and a desire
                  to share the rich culinary heritage of our region with food lovers across
                  Bengaluru. What started as a small family venture has grown into one of the most
                  beloved Nati style restaurants in the city.
                </p>
                <p>
                  Our name &quot;Nati Style&quot; refers to the traditional rural cooking methods of
                  Karnataka, where every dish is prepared with care, using time-honored techniques
                  and the perfect blend of aromatic spices. This rustic approach to cooking brings
                  out flavors that are bold, authentic, and unforgettable.
                </p>
                <p>
                  Located in the heart of Nagapura, opposite Sri Chaitanya Techno School on Pipeline
                  Road, we&apos;ve become a weekend favorite for families seeking hearty, affordable,
                  and genuinely delicious non-vegetarian food. Our signature dishes like Mutton
                  Chops, Chicken Biryani, and the traditional Ragi Mudde have earned rave reviews
                  from over 7,000 satisfied customers.
                </p>
                <p>
                  Today, we continue our mission: to serve food that tastes like home, portions that
                  satisfy, and hospitality that warms the heart. Every meal we serve is a
                  celebration of Karnataka&apos;s vibrant food culture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">What drives us every single day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-cream hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-charcoal to-earthy-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">4.4★</div>
              <p className="text-white/80 text-lg">Google Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">7,381+</div>
              <p className="text-white/80 text-lg">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">₹200-400</div>
              <p className="text-white/80 text-lg">Affordable Pricing</p>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
