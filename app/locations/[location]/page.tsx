import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllLocations, getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import { getAllServices } from '@/lib/services';
import { getServiceImage } from '@/lib/images';
import { notFound } from 'next/navigation';

type Props = {
  params: { location: string };
};

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug: string) => ({
    location: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  if (!location) return { title: 'Location Not Found' };

  return {
    title: `Jetski Hire ${location.name} | Tims Jetski Hire Gold Coast`,
    description: `Professional jetski hire services in ${location.name}, Gold Coast. Rentals, tours, lessons and more. Call 1300 555 123 for instant booking.`,
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.location);
  if (!location) notFound();

  const services = getAllServices();
  const featuredServices = services.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200"
            alt={`Jetski in ${location.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jetski Hire in {location.name}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Experience the thrill of jetskiing in {location.name} with Gold Coast's premier jetski hire service. Premium equipment, expert guides, and unforgettable adventures.
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

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Jetski Services in {location.name}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Tims Jetski Hire is proud to serve the {location.name} community with the Gold Coast's best jetski rental and tour services. Whether you're a local resident or visiting {location.name}, we provide easy access to premium watercraft and professional guidance for an unforgettable water adventure.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our {location.name} service includes flexible rental options, exciting guided tours of the local waterways, professional lessons for beginners, and specialized packages for groups and events. With over 15 years of experience, we know exactly how to make your {location.name} jetski experience safe, thrilling, and memorable.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located conveniently for {location.name} residents and visitors, we offer fast booking, competitive pricing, and the latest jetski models maintained to the highest safety standards. Join thousands of satisfied customers who have trusted us with their Gold Coast water adventures.
              </p>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Why Choose Us in {location.name}?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fast response times for {location.name} customers
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Local knowledge of the best {location.name} water spots
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible scheduling to suit your {location.name} lifestyle
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing for {location.name} area
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200"
                  alt={`Jetski services in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Service Hours in {location.name}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-semibold">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Bookings:</strong> Call us for same-day availability in {location.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Services Available in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx: number) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={getServiceImage(service.slug, idx)}
                    alt={`${service.name} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.name} in {location.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What {location.name} Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Best jetski experience in {location.name}! The team was professional and the equipment was top-notch. Will definitely be back!"</p>
              <p className="font-semibold">Local Resident - {location.name}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"We booked a group tour from {location.name} and it was incredible! The guides were knowledgeable and made sure everyone had an amazing time."</p>
              <p className="font-semibold">Visitor - {location.name}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Living in {location.name}, I've tried several jetski companies. Tims is by far the best - great service, fair prices, and always reliable."</p>
              <p className="font-semibold">Regular Customer - {location.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your {location.name} Jetski Adventure Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call now for instant booking and special {location.name} resident discounts!
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
