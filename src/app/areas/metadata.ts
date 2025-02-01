import { Metadata } from 'next'

export function generateAreaMetadata(area: string): Metadata {
  const areaSlug = area.toLowerCase().replace(' ', '-')
  const imageUrl = `/images/${areaSlug}.jpg`

  return {
    title: `${area} | Local Issues & Solutions | Reform UK Erdington`,
    description: `Discover Reform UK's vision for ${area}, Birmingham. We're addressing local challenges like housing, transport, and community services. Join us in building a stronger ${area} with practical, effective solutions.`,
    keywords: [
      'Reform UK',
      area,
      'Birmingham',
      'Erdington',
      'local politics',
      'community development',
      'local issues',
      'political reform',
      'local solutions',
      'Reform Party',
      'Erdington Branch',
      'local government',
      'community services',
      'local development',
      `${area} community`,
      'Birmingham politics'
    ].join(', '),
    authors: [{ name: 'Reform UK Erdington Branch' }],
    openGraph: {
      title: `Reform UK in ${area} - Building a Stronger Community`,
      description: `Learn how Reform UK's policies will transform ${area}. We're tackling local challenges head-on with practical solutions for a better community.`,
      type: 'article',
      url: `/areas/${areaSlug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${area} community - Reform UK's vision for local development`,
        }
      ],
      locale: 'en_GB',
      siteName: 'Reform UK Erdington',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ReformErdington',
      creator: '@ReformErdington',
      title: `Reform UK's Vision for ${area}`,
      description: `Discover our plan to improve ${area}. Join Reform UK in creating positive change for our local community.`,
      images: [
        {
          url: imageUrl,
          alt: `${area} - Reform UK's local community initiatives`,
          width: 1200,
          height: 630,
        }
      ],
    },
    alternates: {
      canonical: `/areas/${areaSlug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    category: 'local-politics',
    other: {
      'geo.region': 'GB-BIR',
      'geo.placename': `${area}, Birmingham`,
      'og:region': 'West Midlands',
      'og:country-name': 'United Kingdom',
    }
  }
}

// Helper function to ensure consistent image metadata across the site
export function generateImageMetadata(area: string) {
  return {
    url: `/images/${area.toLowerCase().replace(' ', '-')}.jpg`,
    width: 1200,
    height: 630,
    alt: `${area} community - Reform UK's vision for local development`,
    contentType: 'image/jpeg',
  }
}
