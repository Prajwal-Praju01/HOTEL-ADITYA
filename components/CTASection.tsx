'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { RESTAURANT_INFO } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-earthy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Experience Authentic Nati Style?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Visit us today or order online for pickup and delivery. We&apos;re open from{' '}
            {RESTAURANT_INFO.hours.open} to {RESTAURANT_INFO.hours.close}, 7 days a week.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-cream text-charcoal font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>

            <a
              href={getWhatsAppUrl(
                RESTAURANT_INFO.contact.whatsapp,
                'Hi! I would like to make an order at Hotel Aditya.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Order</span>
            </a>

            <Link
              href="/order"
              className="w-full sm:w-auto bg-earthy-brown hover:bg-earthy-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Order Online
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
