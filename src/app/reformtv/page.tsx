import YouTubeFeed from '@/components/YouTubeFeed';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reform TV | Latest Videos from Reform UK Erdington',
  description: 'Watch the latest speeches, interviews, and updates from Reform UK Erdington. Stay informed with our latest political content and campaign updates.',
  openGraph: {
    title: 'Reform TV | Latest Videos from Reform UK Erdington',
    description: 'Watch the latest speeches, interviews, and updates from Reform UK Erdington. Stay informed with our latest political content and campaign updates.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Reform UK Erdington',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reform TV | Reform UK Erdington',
    description: 'Watch the latest speeches, interviews, and updates from Reform UK Erdington',
  },
  alternates: {
    canonical: 'https://reformukerdington.org/reformtv',
  },
};

// Generate structured data for video list
function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Reform UK Erdington Videos',
    description: 'Latest videos from Reform UK Erdington',
    itemListElement: [
      {
        '@type': 'VideoObject',
        position: 1,
        name: 'Reform UK Erdington Video Channel',
        description: 'Official video channel for Reform UK Erdington, featuring speeches, interviews, and campaign updates.',
        thumbnailUrl: 'https://reformukerdington.org/images/reformlogo.jpg',
        uploadDate: new Date().toISOString(),
        contentUrl: 'https://www.youtube.com/@ReformUKOfficial',
      },
    ],
  };
}

export default function ReformTV() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <main className="container mx-auto px-4 py-8" role="main">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Reform TV</h1>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Latest videos from Reform UK Erdington - Stay informed with our latest political content and campaign updates
          </p>
        </header>
        <section aria-label="Video Feed">
          <YouTubeFeed />
        </section>
      </main>
    </>
  );
}
