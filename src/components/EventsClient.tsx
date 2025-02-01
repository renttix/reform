'use client'

import { useState } from 'react'
import { GeneratedContent } from '@/utils/content'

interface EventsClientProps {
  content: GeneratedContent['events']
}

export default function EventsClient({ content }: EventsClientProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Events Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* National Events Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
          <div className="bg-gradient-to-r from-reform-primary to-reform-primary/90 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">National Events</h3>
            <p className="text-white/90">View all ReformUK national events on Eventbrite</p>
          </div>
          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Stay connected with ReformUK's national campaign events, conferences, and rallies.
              Join us in shaping the future of British politics.
            </p>
            <a
              href="https://www.eventbrite.co.uk/o/reform-uk-51817792123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-reform-primary text-white rounded-lg hover:bg-reform-primary/90 transition-colors duration-200 text-lg font-semibold group"
            >
              View National Events
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Regional Events Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
          <div className="bg-gradient-to-r from-reform-secondary to-reform-secondary/90 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Regional Events</h3>
            <p className="text-white/90">Join our Facebook group for local events</p>
          </div>
          <div className="p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Connect with fellow reformers in Erdington and surrounding areas. Get involved in
              local initiatives and make a real difference in your community.
            </p>
            <a
              href="https://www.facebook.com/groups/916932353577131/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-reform-secondary text-white rounded-lg hover:bg-reform-secondary/90 transition-colors duration-200 text-lg font-semibold group"
            >
              Join Regional Group
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Host an Event Section */}
      <div className="mt-24 max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 transform hover:-translate-y-1 transition-all duration-300">
        <h2 className="text-4xl font-bold mb-6 text-reform-dark dark:text-white">Want to Host an Event?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          If you're passionate about reform and want to make a difference in Erdington,
          we'd love to hear from you. Together, we can create meaningful opportunities
          for community engagement and positive change.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-reform-primary text-white rounded-lg hover:bg-reform-primary/90 transition-all duration-200 text-lg font-semibold group"
        >
          Get in Touch
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
