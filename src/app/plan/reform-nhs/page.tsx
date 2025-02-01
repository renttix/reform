import Image from 'next/image'
import Link from 'next/link'
import { generatePlanMetadata } from '../metadata'

export const metadata = generatePlanMetadata({
  title: 'Reform NHS',
  description: 'Reform UK Erdington\'s plan to improve NHS services, including reducing waiting times, improving GP access, and delivering better local healthcare for our community.',
  imageSlug: 'nhs',
  keywords: [
    'NHS reform',
    'healthcare services',
    'GP access',
    'waiting times',
    'local healthcare',
    'mental health',
    'community care',
    'medical services',
    'Erdington NHS',
    'hospital services',
    'healthcare improvement',
    'medical facilities',
    'NHS waiting lists',
    'healthcare access',
    'patient care'
  ]
})

export default function ReformNHSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/nhs-hero.jpg"
          alt="NHS Reform in Erdington - Improving healthcare services for our community"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Reform NHS
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our commitment to improving healthcare services for everyone in Erdington.
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
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our NHS Reform Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Waiting Times</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will tackle NHS waiting times and ensure faster access to treatment for Erdington residents.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Reduce waiting times for routine operations,</li>
                    <li>Speed up emergency care response times,</li>
                    <li>Implement efficient appointment systems.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">GP Access</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will improve access to GP services and ensure everyone can see a doctor when they need to.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>More GP appointments available,</li>
                    <li>Extended opening hours,</li>
                    <li>Better access to local healthcare services.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Local Services</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will strengthen local healthcare services to better serve our community.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Improve local healthcare facilities,</li>
                    <li>Increase mental health support,</li>
                    <li>Better community care services.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our NHS reform plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>Faster access to healthcare services,</li>
                  <li>Better quality of care,</li>
                  <li>Improved local healthcare facilities,</li>
                  <li>More support for mental health,</li>
                  <li>Enhanced community care services.</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our NHS Reform Plan</h2>
              <p className="text-lg mb-8">
                Join us in building a better healthcare system for Erdington with improved services and care for all.
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
