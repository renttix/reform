'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-reform-dark dark:text-white">Stay Updated</h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
        Subscribe to our newsletter for updates on our campaign and local events across Erdington, Castle Vale, Pype Hayes, Stockland Green, and Kingstanding.
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-reform-primary dark:focus:ring-reform-light text-sm sm:text-base"
            aria-label="Email address for newsletter subscription"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto px-6 py-3 bg-reform-primary dark:bg-reform-dark text-white rounded-lg font-semibold hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200 disabled:opacity-50 text-sm sm:text-base"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {message && (
          <p 
            className={`mt-3 sm:mt-4 text-sm sm:text-base ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
            role="alert"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
