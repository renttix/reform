import { Metadata } from 'next'

export function generateEventsMetadata(): Metadata {
  const imageUrl = '/images/events-hero.jpg'
  const title = 'Events & Community Meetings | Reform UK Erdington'
  const description = 'Join Reform UK Erdington at our local events and community meetings. Get involved in discussions about local issues, meet like-minded people, and help shape the future of our community. Regular events across Erdington, Castle Vale, Pype Hayes, and surrounding areas.'

  return {
    title,
    description,
    keywords: [
      'Reform UK events',
      'Erdington community meetings',
      'local politics',
      'community engagement',
      'political events',
      'Reform UK Erdington',
      'local meetings',
      'community gatherings',
      'political discussions',
      'Birmingham events',
      'local community',
      'public meetings',
      'Reform Party events',
      'Erdington politics',
      'community involvement'
    ].join(', '),
    authors: [{ name: 'Reform UK Erdington Branch' }],
    openGraph: {
      title,
      description,
      type: 'website',
      url: '/events',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'Reform UK Erdington community events and meetings',
        }
      ],
      locale: 'en_GB',
      siteName: 'Reform UK Erdington',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ReformErdington',
      creator: '@ReformErdington',
      title: 'Local Events & Meetings | Reform UK Erdington',
      description: 'Discover upcoming Reform UK events in Erdington. Join our community meetings, political discussions, and local initiatives.',
      images: [
        {
          url: imageUrl,
          alt: 'Reform UK Erdington community events and local meetings',
          width: 1200,
          height: 630,
        }
      ],
    },
    alternates: {
      canonical: '/events',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    category: 'events',
    other: {
      'og:region': 'West Midlands',
      'og:country-name': 'United Kingdom',
      'og:locality': 'Erdington, Birmingham',
    }
  }
}

// Helper function to ensure consistent image metadata for events
export function generateEventImageMetadata() {
  return {
    url: '/images/events-hero.jpg',
    width: 1200,
    height: 630,
    alt: 'Reform UK Erdington community events and meetings',
    contentType: 'image/jpeg',
  }
}
