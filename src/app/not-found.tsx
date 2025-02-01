import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-reform-primary dark:text-white mb-4">
          This isn't the change we were looking for!
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
          ⚠️ The page you want isn't here, but our fight for a better Erdington is still going strong!
        </p>
        <Link 
          href="/"
          className="inline-block bg-reform-primary hover:bg-reform-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 dark:hover:bg-reform-light"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
