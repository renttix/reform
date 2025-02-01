'use client'

import { useState } from 'react'
import { GeneratedContent } from '@/utils/content'

interface EventsClientProps {
  content: GeneratedContent['events']
}

export default function EventsClient({ content }: EventsClientProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-reform-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events
          </h1>
          <div className="prose prose-xl prose-invert">
            <p className="text-xl md:text-2xl font-light leading-relaxed">{content.intro}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Events Dropdown */}
        <div className="max-w-xl mx-auto">
          <div className="relative w-full mb-8">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-reform-primary text-white px-6 py-4 rounded-lg flex items-center justify-between shadow-lg hover:bg-opacity-90 transition-all duration-200"
            >
              <span className="text-lg font-semibold">Select Event Type</span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100">
                <a
                  href="https://www.eventbrite.co.uk/o/reform-uk-51817792123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 hover:bg-reform-gray rounded-t-lg transition-colors duration-200 text-reform-dark"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-semibold mb-1">National Events</div>
                  <div className="text-sm text-gray-600">View all ReformUK national events on Eventbrite</div>
                </a>
                <a
                  href="https://www.facebook.com/groups/916932353577131/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 hover:bg-reform-gray rounded-b-lg transition-colors duration-200 text-reform-dark"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="font-semibold mb-1">Regional Events</div>
                  <div className="text-sm text-gray-600">Join our Facebook group for local events and updates</div>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Host an Event?</h2>
          <p className="text-lg text-gray-600 mb-8">
            If you're interested in hosting or organizing a ReformUK event in Erdington,
            we'd love to hear from you. Together, we can create meaningful opportunities
            for community engagement and positive change.
          </p>
          <a
            href="/contact"
            className="btn btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
