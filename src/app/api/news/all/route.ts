import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['description', 'description'],
    ],
  },
})

// RSS feed URLs
const RSS_FEEDS = [
  // Major UK News Sources
  {
    url: 'https://feeds.bbci.co.uk/news/uk/rss.xml',
    source: 'BBC News'
  },
  {
    url: 'https://feeds.bbci.co.uk/news/politics/rss.xml',
    source: 'BBC Politics'
  },
  {
    url: 'https://www.theguardian.com/politics/rss',
    source: 'The Guardian Politics'
  },
  {
    url: 'https://www.independent.co.uk/news/uk/politics/rss',
    source: 'The Independent Politics'
  },
  {
    url: 'https://www.mirror.co.uk/news/politics/rss.xml',
    source: 'Daily Mirror Politics'
  },
  // Local News
  {
    url: 'https://www.birminghammail.co.uk/?service=rss',
    source: 'Birmingham Mail'
  },
  {
    url: 'https://www.birminghamworld.uk/rss',
    source: 'Birmingham World'
  }
]

export async function GET() {
  try {
    // Fetch all feeds in parallel with timeout
    const feedPromises = RSS_FEEDS.map(async ({ url, source }) => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const feed = await parser.parseURL(url)
        clearTimeout(timeoutId)

        return feed.items.map(item => ({
          ...item,
          source,
          description: item.contentSnippet || item.description || '',
          link: item.link || '',
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
        }))
      } catch (error) {
        console.error(`Error fetching ${source} feed:`, error)
        return []
      }
    })

    const feedResults = await Promise.all(feedPromises)
    
    // Combine all items, sort by date, and deduplicate by title
    const allItems = feedResults
      .flat()
      .sort((a, b) => {
        const dateA = new Date(a.pubDate)
        const dateB = new Date(b.pubDate)
        return dateB.getTime() - dateA.getTime()
      })
      // Remove duplicates based on title
      .filter((item, index, self) => 
        index === self.findIndex((t) => t.title === item.title)
      )
      // Limit to most recent 100 items
      .slice(0, 100)

    return NextResponse.json(allItems)
  } catch (error) {
    console.error('Error in /api/news/all:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
