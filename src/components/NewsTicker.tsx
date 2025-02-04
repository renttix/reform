'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NewsItem {
  title: string;
  link: string;
  source: string;
  timestamp: string;
}

const KEYWORDS = [
  'Reform UK',
  'Reform Party',
  'Richard Tice',
  'Nigel Farage',
  'Ben Habib',
  'Reform UK party',
  'Reform UK news',
  'Reform UK updates',
  'Reform UK policies',
  'Reform UK manifesto',
  'Reform UK campaign',
  'Reform UK elections',
  'Reform UK candidates',
  'Reform UK members',
  'Reform UK leadership',
  'Reform UK general election',
  'Reform UK local elections',
  'Reform UK by-elections',
  'Reform UK voting',
  'Reform UK immigration',
  'Reform UK tax',
  'Reform UK NHS',
  'Reform UK economy',
  'Reform UK Brexit',
  'Reform UK Birmingham',
  'Reform UK Erdington',
].map(keyword => keyword.toLowerCase());

export default function NewsTicker() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news/all');
        const data = await response.json();

        // Filter news items containing keywords
        const filteredItems = data.filter((item: any) => {
          const text = `${item.title} ${item.description}`.toLowerCase();
          return KEYWORDS.some(keyword => text.includes(keyword));
        });

        // Remove duplicates based on title and source
        const uniqueItems = filteredItems.reduce((acc: any[], item: any) => {
          const isDuplicate = acc.some(
            existingItem =>
              existingItem.title.toLowerCase() === item.title.toLowerCase() &&
              existingItem.source === item.source
          );
          if (!isDuplicate) {
            acc.push(item);
          }
          return acc;
        }, []);

        // Map and sort by date
        const mappedItems = uniqueItems
          .map((item: any) => ({
            title: item.title,
            link: item.link,
            source: item.source,
            timestamp: new Date(item.pubDate).toLocaleDateString()
          }))
          .sort((a: any, b: any) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .slice(0, 20); // Keep only the 20 most recent items

        setNewsItems(mappedItems);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
    // Fetch news every 5 minutes
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (newsItems.length === 0) return null;

  return (
    <div className="fixed h-10 top-[80px] lg:top-[112px] 2xl:top-[128px] left-0 right-0 z-40 bg-white/95 dark:bg-reform-dark/95 border-y border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 h-full">
        <div
          className="relative overflow-hidden h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex whitespace-nowrap items-center h-full ${!isHovered ? 'animate-ticker' : ''}`}
            style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
          >
            {/* Duplicate items for continuous scroll */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <Link
                key={`${item.link}-${index}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 text-gray-800 dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-colors duration-200"
              >
                <span className="font-semibold text-reform-primary dark:text-reform-light">{item.source}</span>
                <span className="text-gray-500 dark:text-reform-light/60">|</span>
                <span className="text-gray-800 dark:text-white hover:underline">{item.title}</span>
                <span className="text-sm text-gray-600 dark:text-reform-light/60">
                  {item.timestamp}
                </span>
              </Link>
            ))}
          </div>
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/95 dark:from-reform-dark/95 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/95 dark:from-reform-dark/95 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}
