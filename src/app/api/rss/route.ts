import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const feedUrl = searchParams.get('url')

  if (!feedUrl) {
    return NextResponse.json(
      { error: 'Feed URL is required' },
      { status: 400 }
    )
  }

  try {
    console.log('Fetching RSS feed from:', feedUrl)
    
    const parser = new Parser({
      customFields: {
        item: [
          ['media:content', 'media'],
          ['description', 'description'],
        ],
      },
    })
    
    // Add a random query parameter to bypass caching
    const urlWithNocache = `${feedUrl}${feedUrl.includes('?') ? '&' : '?'}_nocache=${Date.now()}`
    
    const feed = await parser.parseURL(urlWithNocache)
    console.log('Feed fetched successfully:', {
      title: feed.title,
      itemCount: feed.items?.length,
      firstItem: feed.items?.[0]
    })
    
    return NextResponse.json(feed)
  } catch (error: any) {
    console.error('Failed to fetch RSS feed:', error)
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed', details: error?.message || 'Unknown error' },
      { status: 500 }
    )
  }
}
