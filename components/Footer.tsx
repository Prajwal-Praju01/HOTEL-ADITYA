import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { RESTAURANT_INFO } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">HOTEL ADITYA</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Authentic Nati Style Non-Vegetarian Restaurant serving traditional Karnataka cuisine
              with love and the finest spices.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${RESTAURANT_INFO.contact.phone}`}
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  {RESTAURANT_INFO.contact.displayPhone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  {RESTAURANT_INFO.address.locality}, {RESTAURANT_INFO.address.state}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  {RESTAURANT_INFO.hours.open} – {RESTAURANT_INFO.hours.close}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {RESTAURANT_INFO.services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-white/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} Hotel Aditya. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
