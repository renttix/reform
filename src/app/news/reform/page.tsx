import type { Metadata } from 'next'
import ReformNewsGrid from '@/components/ReformNewsGrid'

export const metadata: Metadata = {
  title: 'Reform UK News | ReformUK Erdington',
  description: 'Latest news and updates about Reform UK from major news sources across the United Kingdom.',
}

export default function ReformNews() {
  return (
    <div className="min-h-screen bg-reform-gray/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-reform-primary to-reform-secondary dark:from-reform-dark dark:to-reform-secondary py-16 sm:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Reform UK News
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light">
              Latest coverage and updates about Reform UK from major news outlets across the United Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-reform-dark rounded-xl p-6 shadow-lg">
              <ReformNewsGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
