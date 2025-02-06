import type { Metadata } from 'next';

const metadataBase = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'  // Updated to match the current development port
    : 'https://reformukerdington.org';

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: 'Reform UK Erdington | Fighting for a Better Community',
    template: '%s | Reform UK Erdington'
  },
  description: 'Reform UK Erdington - Your local voice for positive change. We\'re committed to cutting taxes, reforming the NHS, controlling immigration, fighting crime, and driving economic growth in Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.',
  keywords: [
    'Reform UK',
    'Erdington',
    'Birmingham politics',
    'local government',
    'community development',
    'Castle Vale',
    'Pype Hayes',
    'Stockland Green',
    'Kingstanding',
    'political reform',
    'local elections',
    'community engagement',
    'Birmingham council',
    'local issues',
    'political change'
  ],
  authors: [{ name: 'Reform UK Erdington Branch' }],
  creator: 'Reform UK Erdington Branch',
  publisher: 'Reform UK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: metadataBase,
    siteName: 'Reform UK Erdington',
    title: 'Reform UK Erdington | Your Voice for Local Change',
    description: 'Join Reform UK Erdington in building a stronger community. We focus on practical solutions for local challenges from NHS reform to economic growth.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Reform UK Erdington - Working together for a better community'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ReformErdington',
    creator: '@ReformErdington',
    title: 'Reform UK Erdington | Local Solutions, Real Change',
    description: 'Your local Reform UK branch in Erdington, Birmingham. Join us in making positive changes for our community.',
    images: ['/images/hero.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: metadataBase
  },
  category: 'politics',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'msapplication-TileColor': '#2b5797',
    'theme-color': '#ffffff',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'manifest-encoding': 'application/x-www-form-urlencoded',
  }
};

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${metadataBase}${item.url}`
    }))
  };
}

// Helper function to generate article structured data
export function generateArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors,
  imageUrl,
  section
}: {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  authors: string[];
  imageUrl: string;
  section: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    description: description,
    image: [`${metadataBase}${imageUrl}`],
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors.map(author => ({
      '@type': 'Person',
      name: author,
      url: `${metadataBase}/about`
    })),
    publisher: {
      '@type': 'Organisation',
      name: 'Reform UK Erdington',
      logo: {
        '@type': 'ImageObject',
        url: `${metadataBase}/images/reformlogo.jpg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': metadataBase
    },
    articleSection: section
  };
}

// Helper function to generate event structured data
export function generateEventSchema({
  name,
  description,
  startDate,
  endDate,
  location,
  imageUrl
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address: string;
  };
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate: endDate || startDate,
    location: {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address
      }
    },
    organizer: {
      '@type': 'Organisation',
      name: 'Reform UK Erdington',
      url: metadataBase
    },
    image: imageUrl ? [`${metadataBase}${imageUrl}`] : undefined
  };
}

// Helper function to generate organisation structured data
export function generateOrganisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PoliticalOrganisation',
    name: 'Reform UK Erdington',
    alternateName: 'Reform Party Erdington Branch',
    url: metadataBase,
    logo: `${metadataBase}/images/reformlogo.jpg`,
    sameAs: [
      'https://www.facebook.com/groups/916932353577131',
      'https://x.com/ReformErdington'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erdington',
      addressRegion: 'Birmingham',
      addressCountry: 'GB'
    },
    areaServed: {
      '@type': 'City',
      name: 'Erdington',
      containedIn: {
        '@type': 'City',
        name: 'Birmingham'
      }
    }
  };
}
