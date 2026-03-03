export const RESTAURANT_INFO = {
  name: 'HOTEL ADITYA',
  tagline: 'Authentic Nati Style Non-Veg in Bengaluru',
  category: 'Nati Style Non-Vegetarian Restaurant',
  rating: 4.4,
  reviewCount: 7381,
  priceRange: {
    min: 200,
    max: 400,
    currency: '₹',
  },
  contact: {
    phone: '+919019892963',
    displayPhone: '+91 90198 92963',
    whatsapp: '+919019892963',
  },
  hours: {
    open: '12:00 PM',
    close: '11:00 PM',
    openTime: 12,
    closeTime: 23,
  },
  address: {
    line1: '159 6th Main, Mahalaxmipura',
    line2: '1433 Pipeline Road',
    line3: 'Opp. Sri Chaitanya Techno School (Old Nandini Theatre)',
    line4: 'West of Chord Road 2nd Stage',
    locality: 'Nagapura, Bengaluru',
    state: 'Karnataka',
    pincode: '560086',
    full: '159 6th Main, Mahalaxmipura, 1433 Pipeline Road, Opp. Sri Chaitanya Techno School (Old Nandini Theatre), West of Chord Road 2nd Stage, Nagapura, Bengaluru, Karnataka 560086',
  },
  location: {
    lat: 12.9716,
    lng: 77.5946,
  },
  services: ['Dine-in', 'Takeaway', 'No-contact Delivery'],
  social: {
    googleMaps: 'https://maps.google.com/?q=HOTEL+ADITYA+Bengaluru',
  },
}

export const MENU_CATEGORIES = {
  chicken: {
    title: 'Chicken Items',
    emoji: '🍗',
    items: [
      {
        name: 'Chicken Masala',
        description: 'Classic chicken masala with rich gravy',
        price: 195,
        popular: true,
      },
      {
        name: 'Chicken Fry',
        description: 'Crispy fried chicken with spices',
        price: 195,
        popular: true,
      },
      {
        name: 'Chicken Pepper Dry',
        description: 'Dry chicken tossed with crushed pepper',
        price: 200,
        popular: false,
      },
      {
        name: 'Chilli Chicken',
        description: 'Indo-Chinese style spicy chicken',
        price: 200,
        popular: true,
      },
      {
        name: 'Chicken Kabab',
        description: 'Grilled chicken kababs',
        price: 200,
        popular: false,
      },
      {
        name: 'Chicken Lollipop',
        description: 'Crispy and spicy chicken lollipops',
        price: 220,
        popular: true,
      },
      {
        name: 'Chicken Biriyani',
        description: 'Aromatic basmati rice with tender chicken',
        price: 200,
        popular: true,
      },
    ],
  },
  naatiKoli: {
    title: 'Naati Koli (Traditional Chicken)',
    emoji: '🌶️',
    items: [
      {
        name: 'Naati Koli Masala',
        description: 'Traditional country chicken in rich masala',
        price: 275,
        popular: true,
      },
      {
        name: 'Naati Koli Fry',
        description: 'Country chicken fried to perfection',
        price: 285,
        popular: true,
      },
      {
        name: 'Naati Koli Dry',
        description: 'Dry preparation of country chicken',
        price: 285,
        popular: true,
      },
    ],
  },
  biryani: {
    title: 'Biriyani Items',
    emoji: '🍛',
    items: [
      {
        name: 'Mutton Biriyani',
        description: 'Rich and flavorful mutton biryani',
        price: 310,
        popular: true,
      },
      {
        name: 'Chicken Biriyani',
        description: 'Aromatic chicken biryani',
        price: 200,
        popular: true,
      },
      {
        name: 'Biriyani Rice (Full)',
        description: 'Fragrant biryani rice - full plate',
        price: 140,
        popular: false,
      },
      {
        name: 'Biriyani Rice (Half)',
        description: 'Fragrant biryani rice - half plate',
        price: 85,
        popular: false,
      },
      {
        name: 'Egg Biriyani',
        description: 'Egg biryani with aromatic spices',
        price: 170,
        popular: false,
      },
      {
        name: 'Veg Biriyani',
        description: 'Vegetable biryani',
        price: 150,
        popular: false,
      },
    ],
  },
  mutton: {
    title: 'Mutton Items',
    emoji: '🍖',
    items: [
      {
        name: 'Mutton Kurma',
        description: 'Mutton in rich kurma gravy',
        price: 295,
        popular: true,
      },
      {
        name: 'Mutton Masala',
        description: 'Spicy mutton masala curry',
        price: 300,
        popular: true,
      },
      {
        name: 'Mutton Fry',
        description: 'Dry fried mutton pieces',
        price: 300,
        popular: true,
      },
      {
        name: 'Mutton Pepper Dry',
        description: 'Mutton with crushed black pepper',
        price: 300,
        popular: false,
      },
      {
        name: 'Mutton Chops',
        description: 'Tender mutton chops',
        price: 295,
        popular: true,
      },
      {
        name: 'Nalli Fry',
        description: 'Bone marrow fry - a delicacy',
        price: 360,
        popular: true,
      },
      {
        name: 'Brain Fry / Dry',
        description: 'Delicately spiced brain fry',
        price: 200,
        popular: false,
      },
      {
        name: 'Mutton Kheema',
        description: 'Minced mutton curry',
        price: 270,
        popular: true,
      },
      {
        name: 'Mutton Kheema Half',
        description: 'Minced mutton curry - half portion',
        price: 140,
        popular: false,
      },
      {
        name: 'Mutton Kheema Fry / Dry',
        description: 'Dry minced mutton preparation',
        price: 280,
        popular: true,
      },
      {
        name: 'Egg Kheema Fry',
        description: 'Minced meat with eggs',
        price: 280,
        popular: false,
      },
      {
        name: 'Egg Boti Fry',
        description: 'Mutton pieces with eggs',
        price: 270,
        popular: false,
      },
      {
        name: 'Mutton Liver Fry / Dry',
        description: 'Spiced mutton liver',
        price: 260,
        popular: false,
      },
      {
        name: 'Head Mutton',
        description: 'Mutton head curry',
        price: 230,
        popular: false,
      },
      {
        name: 'Head Mutton Fry / Dry',
        description: 'Dry mutton head preparation',
        price: 250,
        popular: false,
      },
      {
        name: 'Boti',
        description: 'Mutton pieces curry',
        price: 230,
        popular: true,
      },
      {
        name: 'Boti Fry / Dry',
        description: 'Dry fried mutton pieces',
        price: 250,
        popular: true,
      },
    ],
  },
  egg: {
    title: 'Egg Items',
    emoji: '🥚',
    items: [
      {
        name: 'Egg Masala',
        description: 'Boiled eggs in spicy masala',
        price: 150,
        popular: true,
      },
      {
        name: 'Egg Chilli',
        description: 'Eggs in spicy chilli sauce',
        price: 150,
        popular: false,
      },
      {
        name: 'Boiled Egg',
        description: 'Simple boiled egg',
        price: 17,
        popular: false,
      },
    ],
  },
  rice: {
    title: 'Rice & Breads',
    emoji: '🍚',
    items: [
      {
        name: 'Ragi Ball (1 No.)',
        description: 'Traditional ragi mudde',
        price: 26,
        popular: true,
      },
      {
        name: 'Chapathi (1 No.)',
        description: 'Wheat flatbread',
        price: 26,
        popular: false,
      },
      {
        name: 'Parota (1 No.)',
        description: 'Layered flatbread',
        price: 30,
        popular: false,
      },
      {
        name: 'Rice (1 Plate)',
        description: 'Steamed white rice',
        price: 60,
        popular: false,
      },
      {
        name: 'Rice (Half Plate)',
        description: 'Steamed white rice - half portion',
        price: 40,
        popular: false,
      },
    ],
  },
}

