import Image from 'next/image'
import { getContent } from '@/utils/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Reform UK Erdington',
  description: 'Learn about Reform UK Erdington\'s mission, values, and commitment to positive change in our community. Together, we can build a better Erdington.',
  openGraph: {
    title: 'About Reform UK Erdington',
    description: 'Our mission is to bring positive change to Erdington through practical, common-sense solutions and community-focused leadership.',
    images: [{ url: '/images/about-hero.jpg', width: 1200, height: 630, alt: 'About Reform UK Erdington' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Reform UK Erdington',
    description: 'Our mission is to bring positive change to Erdington through practical, common-sense solutions and community-focused leadership.',
    images: ['/images/about-hero.jpg'],
  },
}

const AboutPage = () => {
  const content = getContent()
  const { hero, mission, values } = content.about

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src={hero.image}
          alt="About Reform UK Erdington"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              {hero.text}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-reform-dark dark:text-white">{mission.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">{mission.text}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mission.points.map((point: string, index: number) => (
                <div
                  key={index}
                  className="bg-reform-gray dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-reform-primary to-reform-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">{values.title}</h2>
            <p className="text-xl font-light">{values.text}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.items.map((item: { title: string; description: string }, index: number) => (
              <div
                key={index}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-reform-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Reform UK Erdington background"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto font-light">
            Be part of the change in Erdington. Together, we can build a community that works for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/join"
              className="btn bg-white text-reform-dark hover:bg-white/90 text-lg px-10 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all hover:shadow-lg"
            >
              Become a Member
            </a>
            <a
              href="/contact"
              className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
