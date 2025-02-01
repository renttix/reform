import Image from 'next/image'
import Link from 'next/link'
import { generatePlanMetadata } from '../metadata'

export const metadata = generatePlanMetadata({
  title: 'Control Immigration',
  description: 'Reform UK Erdington\'s plan for controlled immigration, including reducing net migration, supporting legal residents, and ensuring sustainable community growth.',
  imageSlug: 'immigration',
  keywords: [
    'immigration control',
    'managed migration',
    'community support',
    'integration',
    'local services',
    'population growth',
    'community cohesion',
    'legal residents',
    'Erdington community',
    'migration policy',
    'skilled workers',
    'sustainable growth',
    'fair system',
    'community relations',
    'local support'
  ]
})

export default function ControlImmigrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/immigration-hero.jpg"
          alt="Immigration Reform in Erdington - Building a fair and sustainable system"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Control Immigration
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our plan for managed migration that works for Erdington and its residents.
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
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Immigration Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Managed Migration</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will implement a controlled immigration system that works for our community.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Reduce net migration to sustainable levels,</li>
                    <li>Support skilled workers who contribute to our economy,</li>
                    <li>Ensure proper integration support.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Community Support</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will ensure proper support for both existing residents and newcomers to our community.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Protect local services from excessive pressure,</li>
                    <li>Support integration programmes,</li>
                    <li>Maintain community cohesion.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Fair System</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will implement a fair system that works for everyone in our community.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Support legal residents and citizens,</li>
                    <li>Ensure fair access to services,</li>
                    <li>Maintain strong community relations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our immigration plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>Sustainable population growth,</li>
                  <li>Protected local services,</li>
                  <li>Strong community integration,</li>
                  <li>Fair access to opportunities,</li>
                  <li>Enhanced community cohesion.</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Immigration Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a fair and sustainable immigration system that works for everyone in Erdington.
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
