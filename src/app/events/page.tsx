import { getContent } from '@/utils/content'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { generateEventsMetadata } from './metadata'

const EventsClient = dynamic(() => import('@/components/EventsClient'), {
  ssr: false,
})

export const metadata = generateEventsMetadata()

export default function EventsPage() {
  const content = getContent()
  const { events } = content

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/events-hero.jpg"
          alt="Reform UK Erdington community events and meetings - Join us in shaping our local community"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Events & Community Meetings
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              {events.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-reform-dark dark:text-white">
              Upcoming Events in Erdington
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join us at our upcoming events across Erdington, Castle Vale, Pype Hayes, and surrounding areas. 
              Meet like-minded people, discuss local issues, and help shape the future of our community.
            </p>
          </div>
          <EventsClient content={events} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="sr-only">About Our Events</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Reform UK Erdington hosts regular community meetings and events across the constituency. 
                Our events are open to all residents interested in local politics and community development. 
                Whether you're concerned about local issues, want to meet your Reform UK representatives, 
                or simply want to learn more about our vision for Erdington, you're welcome to join us.
              </p>
              <p>
                We organize various types of events including:
              </p>
              <ul>
                <li>Community meetings to discuss local issues</li>
                <li>Policy discussions and workshops</li>
                <li>Local campaign activities</li>
                <li>Social gatherings and networking events</li>
                <li>Constituency surgeries and consultation sessions</li>
              </ul>
              <p>
                Our events take place in accessible venues across Erdington, Castle Vale, Pype Hayes, 
                Stockland Green, and Kingstanding. We believe in making local politics accessible to everyone 
                and creating opportunities for meaningful community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
