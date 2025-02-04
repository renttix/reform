import YouTubeFeed from '@/components/YouTubeFeed';
import type { Metadata, Viewport } from 'next';
import { baseMetadata } from '../metadata';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...baseMetadata,
  title: 'Reform TV | Latest Videos from Reform UK Erdington',
  description: 'Watch the latest speeches, interviews, and campaign updates from Reform UK Erdington. Stay informed with our latest political content, policy discussions, and community initiatives.',
  keywords: [
    'Reform UK videos',
    'political speeches',
    'campaign updates',
    'Erdington politics',
    'Reform UK media',
    'local politics videos',
    'political interviews',
    'community updates',
    'Reform Party videos',
    'Birmingham politics',
    'political content',
    'local news videos',
    'Reform UK channel',
    'political discussions',
    'community initiatives'
  ].join(', '),
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Reform TV | Latest Videos from Reform UK Erdington',
    description: 'Watch our latest political content, speeches, and campaign updates. Stay connected with Reform UK Erdington through our video channel.',
    type: 'video.other',
    videos: [{
      url: 'https://www.youtube.com/@ReformUKOfficial',
    }],
  },
  twitter: {
    ...baseMetadata.twitter,
    card: 'player',
    title: 'Reform TV | Latest Political Content',
    description: 'Watch our latest videos and stay informed about Reform UK activities in Erdington.',
  },
  alternates: {
    canonical: '/reformtv',
  },
};

// Generate structured data for video channel
function generateVideoChannelSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://reformukerdington.org'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reform TV',
        item: 'https://reformukerdington.org/reformtv'
      }
    ]
  };
}

export default function ReformTV() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateVideoChannelSchema())
        }}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-gradient-to-r from-gray-50 to-white dark:from-black dark:to-reform-dark py-12 border-b border-gray-200 dark:border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-reform-primary dark:text-white">Reform TV</h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-white/90">
                Stay informed with our latest political content, speeches, and campaign updates
              </p>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8" role="main">
          <section 
            aria-label="Video Feed"
            className="max-w-7xl mx-auto"
          >
            <YouTubeFeed />
          </section>

          {/* SEO Content */}
          <section className="mt-12 prose dark:prose-invert max-w-3xl mx-auto">
            <h2 className="sr-only">About Our Video Channel</h2>
            <p>
              Reform TV is your source for the latest updates from Reform UK Erdington. 
              We regularly share speeches, interviews, campaign updates, and community 
              initiatives to keep you informed about our activities and vision for Erdington.
            </p>
            <p>
              Our video content covers a range of topics including:
            </p>
            <ul>
              <li>Political speeches and interviews</li>
              <li>Local campaign updates</li>
              <li>Community initiatives and events</li>
              <li>Policy discussions and explanations</li>
              <li>Local issue coverage and solutions</li>
            </ul>
            <p>
              Subscribe to our channel to stay updated with the latest content from 
              Reform UK Erdington. We're committed to transparent communication and 
              keeping our community informed about local political developments.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
