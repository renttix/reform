'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NewsItem {
  title: string
  link: string
  source: string
  timestamp: string
}

// Default news items to show when no live news is available
const DEFAULT_NEWS_ITEMS: NewsItem[] = [
  {
    title: "Reform UK's Plan for Economic Growth",
    link: "https://reform.uk/policies/economy",
    source: "Reform UK",
    timestamp: new Date().toLocaleDateString()
  },
  {
    title: "Reform UK Erdington - Fighting for Local Change",
    link: "/about",
    source: "Reform UK Erdington",
    timestamp: new Date().toLocaleDateString()
  },
  {
    title: "Join Reform UK's Campaign for a Better Britain",
    link: "/join",
    source: "Reform UK",
    timestamp: new Date().toLocaleDateString()
  },
  {
    title: "Reform UK's Vision for the NHS",
    link: "/plan/reform-nhs",
    source: "Reform UK",
    timestamp: new Date().toLocaleDateString()
  },
  {
    title: "Immigration Policy - Taking Back Control",
    link: "/plan/control-immigration",
    source: "Reform UK",
    timestamp: new Date().toLocaleDateString()
  }
]

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
  const [newsItems, setNewsItems] = useState<NewsItem[]>(DEFAULT_NEWS_ITEMS)
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

        // Remove duplicates based on title and source
        const uniqueItems = filteredItems.reduce((acc: any[], item: any) => {
          const isDuplicate = acc.some(
            existingItem => 
              existingItem.title.toLowerCase() === item.title.toLowerCase() &&
              existingItem.source === item.source
          )
          if (!isDuplicate) {
            acc.push(item)
          }
          return acc
        }, [])

        const mappedItems = uniqueItems.map((item: any) => ({
          title: item.title,
          link: item.link,
          source: item.source,
          timestamp: new Date(item.pubDate).toLocaleDateString()
        }))

        // Combine live news with default items if there aren't enough live items
        const combinedItems = mappedItems.length >= 5 
          ? mappedItems 
          : [...mappedItems, ...DEFAULT_NEWS_ITEMS.slice(0, 5 - mappedItems.length)]

        setNewsItems(combinedItems)
      } catch (error) {
        console.error('Error fetching news:', error)
        // Keep showing default items on error
        setNewsItems(DEFAULT_NEWS_ITEMS)
      }
    }

    fetchNews()
    // Fetch news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-reform-primary/5 dark:bg-reform-dark/50 border-b border-reform-primary/10 dark:border-white/10">
      <div className="container mx-auto">
        <div 
          className="relative overflow-hidden h-10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`flex whitespace-nowrap items-center h-full ${!isHovered ? 'animate-ticker' : ''}`}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {/* Duplicate items for continuous scroll */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <Link
                key={`${item.link}-${index}`}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center space-x-2 px-6 text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-colors duration-200"
              >
                <span className="font-semibold text-reform-primary dark:text-reform-light">{item.source}</span>
                <span className="text-reform-primary/60 dark:text-reform-light/60">|</span>
                <span className="hover:underline">{item.title}</span>
                <span className="text-sm text-reform-primary/60 dark:text-reform-light/60">
                  {item.timestamp}
                </span>
              </Link>
            ))}
          </div>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-reform-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-reform-dark to-transparent z-10"></div>
        </div>
      </div>
    </div>
  )
}
