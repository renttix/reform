import { ErrorBoundary } from '@/components/ErrorBoundary'
import ReformNewsGrid from '@/components/ReformNewsGrid'

export default function ReformNewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-center mb-4">Reform UK News</h1>
      <p className="text-center text-reform-dark/70 dark:text-white/70 mb-8">
        Latest coverage and updates about Reform UK from major news outlets across the United Kingdom.
      </p>
      
      <ErrorBoundary>
        <ReformNewsGrid />
      </ErrorBoundary>
    </div>
  )
}
