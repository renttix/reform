import Image from 'next/image'
import Link from 'next/link'
import { generatePlanMetadata } from '../metadata'

export const metadata = generatePlanMetadata({
  title: 'Cut Taxes',
  description: 'Reform UK Erdington\'s comprehensive plan to reduce taxes. We\'re committed to cutting business rates by 50%, lowering income tax, and reducing corporation tax to help local families and businesses thrive in our community.',
  imageSlug: 'taxes',
  keywords: [
    'tax cuts',
    'lower taxes',
    'business rates',
    'income tax',
    'corporation tax',
    'tax reform',
    'local economy',
    'business support',
    'economic growth',
    'Erdington High Street',
    'small business',
    'family finances',
    'tax policy',
    'local business',
    'economic development'
  ]
})

export default function CutTaxesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/taxes-hero.jpg"
          alt="Tax Reform in Erdington - Supporting local businesses and families"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Cut Taxes
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our commitment to reducing the tax burden on families and businesses in Erdington.
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
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Tax-Cutting Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Business Rates</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will cut business rates by 50% to help local businesses thrive and revitalise Erdington High Street.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Immediate 50% reduction in business rates</li>
                    <li>Support for small and medium-sized businesses</li>
                    <li>Boost local enterprise and job creation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Income Tax</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will raise the personal allowance and reduce income tax rates to help working families keep more of their money.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Increase personal allowance</li>
                    <li>Lower basic rate of income tax</li>
                    <li>Support for working families</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Corporation Tax</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will reduce corporation tax to attract investment and create jobs in Erdington.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Lower corporation tax rates</li>
                    <li>Encourage business investment</li>
                    <li>Create local job opportunities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our tax-cutting plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>More local jobs and opportunities</li>
                  <li>Thriving high street businesses</li>
                  <li>Increased investment in the local area</li>
                  <li>Better-paid employment</li>
                  <li>Stronger local economy</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Tax-Cutting Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a more prosperous Erdington with lower taxes and more opportunities for all.
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
