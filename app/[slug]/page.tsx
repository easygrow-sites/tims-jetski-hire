import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices, getServiceBySlug } from '@/lib/services';
import { getAllLocations, getLocationBySlug } from '@/lib/locations';
import { getServiceImage } from '@/lib/images';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

function parseSlug(slug: string): { serviceSlug: string; locationSlug: string } | null {
  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;
  return { serviceSlug: parts[0], locationSlug: parts[1] };
}

export async function generateStaticParams() {
  const services = getAllServices();
  const locations = getAllLocations();
  const params = [];

  for (const service of services) {
    for (const location of locations) {
      params.push({ slug: `${service.slug}-in-${location.slug}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Not Found' };

  const service = getServiceBySlug(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) return { title: 'Not Found' };

  return {
    title: `${service.name} in ${location.name} - Fast Response | Tims Jetski Hire`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Gold Coast. Expert team, premium equipment, competitive pricing. Call 1300 555 123 for instant booking.`,
    keywords: `${service.name}, ${location.name}, jetski hire, Gold Coast, ${service.slug}, ${location.name} jetski`,
  };
}

export default function ServiceLocationPage({ params }: Props) {
  const parsed = parseSlug(params.slug);
  if (!parsed) notFound();

  const service = getServiceBySlug(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) notFound();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={getServiceImage(service.slug, 0)}
            alt={`${service.name} in ${location.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional {service.name} in {location.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Looking for expert {service.name.toLowerCase()} in {location.name}? Tims Jetski Hire provides fast, professional, and reliable jetski services throughout the Gold Coast. Available 7 days a week with competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:1300555123"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition text-center"
            >
              Call Now: 1300 555 123
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

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Serving {location.name}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Available Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5★</div>
              <div className="text-gray-600 text-sm">Rated by {location.name} Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert {service.name} Services in {location.name}
              </h2>

              <div className="prose max-w-none text-gray-700 space-y-4 mb-8">
                <p className="text-lg leading-relaxed">
                  When you need professional <strong>{service.name.toLowerCase()} in {location.name}</strong>, Tims Jetski Hire is your trusted local provider. We've been serving the {location.name} community for over 15 years, delivering exceptional jetski services with a commitment to quality, safety, and customer satisfaction.
                </p>

                <p className="leading-relaxed">
                  Our {service.name.toLowerCase()} service in {location.name} is designed to meet the unique needs of Gold Coast residents and visitors. Whether you're looking for a thrilling water adventure, professional instruction, or a memorable group experience, our expert team has the knowledge and equipment to deliver outstanding results.
                </p>

                <p className="leading-relaxed">
                  What sets us apart as the best choice for {service.name.toLowerCase()} in {location.name}? We combine years of local experience with state-of-the-art equipment and a genuine passion for water sports. Our certified team understands the {location.name} area intimately, from the best launch spots to the most exciting water routes, ensuring you get the maximum enjoyment from your jetski experience.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Choose Our {service.name} in {location.name}?
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Local {location.name} Experts:</strong> Our team knows the area inside out and can guide you to the best experiences</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Fast Response Times:</strong> Quick booking and flexible scheduling to suit your {location.name} lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Premium Equipment:</strong> Latest model jetskis maintained to the highest safety standards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Competitive Pricing:</strong> Best rates for {service.name.toLowerCase()} in the {location.name} area</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Safety First:</strong> Fully licensed, insured, and certified with comprehensive safety protocols</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Customer Satisfaction:</strong> Hundreds of 5-star reviews from happy {location.name} customers</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our {service.name} Process in {location.name}
                </h3>

                <p className="leading-relaxed">
                  We've streamlined our process to make booking {service.name.toLowerCase()} in {location.name} as easy as possible. Simply call us at <a href="tel:1300555123" className="text-primary-600 font-semibold hover:underline">1300 555 123</a> or fill out our online contact form. We'll discuss your requirements, provide a transparent quote, and schedule a time that works for you.
                </p>

                <p className="leading-relaxed">
                  On the day of your booking, arrive at our convenient {location.name} location where our friendly team will greet you. We'll provide a comprehensive safety briefing, fit you with all necessary equipment, and ensure you're comfortable before you hit the water. Throughout your experience, our team is available for support and guidance.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Serving {location.name} and Surrounding Areas
                </h3>

                <p className="leading-relaxed">
                  While we're proud to be the go-to provider for {service.name.toLowerCase()} in {location.name}, we also service all surrounding Gold Coast suburbs. Whether you're in {location.name} proper or nearby areas, we're committed to providing the same high level of service and expertise. Our local knowledge extends throughout the entire Gold Coast region, making us your ideal choice no matter where you are.
                </p>
              </div>

              {/* Image */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src={getServiceImage(service.slug, 1)}
                  alt={`${service.name} service in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions - {service.name} in {location.name}
                </h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">How quickly can you provide {service.name.toLowerCase()} in {location.name}?</h4>
                    <p className="text-gray-700">We offer same-day service for most bookings in {location.name}. Call us at 1300 555 123 and we'll do our best to accommodate your schedule, including weekends and holidays.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">What areas of {location.name} do you service?</h4>
                    <p className="text-gray-700">We service all of {location.name} and surrounding suburbs. Our team is familiar with the entire area and can quickly reach your preferred location.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Do you offer any guarantees for {service.name.toLowerCase()} in {location.name}?</h4>
                    <p className="text-gray-700">Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with our service, we'll make it right.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">How much does {service.name.toLowerCase()} cost in {location.name}?</h4>
                    <p className="text-gray-700">Pricing varies based on your specific needs. Contact us for a free, no-obligation quote. We offer competitive rates and transparent pricing with no hidden fees.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-gray-900 mb-2">Are you licensed and insured in {location.name}?</h4>
                    <p className="text-gray-700">Absolutely. We are fully licensed, insured, and certified to provide {service.name.toLowerCase()} throughout Gold Coast including {location.name}. Your safety and satisfaction are our top priorities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Card */}
                <div className="bg-primary-600 text-white p-8 rounded-lg shadow-xl mb-6">
                  <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
                  <p className="mb-6">Ready to book your {service.name.toLowerCase()} in {location.name}?</p>
                  <a
                    href="tel:1300555123"
                    className="block bg-white text-primary-600 text-center px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition mb-4"
                  >
                    📞 Call: 1300 555 123
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-primary-700 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-primary-800 transition border-2 border-white"
                  >
                    Request Free Quote
                  </Link>
                </div>

                {/* Service Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Service Hours</h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">7AM - 7PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span className="font-semibold">7AM - 7PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Public Holidays:</span>
                      <span className="font-semibold">8AM - 6PM</span>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">Service Area</h3>
                  <p className="text-gray-700 text-sm mb-3">Proudly serving:</p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>✓ {location.name}</li>
                    <li>✓ All Gold Coast Suburbs</li>
                    <li>✓ Surrounding Areas</li>
                  </ul>
                </div>

                {/* Other Services */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4">Other Services in {location.name}</h3>
                  <div className="space-y-2">
                    <Link href={`/services/${service.slug}`} className="block text-primary-600 hover:underline text-sm">
                      → {service.name} (All Locations)
                    </Link>
                    <Link href={`/locations/${location.slug}`} className="block text-primary-600 hover:underline text-sm">
                      → All Services in {location.name}
                    </Link>
                    <Link href="/services" className="block text-primary-600 hover:underline text-sm">
                      → View All Services
                    </Link>
                    <Link href="/locations" className="block text-primary-600 hover:underline text-sm">
                      → View All Locations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need {service.name} in {location.name}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now for fast service and competitive pricing!
          </p>
          <a
            href="tel:1300555123"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Call: 1300 555 123
          </a>
        </div>
      </section>
    </div>
  );
}
