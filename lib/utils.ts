import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isRestaurantOpen(): boolean {
  const now = new Date()
  const currentHour = now.getHours()
  return currentHour >= 12 && currentHour < 23
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3')
}

export function formatPrice(price: number): string {
  return `₹${price}`
}

export function getGoogleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const baseUrl = `https://wa.me/${phone.replace(/\D/g, '')}`
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}

export function formatRating(rating: number): string {
  return rating.toFixed(1)
}
