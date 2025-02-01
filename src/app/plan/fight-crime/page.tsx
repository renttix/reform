import Image from 'next/image'
import Link from 'next/link'
import { generatePlanMetadata } from '../metadata'

export const metadata = generatePlanMetadata({
  title: 'Fight Crime',
  description: 'Reform UK Erdington\'s plan to fight crime, including increased police presence, tackling anti-social behaviour, and creating safer neighbourhoods for our community.',
  imageSlug: 'crime',
  keywords: [
    'crime prevention',
    'community safety',
    'police presence',
    'anti-social behaviour',
    'safer streets',
    'neighbourhood watch',
    'local policing',
    'crime reduction',
    'Erdington safety',
    'community security',
    'crime fighting',
    'public safety',
    'street safety',
    'crime prevention',
    'community policing'
  ]
})

export default function FightCrimePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-reform-dark/90 to-reform-primary/70 z-10" />
        <Image
          src="/images/crime-hero.jpg"
          alt="Crime Prevention in Erdington - Creating safer communities for everyone"
          fill
          className="absolute inset-0 object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Fight Crime
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed">
              Our commitment to making Erdington safer for everyone.
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
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Our Crime Prevention Plan</h2>
              <div className="grid gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Police Presence</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will increase visible policing in Erdington to deter crime and make our streets safer.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>More police officers on patrol,</li>
                    <li>Increased community policing,</li>
                    <li>Faster response times to incidents.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Anti-social Behaviour</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will tackle anti-social behaviour and make our neighbourhoods more pleasant places to live.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Zero tolerance for anti-social behaviour,</li>
                    <li>Support for youth programmes,</li>
                    <li>Better street lighting and CCTV coverage.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-reform-dark dark:text-white">Community Safety</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    We will work with the community to create safer neighbourhoods for everyone.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Support for Neighbourhood Watch schemes,</li>
                    <li>Better reporting systems for crime,</li>
                    <li>Community engagement programmes.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-reform-dark dark:text-white">Impact on Erdington</h2>
              <div className="bg-reform-primary/5 dark:bg-gray-800 p-8 rounded-xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our crime prevention plan will deliver real benefits for Erdington:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-4">
                  <li>Safer streets and neighbourhoods,</li>
                  <li>Reduced anti-social behaviour,</li>
                  <li>Better community relations,</li>
                  <li>More effective policing,</li>
                  <li>Improved quality of life.</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-reform-primary text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Support Our Crime Prevention Plan</h2>
              <p className="text-lg mb-8">
                Join us in making Erdington safer for everyone. Together, we can create a community where people feel secure.
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
