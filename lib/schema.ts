import { RESTAURANT_INFO } from './constants'

export const generateRestaurantSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_INFO.name,
    description: RESTAURANT_INFO.tagline,
    image: 'https://hotelditya.vercel.app/images/restaurant-exterior.jpg',
    '@id': 'https://hoteladitya.vercel.app',
    url: 'https://hoteladitya.vercel.app',
    telephone: RESTAURANT_INFO.contact.phone,
    priceRange: `${RESTAURANT_INFO.priceRange.currency}${RESTAURANT_INFO.priceRange.min}-${RESTAURANT_INFO.priceRange.currency}${RESTAURANT_INFO.priceRange.max}`,
    servesCuisine: ['Indian', 'Karnataka', 'Non-Vegetarian'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${RESTAURANT_INFO.address.line1}, ${RESTAURANT_INFO.address.line2}`,
      addressLocality: RESTAURANT_INFO.address.locality,
      addressRegion: RESTAURANT_INFO.address.state,
      postalCode: RESTAURANT_INFO.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_INFO.location.lat,
      longitude: RESTAURANT_INFO.location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RESTAURANT_INFO.rating.toString(),
      reviewCount: RESTAURANT_INFO.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    hasMenu: 'https://hoteladitya.vercel.app/menu',
    acceptsReservations: 'False',
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: RESTAURANT_INFO.name,
    image: 'https://hoteladitya.vercel.app/images/restaurant-exterior.jpg',
    '@id': 'https://hoteladitya.vercel.app',
    url: 'https://hoteladitya.vercel.app',
    telephone: RESTAURANT_INFO.contact.phone,
    priceRange: `${RESTAURANT_INFO.priceRange.currency}${RESTAURANT_INFO.priceRange.min}-${RESTAURANT_INFO.priceRange.currency}${RESTAURANT_INFO.priceRange.max}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${RESTAURANT_INFO.address.line1}, ${RESTAURANT_INFO.address.line2}`,
      addressLocality: RESTAURANT_INFO.address.locality,
      addressRegion: RESTAURANT_INFO.address.state,
      postalCode: RESTAURANT_INFO.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_INFO.location.lat,
      longitude: RESTAURANT_INFO.location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '23:00',
      },
    ],
  }
}

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
