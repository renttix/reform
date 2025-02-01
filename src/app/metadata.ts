import { Metadata } from 'next'

const metadataBase = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://reform-uk-erdington.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
  title: {
    default: 'Reform UK Erdington | Fighting for a Better Community',
    template: '%s | Reform UK Erdington'
  },
  description: 'Reform UK Erdington Branch - Your local voice for positive change. We\'re committed to cutting taxes, reforming the NHS, controlling immigration, fighting crime, and driving economic growth in Erdington.',
  keywords: ['Reform UK', 'Erdington', 'Birmingham', 'Politics', 'Local Government', 'Community', 'Castle Vale', 'Pype Hayes', 'Stockland Green', 'Kingstanding'],
  authors: [{ name: 'Reform UK Erdington Branch' }],
  creator: 'Reform UK Erdington Branch',
  publisher: 'Reform UK',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: metadataBase,
    siteName: 'Reform UK Erdington',
    title: 'Reform UK Erdington | Your Voice for Local Change',
    description: 'Join Reform UK Erdington in building a stronger community. We focus on practical solutions for local challenges, from NHS reform to economic growth.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Reform UK Erdington - Working together for a better community',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ReformErdington',
    creator: '@ReformErdington',
    title: 'Reform UK Erdington | Local Solutions, Real Change',
    description: 'Your local Reform UK branch in Erdington, Birmingham. Join us in making positive changes for our community.',
    images: [
      {
        url: '/images/hero.jpg',
        alt: 'Reform UK Erdington - Community focused political change',
      }
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
  alternates: {
    canonical: metadataBase,
  },
  category: 'politics',
}
