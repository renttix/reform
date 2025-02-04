import { NextResponse } from 'next/server';

// Video categories and content
const videos = [
  {
    id: 'latest1',
    title: 'Latest Videos',
    description: 'Watch our most recent updates, including policy announcements, speeches, and campaign events.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/hero.jpg'
  },
  {
    id: 'policy1',
    title: 'Policy Announcements',
    description: 'Learn about our key policies on immigration, NHS reform, tax cuts, and economic growth.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/immigration-hero.jpg'
  },
  {
    id: 'speech1',
    title: 'Speeches & Events',
    description: 'Major speeches, rallies, and public events from Reform UK leadership and representatives.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/events-hero.jpg'
  },
  {
    id: 'local1',
    title: 'Local Updates',
    description: 'Coverage of our work in Erdington, Castle Vale, Pype Hayes, and surrounding areas.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/areas/erdington.jpg'
  },
  {
    id: 'campaign1',
    title: 'Campaign Activities',
    description: 'Follow our campaign trail, community engagement, and grassroots activities.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/about-hero.jpg'
  },
  {
    id: 'interview1',
    title: 'Media Coverage',
    description: 'TV appearances, interviews, and media discussions featuring Reform UK representatives.',
    publishedAt: new Date().toISOString(),
    thumbnail: '/images/growth-hero.jpg'
  }
];

export async function GET() {
  try {
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}
