import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Crime and Court News | ReformUK Erdington',
  description: 'Latest crime and court news affecting our community and the United Kingdom.',
}

export default function CrimeAndCourtNews() {
  return (
    <div className="min-h-screen bg-reform-gray/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Crime and Court News
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Stay informed about crime, justice, and court proceedings affecting our community.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-reform-dark rounded-xl p-6 shadow-lg">
              <div 
                className="rss-feed-container"
                dangerouslySetInnerHTML={{
                  __html: '<rssapp-feed id="dTAar33WCOlTbZ7z"></rssapp-feed>'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSS.app Script */}
      <Script
        src="https://widget.rss.app/v1/feed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
