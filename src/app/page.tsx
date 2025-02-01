import Image from 'next/image'
import Link from 'next/link'
import { getContent } from '@/utils/content'
import NewsletterSignup from '@/components/NewsletterSignup'
import SocialFeed from '@/components/SocialFeed'
import type { Metadata } from 'next'
import { FaFacebook } from 'react-icons/fa'

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 dark:from-black/90 dark:to-reform-dark/70 z-10" />
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Reform UK Erdington Branch
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
              Join us in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12">
              We're committed to cutting taxes, reducing net migration to zero, protecting our NHS, and bringing common sense back to local governance. Together, we can build stronger, more prosperous communities where your voice matters and your vote counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="btn bg-white text-reform-primary dark:bg-reform-dark dark:text-white hover:bg-reform-light dark:hover:bg-reform-secondary text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Join Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 dark:from-reform-dark/0 dark:via-reform-dark/30 dark:to-reform-dark/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <a
                href="#priorities"
                className="btn border-2 border-white text-white hover:border-reform-light hover:text-reform-light text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Our Priorities</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-white text-white hover:border-reform-light hover:text-reform-light text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <FaFacebook className="mr-2 h-5 w-5" />
                  Facebook Group
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Key Local Issues</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-reform-gray dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-reform-primary dark:text-reform-light">Local Economy</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{keyIssues.economy}</p>
            </div>
            <div className="bg-reform-gray dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-reform-primary dark:text-reform-light">Community Safety</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{keyIssues.safety}</p>
            </div>
            <div className="bg-reform-gray dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-reform-primary dark:text-reform-light">Housing</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{keyIssues.housing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-reform-gray dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
              <Image
                src={about.image}
                alt="Reform UK Erdington Branch vision - Working together for our community"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">Our Vision for Our Communities</h2>
              <div className="prose prose-lg dark:prose-invert">
                {about.text.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-6 text-gray-600 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href="/about"
                className="inline-flex items-center text-reform-primary dark:text-reform-light hover:text-reform-primary/80 dark:hover:text-reform-light/80 font-semibold group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section id="priorities" className="py-20 bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Priorities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {priorities.map((priority: string, index: number) => (
              <div key={index} className="bg-white/10 dark:bg-black/20 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/30 transition-all transform hover:-translate-y-1">
                <div className="text-5xl font-bold mb-6 text-white/20">0{index + 1}</div>
                <p className="text-lg font-medium">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-reform-dark text-white relative overflow-hidden">
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
          <h2 className="text-5xl font-bold mb-6">Join the Reform Movement</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light">
            Together, we can build a better future for Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Join us in our mission to bring positive change to our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/join"
                className="btn bg-white text-reform-dark dark:bg-reform-dark dark:text-white hover:bg-white/90 dark:hover:bg-reform-dark/90 text-lg px-10 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all hover:shadow-lg"
              >
                Become a Member
              </Link>
              <Link
                href="/volunteer"
                className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all"
              >
                Volunteer
              </Link>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">Stay Connected</h2>
          <SocialFeed />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-reform-gray dark:bg-gray-800">
        <div className="container max-w-xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
