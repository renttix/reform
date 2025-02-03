'use client'

import { useState, useEffect } from 'react'

interface FeedItem {
  title: string
  link: string
  pubDate: string
  content?: string
  contentSnippet?: string
}

interface RssFeedProps {
  feedUrl: string
  title: string
}

export default function RssFeed({ feedUrl, title }: RssFeedProps) {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`/api/rss?url=${encodeURIComponent(feedUrl)}`)
        if (!response.ok) throw new Error('Failed to fetch feed')
        const feed = await response.json()
        setFeedItems(feed.items as FeedItem[])
        setLoading(false)
      } catch (err) {
        setError('Failed to load feed. Please try again later.')
        setLoading(false)
      }
    }

    fetchFeed()
  }, [feedUrl])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-reform-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-reform-dark dark:text-white mb-6">{title}</h2>
      <div className="space-y-6">
        {feedItems.map((item, index) => (
          <article 
            key={index} 
            className="bg-white dark:bg-reform-dark border border-reform-primary/10 dark:border-white/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-reform-dark dark:text-white mb-3">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-reform-primary dark:hover:text-reform-light transition-colors"
              >
                {item.title}
              </a>
            </h3>
            {item.contentSnippet && (
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {item.contentSnippet}
              </p>
            )}
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={new Date(item.pubDate).toISOString()}>
                {new Date(item.pubDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-reform-primary dark:text-reform-light hover:underline"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
