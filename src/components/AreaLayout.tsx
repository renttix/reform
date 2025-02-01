'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa6'

interface Challenge {
  title: string
  description: string
}

interface Statistic {
  label: string
  value: string
  source: string
}

interface Solution {
  title: string
  description: string
  policy: string
}

interface Reference {
  text: string
  url: string
}

interface AreaLayoutProps {
  title: string
  summary: string
  challenges: Challenge[]
  statistics: Statistic[]
  solutions: Solution[]
  references: Reference[]
  imagePath: string
}

export default function AreaLayout({
  title,
  summary,
  challenges,
  statistics,
  solutions,
  references,
  imagePath
}: AreaLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-reform-dark">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src={imagePath}
          alt={`${title} area - Local community and landmarks`}
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Challenges Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-reform-dark dark:text-white mb-6">
                Local Challenges
              </h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-reform-gray/5 dark:bg-reform-secondary/5 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-reform-dark dark:text-white mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-reform-dark/80 dark:text-white/80">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Solutions Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-reform-dark dark:text-white mb-6">
                Our Solutions
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white dark:bg-reform-dark border border-reform-primary/10 dark:border-white/10 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-reform-primary dark:text-reform-light mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-reform-dark/80 dark:text-white/80 mb-4">
                      {solution.description}
                    </p>
                    <div className="bg-reform-primary/5 dark:bg-reform-light/5 p-4 rounded-lg">
                      <p className="text-sm font-medium text-reform-primary dark:text-reform-light">
                        Reform UK Policy: {solution.policy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* References Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-reform-dark dark:text-white mb-4">
                References
              </h2>
              <div className="space-y-2">
                {references.map((reference, index) => (
                  <div key={index} className="text-sm text-reform-dark/70 dark:text-white/70">
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-reform-primary dark:hover:text-reform-light transition-colors"
                    >
                      {reference.text}
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Statistics Card */}
            <div className="bg-white dark:bg-reform-dark border border-reform-primary/10 dark:border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-reform-dark dark:text-white mb-4">
                Local Statistics
              </h3>
              <div className="space-y-4">
                {statistics.map((stat, index) => (
                  <div key={index} className="border-b border-reform-primary/10 dark:border-white/10 last:border-0 pb-4 last:pb-0">
                    <p className="text-sm text-reform-dark/70 dark:text-white/70 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-lg font-semibold text-reform-primary dark:text-reform-light">
                      {stat.value}
                    </p>
                    <p className="text-xs text-reform-dark/50 dark:text-white/50">
                      Source: {stat.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <Link
                href="/join"
                className="block w-full bg-reform-primary hover:bg-reform-primary/90 text-white font-medium py-3 px-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-0.5"
              >
                Join Reform UK Today
              </Link>
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaFacebook className="h-5 w-5" />
                <span>Join Our Facebook Group</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
