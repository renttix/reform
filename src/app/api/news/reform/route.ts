import { NextRequest, NextResponse } from 'next/server'
import Parser from 'rss-parser'
import fetch from 'node-fetch'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

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

async function fetchRssFeed(url: string) {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

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
    return await parser.parseString(text)
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error(`Timeout fetching RSS feed from ${url}`)
    } else {
      console.error(`Error fetching RSS feed from ${url}:`, error)
    }
    return null
  }
}

async function fetchAndStoreNews() {
  try {
    // Fetch all feeds in parallel
    const feedPromises = RSS_FEEDS.map(async ({ url, source }) => {
      const feed = await fetchRssFeed(url)
      if (!feed || !feed.items) return []

      return feed.items
        .filter(item => {
          const text = `${item.title} ${item.contentSnippet || item.description || ''}`.toLowerCase()
          return REFORM_KEYWORDS.some(keyword => text.includes(keyword))
        })
        .map(item => ({
          title: item.title || '',
          description: item.contentSnippet || item.description || '',
          content: item.content || '',
          link: item.link || '',
          source,
          imageUrl: item.media?.$.url || item.enclosure?.url || null,
          pubDate: item.pubDate ? new Date(item.pubDate) : new Date(),
        }))
    })

    const feedResults = await Promise.all(feedPromises)
    const allItems = feedResults.flat()

    // Store articles in database
    for (const item of allItems) {
      await prisma.newsArticle.upsert({
        where: { link: item.link },
        update: item,
        create: item,
      })
    }

    return allItems
  } catch (error) {
    console.error('Error in fetchAndStoreNews:', error)
    return []
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const sort = searchParams.get('sort') || 'desc'

    // Store search query if provided
    if (search) {
      await prisma.searchQuery.create({
        data: {
          query: search,
        },
      })
    }

    // Query articles with pagination and search
    const where: Prisma.NewsArticleWhereInput = search ? {
      OR: [
        { title: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { description: { contains: search, mode: Prisma.QueryMode.insensitive } },
      ],
    } : {}

    // Get articles from database
    const [articles, total] = await Promise.all([
      prisma.newsArticle.findMany({
        where,
        orderBy: { pubDate: sort === 'asc' ? 'asc' : 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.newsArticle.count({ where }),
    ])

    // If no articles in database, fetch and store them
    if (total === 0) {
      await fetchAndStoreNews()
      // Query again after fetching
      const [newArticles, newTotal] = await Promise.all([
        prisma.newsArticle.findMany({
          where,
          orderBy: { pubDate: sort === 'asc' ? 'asc' : 'desc' },
          skip: (page - 1) * limit,
          take: limit,
        }),
        prisma.newsArticle.count({ where }),
      ])

      return NextResponse.json({
        articles: newArticles,
        pagination: {
          page,
          limit,
          total: newTotal,
          totalPages: Math.ceil(newTotal / limit),
        },
      })
    }

    // Return existing articles
    return NextResponse.json({
      articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error in /api/news/reform:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', articles: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
      { status: 500 }
    )
  }
}
