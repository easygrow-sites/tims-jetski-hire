import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices, getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import { getServiceImage } from '@/lib/images';
import { notFound } from 'next/navigation';

type Props = {
  params: { service: string };
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug: string) => ({
    service: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.name} | Tims Jetski Hire Gold Coast`,
    description: service.description,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  if (!service) notFound();

  const allServices = getAllServices();
  const relatedServices = allServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Generate service-specific content based on service type
  const getServiceContent = () => {
    switch (service.slug) {
      case 'jetski-rental':
        return {
          benefits: [
            'Latest model jetskis maintained to perfection',
            'Flexible rental periods from 30 minutes to full day',
            'No license required - full safety briefing provided',
            'All safety equipment included',
            'Convenient Gold Coast locations',
            'Competitive pricing with no hidden fees'
          ],
          process: [
            'Book online or call us to reserve your jetski',
            'Arrive 15 minutes early for safety briefing',
            'Receive your equipment and get fitted for life jacket',
            'Enjoy your thrilling water adventure',
            'Return the jetski and share your experience'
          ],
          faqs: [
            { q: 'Do I need a license?', a: 'No license is required. We provide a comprehensive safety briefing before you head out.' },
            { q: 'What\'s included in the rental?', a: 'Jetski, life jacket, safety equipment, and full instruction are all included in the rental price.' },
            { q: 'Can I take a passenger?', a: 'Yes! Most of our jetskis can accommodate 1-2 passengers. The rider must be 18+ and passengers can be 8+.' },
            { q: 'What happens if I damage the jetski?', a: 'We offer optional damage waiver insurance. Without it, you\'re responsible for the excess amount.' },
            { q: 'How far can I go?', a: 'We\'ll show you the designated area during your briefing. You\'ll have plenty of space to explore!' }
          ]
        };
      case 'guided-jetski-tours':
        return {
          benefits: [
            'Expert local guides showing hidden gems',
            'Small group sizes for personalized experience',
            'Explore areas you can\'t access alone',
            'Perfect for first-timers and experienced riders',
            'Photo opportunities at stunning locations',
            'All equipment and safety gear included'
          ],
          process: [
            'Choose your tour from our exciting options',
            'Meet your guide and group at the departure point',
            'Receive safety briefing and equipment',
            'Follow your guide on an unforgettable adventure',
            'Enjoy stops at beautiful locations for photos'
          ],
          faqs: [
            { q: 'How long are the tours?', a: 'Our tours range from 1 hour to full-day adventures, depending on the package you choose.' },
            { q: 'What if I\'ve never ridden before?', a: 'Perfect! Our guides are experienced instructors and will ensure you feel confident and safe.' },
            { q: 'How many people per tour?', a: 'We keep groups small, typically 4-8 riders, ensuring everyone gets personal attention.' },
            { q: 'What do I need to bring?', a: 'Just swimwear, towel, sunscreen, and your camera! We provide everything else.' },
            { q: 'Are tours weather dependent?', a: 'Yes, safety first! We\'ll reschedule or refund if conditions aren\'t suitable.' }
          ]
        };
      case 'jetski-lessons':
        return {
          benefits: [
            'Certified professional instructors',
            'Structured learning program for all skill levels',
            'One-on-one or small group lessons available',
            'Learn proper techniques and safety procedures',
            'Build confidence on the water',
            'Certificate of completion provided'
          ],
          process: [
            'Book your lesson at your preferred skill level',
            'Meet your certified instructor',
            'Start with theory and safety on dry land',
            'Practice with instructor guidance on the water',
            'Receive feedback and tips for improvement'
          ],
          faqs: [
            { q: 'I\'ve never been on a jetski. Can I still take lessons?', a: 'Absolutely! Our beginner lessons are designed specifically for first-time riders.' },
            { q: 'How long is each lesson?', a: 'Lessons are typically 1-2 hours depending on the package. Private lessons can be customized.' },
            { q: 'Will I get a certificate?', a: 'Yes! You\'ll receive a certificate of completion that demonstrates your training.' },
            { q: 'Can I book lessons for my kids?', a: 'Children 12+ can take lessons with parental consent. We have special youth programs available.' },
            { q: 'What if I need more than one lesson?', a: 'We offer multi-lesson packages at discounted rates for ongoing development.' }
          ]
        };
      default:
        return {
          benefits: [
            'Premium quality equipment and service',
            'Experienced and certified staff',
            'Flexible scheduling to suit your needs',
            'Competitive pricing across Gold Coast',
            'Full safety briefing and equipment provided',
            'Satisfaction guaranteed'
          ],
          process: [
            'Contact us to discuss your requirements',
            'We\'ll create a customized package for you',
            'Confirm your booking with easy payment',
            'Arrive ready for your adventure',
            'Enjoy an unforgettable experience'
          ],
          faqs: [
            { q: 'How do I book this service?', a: 'Call us on 1300 555 123 or use our online contact form for a quick quote.' },
            { q: 'What\'s included?', a: 'All equipment, safety gear, instruction, and support are included in the price.' },
            { q: 'Do you offer group discounts?', a: 'Yes! Groups of 4+ receive special discounted rates. Contact us for details.' },
            { q: 'What\'s your cancellation policy?', a: 'Free cancellation up to 48 hours before. Weather cancellations are fully refundable.' },
            { q: 'Is this suitable for beginners?', a: 'Absolutely! We cater to all experience levels with appropriate instruction and support.' }
          ]
        };
    }
  };

  const content = getServiceContent();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={getServiceImage(service.slug, 0)}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:1300555123"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition text-center"
            >
              Call: 1300 555 123
            </a>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition text-center border-2 border-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description} Our {service.name.toLowerCase()} service is designed to give you the ultimate Gold Coast water experience with professional equipment, expert guidance, and unbeatable customer service.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're a first-timer looking for an introduction to jetskiing or an experienced rider seeking the thrill of the Gold Coast waters, our {service.name.toLowerCase()} is perfect for you. We pride ourselves on delivering safe, fun, and memorable experiences for all our customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located across multiple Gold Coast locations, we make it easy and convenient to access our premium jetski services. Book today and discover why we're the Gold Coast's most trusted jetski provider.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={getServiceImage(service.slug, 1)}
                alt={`${service.name} on Gold Coast`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Our {service.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary-100 rounded-full p-2 mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            {content.process.map((step: string, idx: number) => (
              <div key={idx} className="flex items-start mb-8">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="pt-1">
                  <p className="text-gray-700 text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {content.faqs.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, idx: number) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedService.name}</h3>
                  <p className="text-gray-600 mb-4">{relatedService.description}</p>
                  <span className="text-primary-600 font-semibold hover:underline">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your {service.name}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for availability and pricing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300555123"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Call: 1300 555 123
            </a>
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