export const FEATURED_DISHES = [
  {
    name: 'Chicken Biriyani',
    description: 'Aromatic basmati rice with tender chicken',
    image: '/images/chicken-biryani.jpg',
    price: 200,
  },
  {
    name: 'Mutton Chops',
    description: 'Tender mutton chops marinated and grilled',
    image: '/images/mutton-chops.jpg',
    price: 295,
  },
  {
    name: 'Chicken Lollipop',
    description: 'Crispy and spicy chicken lollipops',
    image: '/images/chicken-lollipop.jpg',
    price: 220,
  },
  {
    name: 'Nalli Fry',
    description: 'Bone marrow fry - a special delicacy',
    image: '/images/nalli-fry.jpg',
    price: 360,
  },
  {
    name: 'Mutton Kheema',
    description: 'Spicy minced mutton curry',
    image: '/images/mutton-keema.jpg',
    price: 270,
  },
  {
    name: 'Naati Koli Fry',
    description: 'Traditional country chicken fried',
    image: '/images/naati-koli.jpg',
    price: 285,
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Authentic Nati Flavour',
    description: 'Traditional Karnataka rural-style cooking with authentic spices',
    icon: '🌶️',
  },
  {
    title: 'Affordable Pricing',
    description: 'Premium quality food at budget-friendly prices (₹200-400)',
    icon: '💰',
  },
  {
    title: 'Large Portions',
    description: 'Generous servings that give you value for money',
    icon: '🍽️',
  },
  {
    title: 'Weekend Family Favorite',
    description: 'Perfect spot for family gatherings and celebrations',
    icon: '👨‍👩‍👧‍👦',
  },
]

export const FEATURED_REVIEWS = [
  {
    author: 'Rajesh Kumar',
    rating: 5,
    text: 'Best nati style restaurant in Bengaluru! The mutton chops are absolutely amazing. Authentic taste and great ambiance.',
    date: '2 weeks ago',
    isLocalGuide: true,
  },
  {
    author: 'Priya Sharma',
    rating: 4,
    text: 'Loved the chicken biryani and leg soup. Portions are huge and prices very reasonable. Perfect for family dinners!',
    date: '1 month ago',
    isLocalGuide: false,
  },
  {
    author: 'Venkatesh M',
    rating: 5,
    text: 'Authentic Karnataka flavors! The ragi mudde with mutton saaru reminded me of my hometown. Highly recommended!',
    date: '3 weeks ago',
    isLocalGuide: true,
  },
]

export const RATING_BREAKDOWN = [
  { stars: 5, percentage: 68 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 8 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 1 },
]

export const SEO_KEYWORDS = [
  'Best Nati Style Restaurant in Bengaluru',
  'Non Veg Restaurant in Mahalaxmipura',
  'Biryani near Pipeline Road',
  'Family Non Veg Restaurant near West of Chord Road',
  'Authentic Karnataka Food Bengaluru',
  'Mutton Restaurant Nagapura',
  'Best Chicken Biryani Bangalore',
  'Nati Style Cooking Karnataka',
]
