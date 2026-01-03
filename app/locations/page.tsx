import { Metadata } from 'next';
import LocationCard from '@/components/LocationCard';
import { getAllLocations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Service Areas | Tims Jetski Hire Gold Coast',
  description: 'Tims Jetski Hire services all suburbs across the Gold Coast. Find your local area and book your jetski adventure today.',
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas Across Gold Coast</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We provide premium jetski hire services throughout the entire Gold Coast region. Find your local area below.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving {locations.length}+ Locations
            </h2>
            <p className="text-xl text-gray-600">
              Click on your area to see specific services and local information
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.slug} name={location.name} slug={location.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available in All Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Quick service to all Gold Coast areas with flexible scheduling</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">Our team knows the best spots in each area for maximum fun</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">All Services Available</h3>
              <p className="text-gray-600">Full range of jetski services in every Gold Coast location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Service Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Surfers Paradise</h3>
              <p className="text-gray-600 mb-4">Experience the excitement of jetskiing in the heart of the Gold Coast with stunning beach views.</p>
              <a href="/locations/surfers-paradise" className="text-primary-600 font-semibold hover:underline">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Broadbeach</h3>
              <p className="text-gray-600 mb-4">Perfect water conditions and beautiful coastline make Broadbeach ideal for jetski adventures.</p>
              <a href="/locations/broadbeach" className="text-primary-600 font-semibold hover:underline">Learn More →</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Main Beach</h3>
              <p className="text-gray-600 mb-4">Explore calm waters and scenic views at Main Beach with our professional guided tours.</p>
              <a href="/locations/main-beach" className="text-primary-600 font-semibold hover:underline">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Local Jetski Service
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now to book your jetski adventure in your area!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300555123"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Call: 1300 555 123
            </a>
            <a
              href="/contact"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition border-2 border-white"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
