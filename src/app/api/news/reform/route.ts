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

// RSS feed URLs - Major UK News Sources
const RSS_FEEDS = [
  {
    url: 'https://feeds.bbci.co.uk/news/politics/rss.xml',
    source: 'BBC Politics'
  },
  {
    url: 'https://www.itv.com/news/politics/rss',
    source: 'ITV News Politics'
  },
  {
    url: 'https://www.telegraph.co.uk/politics/rss.xml',
    source: 'The Telegraph Politics'
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
    url: 'https://www.express.co.uk/news/politics/rss',
    source: 'Daily Express Politics'
  },
  {
    url: 'https://www.dailymail.co.uk/news/politics/index.rss',
    source: 'Daily Mail Politics'
  },
  {
    url: 'https://www.thesun.co.uk/news/politics/feed/',
    source: 'The Sun Politics'
  },
  {
    url: 'https://www.mirror.co.uk/news/politics/rss.xml',
    source: 'Daily Mirror Politics'
  },
  {
    url: 'https://www.standard.co.uk/news/politics/rss',
    source: 'Evening Standard Politics'
  }
]

const REFORM_KEYWORDS = [
  'Reform UK',
  'Reform Party',
  'Richard Tice',
  'Nigel Farage',
  'Ben Habib',
  'Reform UK party',
  'Reform UK news',
  'Reform UK policies',
  'Reform UK manifesto',
  'Reform UK campaign',
  'Reform UK elections',
  'Reform UK candidates',
  'Reform UK leadership',
  'Reform UK general election',
  'Reform UK local elections',
  'Reform UK by-elections',
  'Reform UK voting',
  'Reform UK immigration',
  'Reform UK tax',
  'Reform UK NHS',
  'Reform UK economy',
  'Reform UK Brexit'
].map(keyword => keyword.toLowerCase())

export async function GET() {
  try {
    // Fetch all feeds in parallel with timeout
    const feedPromises = RSS_FEEDS.map(async ({ url, source }) => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const feed = await parser.parseURL(url)
        clearTimeout(timeoutId)

        // Filter and map items
        const reformItems = feed.items
          .filter(item => {
            const text = `${item.title} ${item.contentSnippet || item.description || ''}`.toLowerCase()
            return REFORM_KEYWORDS.some(keyword => text.includes(keyword))
          })
          .map(item => ({
            ...item,
            source,
            description: item.contentSnippet || item.description || '',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            media: item.media?.$.url || item.enclosure?.url || null
          }))

        return reformItems
      } catch (error) {
        console.error(`Error fetching ${source} feed:`, error)
        return []
      }
    })

    const feedResults = await Promise.all(feedPromises)
    
    // Combine all items, sort by date, and deduplicate
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

    return NextResponse.json(allItems)
  } catch (error) {
    console.error('Error in /api/news/reform:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
