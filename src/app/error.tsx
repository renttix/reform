'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-reform-dark mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or contact us if the problem persists.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="btn btn-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn btn-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  )
}
