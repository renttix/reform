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
  {
    url: 'https://www.politics.co.uk/feed/',
    source: 'Politics.co.uk'
  },
  {
    url: 'https://order-order.com/feed/',
    source: 'Guido Fawkes'
  },
  {
    url: 'https://www.birminghammail.co.uk/news/local-news/rss.xml',
    source: 'Birmingham Mail'
  },
  {
    url: 'https://www.birminghammail.co.uk/news/uk-news/rss.xml',
    source: 'Birmingham Mail UK'
  },
  {
    url: 'https://www.birminghammail.co.uk/news/midlands-news/rss.xml',
    source: 'Birmingham Mail Midlands'
  },
  {
    url: 'https://www.birminghamworld.uk/feed/rss',
    source: 'Birmingham World'
  },
  {
    url: 'https://www.express.co.uk/posts/rss/1',
    source: 'Daily Express'
  },
  {
    url: 'https://www.telegraph.co.uk/rss.xml',
    source: 'The Telegraph'
  },
  {
    url: 'https://www.dailymail.co.uk/news/index.rss',
    source: 'Daily Mail'
  },
  {
    url: 'https://www.thesun.co.uk/feed/',
    source: 'The Sun'
  },
  {
    url: 'https://www.spectator.co.uk/feed.rss',
    source: 'The Spectator'
  },
  {
    url: 'https://www.conservativehome.com/feed',
    source: 'Conservative Home'
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
