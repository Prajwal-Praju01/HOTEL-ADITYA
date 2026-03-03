import { Metadata } from 'next'
import ReviewStats from '@/components/ReviewStats'
import ReviewCard from '@/components/ReviewCard'
import CTASection from '@/components/CTASection'
import { FEATURED_REVIEWS, RESTAURANT_INFO } from '@/lib/constants'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Customer Reviews - 4.4★ Rating',
  description:
    'Read what 7,381+ customers say about Hotel Aditya. Rated 4.4 stars on Google for authentic Nati style food, generous portions, and excellent service.',
  openGraph: {
    title: 'Reviews | Hotel Aditya - 4.4★ by 7,381+ Customers',
    description: 'See why thousands of customers love our authentic Nati style cuisine',
  },
}

export default function ReviewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://hoteladitya.vercel.app' },
    { name: 'Reviews', url: 'https://hoteladitya.vercel.app/reviews' },
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
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            Customer Reviews
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            See why {RESTAURANT_INFO.reviewCount.toLocaleString()}+ customers love our authentic
            Nati style cuisine
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Stats Column */}
            <div className="lg:col-span-1">
              <ReviewStats />
            </div>

            {/* Reviews Column */}
            <div className="lg:col-span-2 space-y-6">
              {FEATURED_REVIEWS.map((review, index) => (
                <ReviewCard key={review.author} {...review} delay={index * 0.1} />
              ))}

              {/* Additional Reviews */}
              <ReviewCard
                author="Deepak R"
                rating={5}
                text="Amazing food quality! The mutton biryani is the best I've had in Bangalore. The prices are very reasonable and the service is quick. Highly recommend for anyone who loves authentic non-veg food."
                date="1 week ago"
                isLocalGuide={false}
                delay={0.3}
              />

              <ReviewCard
                author="Anita Kumari"
                rating={4}
                text="Great place for family dinners. The portions are huge and easily shareable. The chicken lollipop and boti fry were exceptional. The only downside is parking can be a bit challenging during weekends."
                date="2 weeks ago"
                isLocalGuide={true}
                delay={0.4}
              />

              <ReviewCard
                author="Suresh Gowda"
                rating={5}
                text="This is my go-to place for authentic Karnataka style mutton. The keema masala and mutton chops remind me of my hometown. Affordable prices and great taste. What more can you ask for?"
                date="3 weeks ago"
                isLocalGuide={false}
                delay={0.5}
              />

              <ReviewCard
                author="Lakshmi Devi"
                rating={4}
                text="Loved the ragi mudde with chicken curry! It's exactly like how my grandmother used to make. The ambiance is simple but clean. Perfect for a hearty traditional meal."
                date="1 month ago"
                isLocalGuide={true}
                delay={0.6}
              />
            </div>
          </div>

          {/* Google Review CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Share Your Experience
            </h2>
            <p className="text-charcoal-light text-lg mb-8 max-w-2xl mx-auto">
              We value your feedback! Leave us a review on Google and help others discover
              authentic Nati style cuisine.
            </p>
            <a
              href={RESTAURANT_INFO.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Write a Google Review
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
