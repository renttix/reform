import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Legal News | ReformUK Erdington',
  description: 'Stay updated with the latest legal news and developments affecting our community.',
}

export default function LegalNews() {
  return (
    <div className="min-h-screen bg-reform-gray/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Legal News
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Stay informed with the latest legal developments and updates affecting our community.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
