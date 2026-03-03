'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { RESTAURANT_INFO } from '@/lib/constants'
import { getGoogleMapsUrl } from '@/lib/utils'
import OpenIndicator from './OpenIndicator'

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Visit Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              Located conveniently in Nagapura, Bengaluru
            </motion.p>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 mb-6"
            >
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Address</h3>
                <p className="text-charcoal-light leading-relaxed">
                  {RESTAURANT_INFO.address.line1}
                  <br />
                  {RESTAURANT_INFO.address.line2}
                  <br />
                  {RESTAURANT_INFO.address.line3}
                  <br />
                  {RESTAURANT_INFO.address.line4}
                  <br />
                  {RESTAURANT_INFO.address.locality}, {RESTAURANT_INFO.address.state}{' '}
                  {RESTAURANT_INFO.address.pincode}
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 mb-6"
            >
              <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Opening Hours</h3>
                <p className="text-charcoal-light">
                  {RESTAURANT_INFO.hours.open} – {RESTAURANT_INFO.hours.close}
                </p>
                <div className="mt-2">
                  <OpenIndicator showLabel />
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 mb-8"
            >
              <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone}`}
                  className="text-primary hover:text-primary-dark font-semibold text-lg"
                >
                  {RESTAURANT_INFO.contact.displayPhone}
                </a>
              </div>
            </motion.div>

            {/* Directions Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href={getGoogleMapsUrl(RESTAURANT_INFO.address.full)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Navigation size={20} />
              <span>Get Directions</span>
            </motion.a>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8!2d${RESTAURANT_INFO.location.lng}!3d${RESTAURANT_INFO.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Aditya Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
