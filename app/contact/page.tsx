import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Tims Jetski Hire Gold Coast',
  description: 'Get in touch with Tims Jetski Hire. Call 1300 555 123 or fill out our contact form for quotes, bookings, and enquiries.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch with Tims Jetski Hire for bookings, quotes, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For urgent enquiries, please call us directly.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:1300555123" className="text-primary-600 text-lg hover:underline">1300 555 123</a>
                    <p className="text-gray-600 text-sm mt-1">Available 7 days, 7am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@timsjetskihire.com.au" className="text-primary-600 hover:underline">info@timsjetskihire.com.au</a>
                    <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-700">Gold Coast, QLD</p>
                    <p className="text-gray-600 text-sm mt-1">Serving all suburbs across the Gold Coast region</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Operating Hours</h3>
                    <p className="text-gray-700">7 Days a Week</p>
                    <p className="text-gray-600 text-sm mt-1">7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/services" className="text-primary-600 hover:underline">View All Services</a>
                  </li>
                  <li>
                    <a href="/locations" className="text-primary-600 hover:underline">Service Areas</a>
                  </li>
                  <li>
                    <a href="/about" className="text-primary-600 hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="/blog" className="text-primary-600 hover:underline">Blog & Tips</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do I need a license to hire a jetski?</h3>
              <p className="text-gray-600">No license is required! We provide a brief safety induction and guide you through everything you need to know.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What's the minimum age requirement?</h3>
              <p className="text-gray-600">Riders must be 16 years or older. Children can ride as passengers with an adult aged 18+.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking at least 48 hours in advance, especially during peak season and weekends.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What if the weather is bad?</h3>
              <p className="text-gray-600">Safety first! We offer free rescheduling or full refunds if weather conditions are unsuitable.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What should I bring?</h3>
              <p className="text-gray-600">Just bring swimmers, a towel, sunscreen, and your sense of adventure! We provide life jackets and all safety equipment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer group discounts?</h3>
              <p className="text-gray-600">Yes! We have special rates for groups of 4 or more. Contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now for instant booking and special offers!
          </p>
          <a
            href="tel:1300555123"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Call Now: 1300 555 123
          </a>
        </div>
      </section>
    </div>
  );
}
