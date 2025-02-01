import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00538C',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001'),
  title: {
    default: 'ReformUK Erdington Branch | Local Politics & Community Action',
    template: '%s | ReformUK Erdington'
  },
  description: 'Join Reform UK Erdington in making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding. Local solutions for local challenges.',
  keywords: [
    'Reform UK',
    'Erdington',
    'Castle Vale',
    'Pype Hayes',
    'Stockland Green',
    'Kingstanding',
    'Birmingham',
    'local politics',
    'community action',
    'political reform',
    'local government',
    'community development',
    'West Midlands politics'
  ].join(', '),
  authors: [{ name: 'Reform UK Erdington Branch' }],
  creator: 'Reform UK Erdington Branch',
  publisher: 'Reform UK',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/icon-192x192.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'ReformUK Erdington Branch',
    title: 'ReformUK Erdington | Your Voice for Local Change',
    description: 'Join Reform UK Erdington in building a stronger community. Local solutions for local challenges across Erdington, Castle Vale, Pype Hayes, and more.',
    images: [{
      url: '/images/hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Reform UK Erdington - Working together for a better community',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ReformErdington',
    creator: '@ReformErdington',
    title: 'ReformUK Erdington | Local Solutions, Real Change',
    description: 'Your local Reform UK branch in Erdington, Birmingham. Join us in making positive changes for our community.',
    images: [{
      url: '/images/hero.jpg',
      alt: 'Reform UK Erdington - Community focused political change',
    }]
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
  alternates: {
    canonical: '/',
  },
  category: 'politics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
        
        {/* Analytics Script - Only in production */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
