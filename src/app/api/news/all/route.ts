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
  }
]

export async function GET() {
  try {
    // Fetch all feeds in parallel
    const feedPromises = RSS_FEEDS.map(async ({ url, source }) => {
      try {
        const feed = await parser.parseURL(url)
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
    
    // Combine all items and sort by date
    const allItems = feedResults
      .flat()
      .sort((a, b) => {
        const dateA = new Date(a.pubDate)
        const dateB = new Date(b.pubDate)
        return dateB.getTime() - dateA.getTime()
      })
      // Limit to most recent 100 items to prevent the ticker from being too long
      .slice(0, 100)

    return NextResponse.json(allItems)
  } catch (error) {
    console.error('Error in /api/news/all:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
