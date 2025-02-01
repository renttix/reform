import { Metadata } from 'next'

interface PlanMetadataProps {
  title: string
  description: string
  imageSlug: string
  keywords: string[]
}

export function generatePlanMetadata({
  title,
  description,
  imageSlug,
  keywords
}: PlanMetadataProps): Metadata {
  const imageUrl = `/images/${imageSlug}-hero.jpg`
  const fullTitle = `${title} | Reform UK Erdington's Plan`

  return {
    title: fullTitle,
    description,
    keywords: [
      'Reform UK',
      'Erdington',
      'Birmingham',
      'local politics',
      'political reform',
      'local solutions',
      'Reform Party',
      'Erdington Branch',
      ...keywords
    ].join(', '),
    authors: [{ name: 'Reform UK Erdington Branch' }],
    openGraph: {
      title: fullTitle,
      description,
      type: 'article',
      url: `/plan/${imageSlug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Reform UK Erdington's plan to ${title.toLowerCase()}`,
        }
      ],
      locale: 'en_GB',
      siteName: 'Reform UK Erdington',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ReformErdington',
      creator: '@ReformErdington',
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: `Reform UK Erdington's plan to ${title.toLowerCase()}`,
          width: 1200,
          height: 630,
        }
      ],
    },
    alternates: {
      canonical: `/plan/${imageSlug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    category: 'policy',
  }
}

// Helper function to ensure consistent image metadata across plan pages
export function generatePlanImageMetadata(imageSlug: string, title: string) {
  return {
    url: `/images/${imageSlug}-hero.jpg`,
    width: 1200,
    height: 630,
    alt: `Reform UK Erdington's plan to ${title.toLowerCase()}`,
    contentType: 'image/jpeg',
  }
}
