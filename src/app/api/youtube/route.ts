import { NextResponse } from 'next/server';
import axios from 'axios';

interface Video {
  title: string;
  link: string;
  published: string;
  thumbnail: string;
  description: string;
}

export const revalidate = 600; // Revalidate every 10 minutes

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const offset = Math.max(0, parseInt(searchParams.get('offset') || '0'));
    const limit = Math.min(30, Math.max(1, parseInt(searchParams.get('limit') || '12')));

    // Fetch the YouTube channel page
    const response = await axios.get('https://www.youtube.com/@ReformUKOfficial/videos', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Upgrade-Insecure-Requests': '1'
      }
    });

    // Extract the ytInitialData from the page
    const ytDataMatch = response.data.match(/ytInitialData\s*=\s*({.+?});</);
    if (!ytDataMatch) {
      throw new Error('Could not find YouTube initial data');
    }

    const ytData = JSON.parse(ytDataMatch[1]);
    const tabs = ytData.contents?.twoColumnBrowseResultsRenderer?.tabs;
    const videosTab = tabs?.find((tab: any) => tab.tabRenderer?.selected);
    const items = videosTab?.tabRenderer?.content?.richGridRenderer?.contents;

    if (!items) {
      throw new Error('No videos found');
    }

    // Extract and format video information for the requested chunk
    const allVideos = items
      .map((item: any) => {
        const videoRenderer = item.richItemRenderer?.content?.videoRenderer;
        if (!videoRenderer) return null;

        return {
          title: videoRenderer.title.runs[0].text,
          link: `https://www.youtube.com/watch?v=${videoRenderer.videoId}`,
          published: videoRenderer.publishedTimeText?.simpleText || 'Recently',
          thumbnail: videoRenderer.thumbnail.thumbnails[0].url,
          description: videoRenderer.descriptionSnippet?.runs?.[0]?.text || ''
        };
      })
      .filter(Boolean);

    const videos = allVideos.slice(offset, offset + limit);

    if (videos.length === 0 && offset === 0) {
      throw new Error('No videos found');
    }

    return NextResponse.json({
      videos,
      hasMore: offset + limit < allVideos.length,
      totalVideos: allVideos.length,
      nextOffset: offset + limit
    });
  } catch (error: any) {
    console.error('Error fetching YouTube feed:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch videos', 
        details: error.message || 'Unknown error occurred' 
      },
      { status: 500 }
    );
  }
}
