import Image from 'next/image'
import Link from 'next/link'
import { getContent } from '@/utils/content'
import NewsletterSignup from '@/components/NewsletterSignup'
import SocialFeed from '@/components/SocialFeed'
import type { Metadata } from 'next'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'

export const metadata: Metadata = {
  title: 'Reform UK Erdington Branch | Your Local Voice for Change',
  description: 'Join Reform UK Erdington Branch in our mission to cut taxes, protect the NHS, control immigration, and bring positive change to Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.',
  openGraph: {
    title: 'Reform UK Erdington Branch | Your Local Voice for Change',
    description: 'Join us in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Together, we can build stronger, more prosperous communities.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Reform UK Erdington Branch' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reform UK Erdington Branch | Your Local Voice for Change',
    description: 'Join us in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Together, we can build stronger, more prosperous communities.',
    images: ['/images/hero.jpg'],
  },
}

export default function Home() {
  const content = getContent()
  const { hero, about, priorities, keyIssues } = content.home

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BED6] via-[#00B0C7] to-[#009FB5] opacity-90 dark:opacity-80 z-10" />
        <Image
          src={hero.image}
          alt="Reform UK Erdington Branch - Making real change in our community"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
              Reform UK Erdington Branch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-4 md:mb-6">
              Join us in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 md:mb-12">
              We're committed to cutting taxes, reducing net migration to zero, protecting our NHS, and bringing common sense back to local governance. Together, we can build stronger, more prosperous communities where your voice matters and your vote counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/join"
                className="bg-white text-[#00BED6] hover:bg-[#00BED6] hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
              >
                Join Us Today
              </Link>
              <a
                href="#priorities"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
              >
                Our Priorities
              </a>
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center inline-flex items-center justify-center"
              >
                <FaFacebook className="h-5 w-5 mr-2" />
                Facebook Group
              </a>
              <a
                href="https://x.com/ReformErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center inline-flex items-center justify-center"
              >
                <FaXTwitter className="h-5 w-5 mr-2" />
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900 dark:text-white">Key Local Issues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(keyIssues).map(([key, value], index) => (
              <div key={key} className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,190,214,0.2)] hover:shadow-[0_8px_30px_rgba(0,190,214,0.4)] transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00BED6] via-[#00B0C7] to-[#009FB5] opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-shimmer"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <p className="text-white/90">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-black/60">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
              <Image
                src={about.image}
                alt="Reform UK Erdington Branch vision - Working together for our community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Our Vision for Our Communities</h2>
              <div className="prose prose-lg">
                {about.text.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-6 text-gray-600 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-[#00BED6] hover:text-[#008299] font-semibold group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section id="priorities" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#00BED6] via-[#00B0C7] to-[#009FB5] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center">Our Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {priorities.map((priority: string, index: number) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="text-5xl font-bold mb-6 text-white/20">0{index + 1}</div>
                <p className="text-lg font-medium">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#00BED6] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Reform UK Erdington Branch - Join our movement for change"
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Join the Reform Movement</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4">
            Together, we can build a better future for Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Join us in our mission to bring positive change to our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/join"
              className="bg-white text-[#00BED6] hover:bg-[#00BED6] hover:text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
            >
              Become a Member
            </Link>
            <Link
              href="/volunteer"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto text-center"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-center text-gray-900 dark:text-white">Stay Connected</h2>
          <SocialFeed />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-black/60">
        <div className="container max-w-xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
