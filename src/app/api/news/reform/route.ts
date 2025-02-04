import { NextRequest, NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'
import fetch from 'node-fetch'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
})

// RSS feeds for Reform UK news
const RSS_FEEDS = [
  // Major News Sources
  'https://www.express.co.uk/news/politics/feed',
  'https://www.dailymail.co.uk/news/politics/index.rss',
  'https://order-order.com/feed/',
  'https://www.breitbart.com/europe/feed/',
  'https://www.telegraph.co.uk/politics/rss.xml',
  'https://www.thesun.co.uk/news/politics/feed/',
  'https://www.mirror.co.uk/news/politics/rss.xml',
  'https://www.birminghammail.co.uk/news/politics/rss.xml',
  'https://www.theguardian.com/politics/rss',
  'https://feeds.bbci.co.uk/news/politics/rss.xml',
  'https://www.independent.co.uk/news/uk/politics/rss',
  'https://www.standard.co.uk/news/politics/rss',
  'https://metro.co.uk/news/politics/feed/',
  
  // GB News and TalkTV
  'https://www.gbnews.uk/feed.xml',
  'https://www.gbnews.uk/politics/feed.xml',
  'https://www.gbnews.uk/news/feed.xml',
  'https://www.talktv.co.uk/feed.xml',
  'https://www.talktv.co.uk/politics/feed.xml',
  
  // Political News Sources
  'https://www.politicshome.com/rss',
  'https://www.conservativehome.com/feed',
  'https://www.politics.co.uk/feed/',
  'https://www.newstatesman.com/feed',
  'https://www.spectator.co.uk/rss',
  'https://www.unherd.com/feed/',
  'https://www.spiked-online.com/feed/',
  'https://www.politicalite.com/feed/',
  'https://www.westmonster.com/feed/',
  'https://www.unity-news.co.uk/feed/',
  'https://www.democracy-daily.co.uk/feed/',
  'https://www.thecritic.co.uk/feed/',
  'https://www.reaction.life/feed/',
  'https://www.politico.eu/feed/',
  
  // Regional News Sources
  'https://www.birminghammail.co.uk/news/local-news/rss.xml',
  'https://www.manchestereveningnews.co.uk/news/greater-manchester-news/rss.xml',
  'https://www.liverpoolecho.co.uk/news/liverpool-news/rss.xml',
  'https://www.chroniclelive.co.uk/news/north-east-news/rss.xml',
  'https://www.walesonline.co.uk/news/politics/rss.xml',
  'https://www.yorkshirepost.co.uk/rss',
  'https://www.scotsman.com/news/politics/rss',
  'https://www.belfasttelegraph.co.uk/news/politics/rss',
  'https://www.bristolpost.co.uk/news/bristol-news/rss.xml',
  'https://www.leicestermercury.co.uk/news/local-news/rss.xml',
  'https://www.nottinghampost.com/news/local-news/rss.xml',
  'https://www.coventrytelegraph.net/news/coventry-news/rss.xml'
]

// Primary keywords - any of these indicate Reform UK content
const PRIMARY_KEYWORDS = [
  // Party Names
  "Reform UK",
  "Reform Party",
  "Reform UK Party",
  "Reform Party UK",
  "Reform Britain",
  "Reform GB",
  "Reform",
  
  // Key Figures
  "Richard Tice",
  "Tice",
  "Nigel Farage",
  "Farage",
  "Ben Habib",
  "Habib",
  "Anne Widdecombe",
  "Widdecombe",
  "David Bull",
  "Louis Stedman-Bryce",
  "Rupert Lowe",
  "Lance Forman",
  "Jonathan Tilt",
  "John Longworth",
  "Katie Fanning",
  "Pete Durnell",
  
  // Regional
  "Reform UK Erdington",
  "Reform UK Birmingham",
  "Reform UK West Midlands",
  "Reform UK London",
  "Reform UK Scotland",
  "Reform UK Wales",
  "Reform UK Northern Ireland"
].map(keyword => keyword.toLowerCase())

// Secondary keywords - used to validate Reform UK context
const SECONDARY_KEYWORDS = [
  // Political Terms
  "party",
  "politics",
  "election",
  "campaign",
  "candidate",
  "leader",
  "policy",
  "statement",
  "announce",
  "pledge",
  "promise",
  "proposal",
  "plan",
  "manifesto",
  "position",
  "stance",
  "view",
  "response",
  "reaction",
  "comment",
  "speech",
  "interview",
  "debate",
  "rally",
  "support",
  "voter",
  "polling",
  "constituency",
  "seat",
  "parliament",
  "council",
  "local",
  "national",
  "press release",
  
  // Issues
  "brexit",
  "immigration",
  "nhs",
  "tax",
  "economy",
  "growth",
  "crime",
  "education",
  "housing",
  "transport",
  "environment",
  "climate",
  "energy",
  "cost of living",
  "inflation",
  "wages",
  "jobs",
  "business",
  "trade",
  "eu",
  "european union",
  "sovereignty",
  "border control",
  "public services",
  "government spending",
  "debt",
  "deficit"
].map(keyword => keyword.toLowerCase())

