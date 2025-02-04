'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  title: string
  description: string
  link: string
  source: string
  pubDate: string
  media?: string | null
}

export default function ReformNewsGrid() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news/reform')
        const data = await response.json()
        setNewsItems(data)
      } catch (error) {
        console.error('Error fetching Reform UK news:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
    // Refresh news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const handleImageError = (link: string) => {
    setImageErrors(prev => ({ ...prev, [link]: true }))
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-reform-dark rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-200 dark:bg-gray-700" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (newsItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-reform-dark dark:text-white">
          No Reform UK news articles found at the moment. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <Link
          key={`${item.link}-${index}`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-reform-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          <div className="relative h-48 bg-reform-gray/5 dark:bg-reform-dark/50">
            {item.media && !imageErrors[item.link] ? (
              <Image
                src={item.media}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={() => handleImageError(item.link)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-reform-primary/5 dark:bg-reform-dark/50">
                <Image
                  src="/images/reformlogo.jpg"
                  alt="Reform UK Logo"
                  width={80}
                  height={80}
                  className="opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                />
              </div>
            )}
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-reform-dark dark:text-white line-clamp-2 group-hover:text-reform-primary dark:group-hover:text-reform-light transition-colors">
              {item.title}
            </h3>
            <p className="text-reform-dark/70 dark:text-white/70 line-clamp-3 text-sm">
              {item.description}
            </p>
            <div className="flex justify-between items-center text-sm text-reform-primary/60 dark:text-reform-light/60">
              <span className="font-medium">{item.source}</span>
              <span>{new Date(item.pubDate).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
