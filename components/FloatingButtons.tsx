'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { RESTAURANT_INFO } from '@/lib/constants'
import { getWhatsAppUrl } from '@/lib/utils'

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button */}
      <a
        href={`tel:${RESTAURANT_INFO.contact.phone}`}
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call Now"
      >
        <Phone size={24} className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl(
          RESTAURANT_INFO.contact.whatsapp,
          'Hi! I would like to inquire about Hotel Aditya.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
      </a>
    </>
  )
}
