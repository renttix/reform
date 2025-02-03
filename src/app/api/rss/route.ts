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
    const parser = new Parser()
    const feed = await parser.parseURL(feedUrl)
    
    return NextResponse.json(feed)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' },
      { status: 500 }
    )
  }
}
