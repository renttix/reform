import type { Metadata } from 'next'
import RssFeed from '@/components/RssFeed'

export const metadata: Metadata = {
  title: 'National News | ReformUK Erdington',
  description: 'Stay updated with the latest national news and developments from Reform UK.',
}

export default function NationalNews() {
  return (
    <div className="min-h-screen bg-reform-gray/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              National News
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Stay informed with the latest national developments and Reform UK updates.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <RssFeed 
                feedUrl="https://feeds.feedburner.com/guidofawkes"
                title="Guido Fawkes"
              />
              <RssFeed 
                feedUrl="https://www.gbnews.com/feeds/politics.rss"
                title="GB News Politics"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
