import './globals.css'
import { Montserrat, Roboto } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NewsTicker from '@/components/NewsTicker'
import { Analytics } from '@vercel/analytics/react'
import Providers from '@/components/Providers'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Reform UK Erdington',
  description: 'Reform UK Erdington - Making real change across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.',
  verification: {
    google: 'Y6VrNoJB-CeyOgyDHIi-h-44uT2yctGG52souyU_jWk',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#00bed6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${roboto.variable} min-h-screen flex flex-col`}>
        <Providers>
          <div className="max-w-[2000px] mx-auto w-full">
            <Navigation />
            <NewsTicker />
            <main className="flex-grow pt-[90px] lg:pt-[122px] 2xl:pt-[138px]">
              <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
