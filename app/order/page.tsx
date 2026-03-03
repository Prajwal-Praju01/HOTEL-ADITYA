'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { RESTAURANT_INFO } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'

export default function OrderPage() {
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
            Order Now
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose your preferred ordering method
          </motion.p>
        </div>
      </section>

      {/* Order Methods */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Available Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
                We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {RESTAURANT_INFO.services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-cream"
                  >
                    <div className="text-4xl mb-3">
                      {service === 'Dine-in' && '🍽️'}
                      {service === 'Takeaway' && '🥡'}
                      {service === 'No-contact Delivery' && '🛵'}
                    </div>
                    <h3 className="font-semibold text-charcoal text-lg">{service}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Online Delivery Platforms */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
                Order Online via Food Delivery Apps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Zomato */}
                <motion.a
                  href="https://www.zomato.com/bangalore/hotel-aditya-mahalakshmipuram-rajajinagar-bangalore/order?v=o2"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">Z</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-3 text-center">Zomato</h3>
                  <div className="space-y-2 text-sm text-charcoal-light mb-4">
                    <p>🚚 Delivery fee ₹40–₹60</p>
                    <p>⏱️ Delivers in 30–40 min</p>
                    <p className="text-xs">Service fee may apply</p>
                  </div>
                  <div className="bg-red-50 text-red-600 text-center py-2 px-4 rounded-lg font-semibold">
                    Order Now →
                  </div>
                </motion.a>

                {/* magicpin */}
                <motion.a
                  href="https://magicpin.in/app?action=walletrecharge&merchantId=218342&wfb=1&tabType=delivery&utm_source=reserve_google&utm_campaign=starter_integration&utm_medium=delivery&rwg_token=AFd1xnG8AyD2_BTtz03z1vgL65rjUXCjTXsNK3nXfO_tYabCo-ap6R0NvU2TaqtJEyP24mtb1i62SsMCxWQ6-zXzqlMd3l8Bmw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-3 text-center">magicpin</h3>
                  <div className="space-y-2 text-sm text-charcoal-light mb-4">
                    <p>🚚 Delivery fee ₹25–₹80</p>
                    <p>⚡ Delivers in 15–20 min</p>
                    <p className="text-xs">Service fee may apply</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 text-center py-2 px-4 rounded-lg font-semibold">
                    Order Now →
                  </div>
                </motion.a>

                {/* Swiggy */}
                <motion.a
                  href="https://www.swiggy.com/city/bangalore/hotel-aditya-%28mahalakshmipuram%29-rajajinagar-rajajinagar-rest495520?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">S</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-3 text-center">Swiggy</h3>
                  <div className="space-y-2 text-sm text-charcoal-light mb-4">
                    <p>🚚 Delivery fees up to ₹45</p>
                    <p>⏱️ Delivers in 30–45 min</p>
                    <p className="text-xs">Service fee may apply</p>
                  </div>
                  <div className="bg-orange-50 text-orange-600 text-center py-2 px-4 rounded-lg font-semibold">
                    Order Now →
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Direct Order Methods */}
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6 text-center">
                Or Order Directly
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Order */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone size={40} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Call to Order</h3>
                  <p className="text-charcoal-light mb-6">
                    Speak directly with our staff to place your order for pickup or delivery
                  </p>
                  <a
                    href={`tel:${RESTAURANT_INFO.contact.phone}`}
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  >
                    {RESTAURANT_INFO.contact.displayPhone}
                  </a>
                </motion.div>

                {/* WhatsApp Order */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
                    WhatsApp Order
                  </h3>
                  <p className="text-charcoal-light mb-6">
                    Send us your order via WhatsApp for quick and easy ordering
                  </p>
                  <a
                    href={getWhatsAppUrl(
                      RESTAURANT_INFO.contact.whatsapp,
                      'Hi! I would like to place an order at Hotel Aditya.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  >
                    Order via WhatsApp
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Dine-in Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-earthy-brown to-earthy-dark rounded-2xl shadow-xl p-8 text-center text-white"
            >
              <MapPin size={40} className="mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">Visit Us for Dine-in</h3>
              <p className="text-white/90 mb-4">
                Experience our warm hospitality and authentic ambiance in person
              </p>
              <p className="text-white/80 mb-6">
                {RESTAURANT_INFO.address.line1}, {RESTAURANT_INFO.address.locality}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={RESTAURANT_INFO.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-cream text-charcoal font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Hours Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <p className="text-charcoal-light">
                <span className="font-semibold text-charcoal">Opening Hours:</span>{' '}
                {RESTAURANT_INFO.hours.open} – {RESTAURANT_INFO.hours.close} (All Days)
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
