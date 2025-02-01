import Image from 'next/image'
import Link from 'next/link'
import { generatePlanMetadata } from '../metadata'

export const metadata = generatePlanMetadata({
  title: 'Drive Growth',
  description: 'Reform UK Erdington\'s plan to drive economic growth, including supporting local businesses, attracting investment, and creating jobs in our community.',
  imageSlug: 'growth',
  keywords: [
    'economic growth',
    'local business',
    'job creation',
    'investment',
    'business support',
    'skills training',
    'apprenticeships',
    'business rates',
    'Erdington economy',
    'local jobs',
    'business development',
    'economic development',
    'vocational training',
    'local investment',
    'business opportunities'
  ]
})

export default function DriveGrowthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/growth-hero.jpg"
          alt="Economic Growth in Erdington - Supporting local businesses and creating opportunities"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Drive Growth
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our plan to boost economic growth and create opportunities in Erdington.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Key Points */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Growth Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Local Business Support</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will support local businesses to thrive and create jobs in our community.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Reduced business rates and regulations,</li>
                    <li>Support for start-ups and entrepreneurs,</li>
                    <li>Improved local business infrastructure.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Investment Attraction</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will attract new investment to create jobs and opportunities in Erdington.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Promote Erdington to investors,</li>
                    <li>Streamline planning processes,</li>
                    <li>Support business development.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Skills and Training</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will help local people gain the skills needed for better jobs.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Support for vocational training,</li>
                    <li>Partnerships with local employers,</li>
                    <li>Apprenticeship programmes.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our growth plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>More local jobs and opportunities,</li>
                  <li>Thriving local businesses,</li>
                  <li>Better skills and training,</li>
                  <li>Increased investment,</li>
                  <li>Stronger local economy.</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Growth Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a more prosperous Erdington with better opportunities for everyone.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/join"
                  className="btn bg-white text-reform-primary hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all hover:shadow-lg"
                >
                  Join Us Today
                </Link>
                <Link
                  href="/volunteer"
                  className="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg font-semibold transform hover:-translate-y-1 transition-all"
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
