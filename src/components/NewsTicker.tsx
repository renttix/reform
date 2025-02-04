'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NewsItem {
  title: string
  link: string
  source: string
  timestamp: string
}

const KEYWORDS = [
  'Reform UK',
  'Reform UK party',
  'Reform UK news',
  'Reform UK updates',
  'Reform UK policies',
  'Reform UK manifesto',
  'Reform UK campaign',
  'Reform UK elections',
  'Reform UK candidates',
  'Reform UK members',
  'Richard Tice Reform UK',
  'Nigel Farage Reform UK',
  'Ben Habib Reform UK',
  'Anne Widdecombe Reform UK',
  'Reform UK leadership',
  'Reform UK general election',
  'Reform UK local elections',
  'Reform UK by-elections',
  'Reform UK voting results',
  'Reform UK voter base',
  'Reform UK constituencies',
  'Reform UK immigration policy',
  'Reform UK tax policy',
  'Reform UK NHS policy',
  'Reform UK economic policy',
  'Reform UK Brexit stance',
  'Reform UK energy policy',
  'Reform UK environmental policy',
  'Reform UK controversy',
  'Reform UK media coverage',
  'Reform UK debates',
  'Reform UK interviews',
  'Reform UK political scandals',
  'Reform UK Birmingham',
  'Reform UK Erdington',
  'Reform UK London',
  'Reform UK Scotland',
  'Reform UK Wales',
  'Reform UK supporters',
  'Reform UK protests',
  'Reform UK rallies',
  'Reform UK public opinion',
  'Reform UK social media trends',
  '#ReformUK',
  '#ReformUKParty',
  '#RichardTice',
  '#NigelFarage',
  '#ReformUKElections'
].map(keyword => keyword.toLowerCase())

export default function NewsTicker() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news/all')
        const data = await response.json()
        
        // Filter news items containing keywords
        const filteredItems = data.filter((item: any) => {
          const text = `${item.title} ${item.description}`.toLowerCase()
          return KEYWORDS.some(keyword => text.includes(keyword))
        })

        setNewsItems(filteredItems.map((item: any) => ({
          title: item.title,
          link: item.link,
          source: item.source,
          timestamp: new Date(item.pubDate).toLocaleDateString()
        })))
      } catch (error) {
        console.error('Error fetching news:', error)
      }
    }

    fetchNews()
    // Fetch news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (newsItems.length === 0) return null

  return (
    <div className="bg-reform-primary/10 dark:bg-reform-dark border-b border-reform-primary/20 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div 
          className="relative overflow-hidden py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex whitespace-nowrap ${!isHovered ? 'animate-ticker' : ''}`}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {/* Duplicate items for seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <Link
                key={`${item.link}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-colors duration-200"
              >
                <span className="font-semibold">{item.source}</span>
                <span className="mx-2">|</span>
                <span>{item.title}</span>
                <span className="mx-2 text-reform-primary/60 dark:text-reform-light/60">
                  {item.timestamp}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
