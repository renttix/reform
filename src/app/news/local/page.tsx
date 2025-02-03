import type { Metadata } from 'next'
import FilteredRssFeed from '@/components/FilteredRssFeed'

export const metadata: Metadata = {
  title: 'Local News | ReformUK Erdington',
  description: 'Stay updated with the latest local news from Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.',
}

const localAreas = [
  'Erdington',
  'Castle Vale',
  'Pype Hayes',
  'Stockland Green',
  'Kingstanding'
]

export default function LocalNews() {
  return (
    <div className="min-h-screen bg-reform-gray/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Local News
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Stay informed with the latest news and developments from our local communities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm sm:text-base">
              {localAreas.map((area) => (
                <span 
                  key={area}
                  className="bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FilteredRssFeed 
              feedUrl="https://www.birminghammail.co.uk/?service=rss"
              title="Latest Local News"
              areaFilters={localAreas}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