let cachedArticles: any[] = []
let lastFetchTime = 0
const CACHE_DURATION = 15 * 60 * 1000 // 15 minutes

async function fetchRssFeed(url: string) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000) // 5s timeout

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Reform UK News Aggregator/1.0',
      },
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    const data = parser.parse(text)
    return data.rss?.channel?.item || []
  } catch (error) {
    console.error(`Error fetching RSS feed from ${url}:`, error)
    return []
  }
}

function isReformArticle(text: string): boolean {
  text = text.toLowerCase()
  
  // Check for primary keywords
  const primaryMatches = PRIMARY_KEYWORDS.filter(keyword => text.includes(keyword))
  if (primaryMatches.length === 0) return false

  // Strong matches that indicate Reform UK content
  const strongMatches = [
    "reform uk",
    "reform party",
    "richard tice",
    "nigel farage",
    "ben habib"
  ]
  
  // If we have a strong match, check for basic context
  if (strongMatches.some(match => text.includes(match))) {
    return SECONDARY_KEYWORDS.some(keyword => text.includes(keyword))
  }

  // For other matches, we need more context
  const secondaryMatches = SECONDARY_KEYWORDS.filter(keyword => text.includes(keyword))
  if (secondaryMatches.length < 2) return false

  // Check for negative patterns only if we don't have a strong match
  const negativePatterns = [
    'reform of uk',
    'uk reform',
    'reform bill',
    'reform act',
    'reform plan',
    'reform proposal',
    'reform measure',
    'reform programme',
    'reform agenda',
    'reform initiative',
    'reform package',
    'reform scheme',
    'reform system',
    'reform process'
  ]

  // If it has a negative pattern and doesn't explicitly mention Reform UK/Party, exclude it
  if (negativePatterns.some(pattern => text.includes(pattern)) && 
      !text.includes('reform uk') && 
      !text.includes('reform party')) {
    return false
  }

  // Special case: if it's about Nigel Farage or Richard Tice, include it
  if (text.includes('farage') || text.includes('tice')) {
    return true
  }

  // If we got this far and have both primary and secondary matches, include it
  return true
}

async function fetchAllArticles() {
  try {
    const currentTime = Date.now()
    
    // Return cached articles if they're still fresh
    if (cachedArticles.length > 0 && currentTime - lastFetchTime < CACHE_DURATION) {
      return cachedArticles
    }

    // Process feeds sequentially with delay
    const articles = []
    for (const url of RSS_FEEDS) {
      try {
        const items = await fetchRssFeed(url)
        if (items.length > 0) {
          articles.push(...items)
        }
        // Add delay between requests
        await new Promise(resolve => setTimeout(resolve, 500))
      } catch (error) {
        console.error(`Error processing feed ${url}:`, error)
        continue
      }
    }

    // Process results
    const allArticles = articles
      .filter(item => {
        const text = `${item.title} ${item.description || ''} ${item['content:encoded'] || ''}`
        return isReformArticle(text)
      })
      .map(item => ({
        title: item.title,
        description: item.description || '',
        link: item.link,
        source: item.source || new URL(item.link).hostname.replace('www.', ''),
        imageUrl: item['media:content']?.['@_url'] || 
                 item.enclosure?.['@_url'] || 
                 item['media:thumbnail']?.['@_url'] || 
                 (item['content:encoded'] && item['content:encoded'].match(/<img[^>]+src="([^">]+)"/)?.[1]) ||
                 '/images/reformlogo.jpg',
        pubDate: item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString(),
      }))
      // Remove duplicates based on title and link
      .filter((item, index, self) => 
        index === self.findIndex(t => 
          t.title === item.title && t.link === item.link
        )
      )
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

    // Update cache
    cachedArticles = allArticles
    lastFetchTime = currentTime

    return allArticles
  } catch (error) {
    console.error('Error fetching articles:', error)
    return cachedArticles
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search')?.toLowerCase() || ''
    const sort = searchParams.get('sort') || 'desc'

    // Fetch and filter articles
    let articles = await fetchAllArticles()

    // Apply search filter
    if (search) {
      articles = articles.filter(article =>
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search)
      )
    }

    // Apply sorting
    articles = articles.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime()
      const dateB = new Date(b.pubDate).getTime()
      return sort === 'asc' ? dateA - dateB : dateB - dateA
    })

    // Apply pagination
    const total = articles.length
    const totalPages = Math.ceil(total / limit)
    const start = (page - 1) * limit
    const end = start + limit
    const paginatedArticles = articles.slice(start, end)

    return NextResponse.json({
      articles: paginatedArticles,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    })
  } catch (error) {
    console.error('Error in /api/news/reform:', error)
    return NextResponse.json(
      { 
        error: 'Internal Server Error',
        articles: [],
        pagination: {
          page: 1,
          limit: 12,
          total: 0,
          totalPages: 0,
        },
      },
      { status: 500 }
    )
  }
}
