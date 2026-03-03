import { Metadata } from 'next'
import MenuCategory from '@/components/MenuCategory'
import CTASection from '@/components/CTASection'
import { MENU_CATEGORIES } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Menu - Nati Style Non-Veg Dishes',
  description:
    'Explore our authentic Nati style menu featuring Chicken Biryani, Mutton Chops, Ragi Mudde, Leg Soup, and more traditional Karnataka delicacies. ₹200-400 per person.',
  openGraph: {
    title: 'Menu | Hotel Aditya - Nati Style Restaurant',
    description: 'Browse our full menu of authentic Karnataka Nati Style non-vegetarian dishes',
  },
}

export default function MenuPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hoteladitya.vercel.app' },
    { name: 'Menu', url: 'https://hoteladitya.vercel.app/menu' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal to-charcoal-light">
        <div className="container-custom text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Authentic Karnataka Nati Style cuisine prepared with traditional recipes and the finest
            spices
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="space-y-8">
            <MenuCategory
              title={MENU_CATEGORIES.chicken.title}
              emoji={MENU_CATEGORIES.chicken.emoji}
              items={MENU_CATEGORIES.chicken.items}
              delay={0}
            />
            <MenuCategory
              title={MENU_CATEGORIES.naatiKoli.title}
              emoji={MENU_CATEGORIES.naatiKoli.emoji}
              items={MENU_CATEGORIES.naatiKoli.items}
              delay={0.1}
            />
            <MenuCategory
              title={MENU_CATEGORIES.biryani.title}
              emoji={MENU_CATEGORIES.biryani.emoji}
              items={MENU_CATEGORIES.biryani.items}
              delay={0.2}
            />
            <MenuCategory
              title={MENU_CATEGORIES.mutton.title}
              emoji={MENU_CATEGORIES.mutton.emoji}
              items={MENU_CATEGORIES.mutton.items}
              delay={0.3}
            />
            <MenuCategory
              title={MENU_CATEGORIES.egg.title}
              emoji={MENU_CATEGORIES.egg.emoji}
              items={MENU_CATEGORIES.egg.items}
              delay={0.4}
            />
            <MenuCategory
              title={MENU_CATEGORIES.rice.title}
              emoji={MENU_CATEGORIES.rice.emoji}
              items={MENU_CATEGORIES.rice.items}
              delay={0.5}
            />
          </div>

          {/* Note */}
          <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <p className="text-charcoal-light text-center">
              <span className="font-semibold text-charcoal">Note:</span> Prices are approximate and
              subject to change. Please contact us for the most current pricing. All prices are in
              Indian Rupees (₹).
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
