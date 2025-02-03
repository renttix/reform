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
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-reform-dark rounded-xl p-6 shadow-lg">
              <style>
                {`
                  .rss-feed-container {
                    --rss-feed-width: 100%;
                    --rss-feed-max-width: 100%;
                    --rss-feed-margin: 0;
                    --rss-feed-border: none;
                    --rss-feed-border-radius: 0;
                    --rss-feed-box-shadow: none;
                    --rss-feed-background: transparent;
                  }

                  .rss-feed-container iframe {
                    min-height: 1200px !important;
                    width: 100% !important;
                  }

                  /* Custom styling for RSS feed items */
                  [data-rss-feed] {
                    background: transparent !important;
                  }

                  [data-rss-feed] .feed-item {
                    margin-bottom: 2rem !important;
                    padding: 1.5rem !important;
                    border-radius: 1rem !important;
                    background: rgba(255, 255, 255, 0.05) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    transition: all 0.3s ease !important;
                  }

                  [data-rss-feed] .feed-item:hover {
                    transform: translateY(-4px) !important;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
                  }

                  [data-rss-feed] .feed-item img {
                    border-radius: 0.5rem !important;
                    margin: 1rem 0 !important;
                  }

                  [data-rss-feed] .feed-item h3 {
                    font-size: 1.5rem !important;
                    font-weight: 600 !important;
                    margin-bottom: 1rem !important;
                    color: var(--reform-primary) !important;
                  }

                  [data-rss-feed] .feed-item p {
                    font-size: 1.1rem !important;
                    line-height: 1.6 !important;
                    margin-bottom: 1rem !important;
                  }

                  [data-rss-feed] .feed-item a {
                    color: var(--reform-primary) !important;
                    text-decoration: none !important;
                    transition: color 0.2s ease !important;
                  }

                  [data-rss-feed] .feed-item a:hover {
                    color: var(--reform-secondary) !important;
                  }

                  /* Dark mode adjustments */
                  .dark [data-rss-feed] .feed-item {
                    background: rgba(0, 0, 0, 0.2) !important;
                    border-color: rgba(255, 255, 255, 0.1) !important;
                  }

                  .dark [data-rss-feed] .feed-item:hover {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
                  }
                `}
              </style>
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
