import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Tims Jetski Hire Gold Coast',
  description: 'Learn about Tims Jetski Hire - Gold Coast\'s most trusted jetski rental and tour provider with over 15 years of experience.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tims Jetski Hire</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Gold Coast's premier jetski hire service, delivering unforgettable water experiences since 2008.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008 by Tim Henderson, Tims Jetski Hire began with a simple mission: to share the thrill and beauty of the Gold Coast waterways with everyone. What started as a small operation with just three jetskis has grown into the region's most trusted and comprehensive jetski service provider.
              </p>
              <p className="text-gray-700 mb-4">
                Over the past 15 years, we've helped thousands of customers create unforgettable memories on the water. From first-time riders to experienced thrill-seekers, corporate groups to family celebrations, we've made it our business to deliver exceptional experiences every single time.
              </p>
              <p className="text-gray-700">
                Today, we operate a fleet of premium jetskis and employ a team of passionate, certified professionals who share our commitment to safety, fun, and customer satisfaction.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200"
                alt="Jetski on Gold Coast waters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">
                We never compromise on safety. All our equipment is regularly maintained and inspected, and our staff are fully trained in safety procedures and emergency response.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Experience</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to ensure every customer has an amazing experience from booking to the moment you leave the water.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Care</h3>
              <p className="text-gray-600">
                We love the Gold Coast waterways and are committed to preserving them. We follow strict environmental guidelines and educate our customers on responsible water recreation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to your water adventure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                  alt="Tim Henderson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Tim Henderson</h3>
              <p className="text-primary-600 mb-2">Founder & Director</p>
              <p className="text-gray-600">15+ years experience in water sports and marine operations</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                  alt="Sarah Mitchell"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Mitchell</h3>
              <p className="text-primary-600 mb-2">Operations Manager</p>
              <p className="text-gray-600">Certified marine instructor with 10 years of teaching experience</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"
                  alt="Jake Cooper"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Jake Cooper</h3>
              <p className="text-primary-600 mb-2">Senior Tour Guide</p>
              <p className="text-gray-600">Local expert with extensive knowledge of Gold Coast waterways</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Accreditations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold">Fully Licensed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold">Insured</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold">Safety Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">✓</div>
              <p className="font-semibold">Tourism Accredited</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Best Jetski Service on the Gold Coast?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers and book your adventure today!
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
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
