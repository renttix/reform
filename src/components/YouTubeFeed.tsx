'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface Video {
  title: string;
  link: string;
  published: string;
  thumbnail: string;
  description: string;
}

interface VideoResponse {
  videos: Video[];
  hasMore: boolean;
  totalVideos: number;
  nextOffset: number;
}

export default function YouTubeFeed() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const initialLoad = useRef(true);
  const isFirstRender = useRef(true);

  // Fetch videos from API
  const fetchVideos = useCallback(async (currentOffset: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/youtube?offset=${currentOffset}&limit=12`);
      if (!res.ok) throw new Error('Failed to fetch videos');
      const data: VideoResponse = await res.json();
      
      setVideos(prev => currentOffset === 0 ? data.videos : [...prev, ...data.videos]);
      setHasMore(data.hasMore);
      setOffset(data.nextOffset);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load videos');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle intersection with last video element
  const lastVideoRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading || !hasMore) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchVideos(offset);
      }
    }, {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    });

    if (node) observer.current.observe(node);
  }, [isLoading, hasMore, offset, fetchVideos]);

  // Initial load
  useEffect(() => {
    if (isFirstRender.current) {
      fetchVideos(0);
      isFirstRender.current = false;
    }
  }, [fetchVideos]);

  // Polling for updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLoading) {
        fetchVideos(0).then(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }, 600000);

    return () => {
      clearInterval(interval);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fetchVideos, isLoading]);

  return (
    <div className="space-y-8">
      {error && videos.length === 0 && (
        <div role="alert" className="text-center text-red-500 p-4">
          <p>Error: {error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 min-h-screen">
        {videos.map((video, index) => (
          <article
            key={video.link}
            ref={index === videos.length - 1 ? lastVideoRef : null}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            <meta itemProp="uploadDate" content={video.published} />
            <meta itemProp="thumbnailUrl" content={video.thumbnail} />
            <meta itemProp="description" content={video.description} />
            
            <a 
              href={video.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block"
              itemProp="url"
              aria-label={`Watch ${video.title}`}
            >
              <img 
                src={video.thumbnail} 
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                loading="lazy"
                itemProp="thumbnail"
              />
            </a>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-500" itemProp="name">
                <a 
                  href={video.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Watch ${video.title}`}
                >
                  {video.title}
                </a>
              </h2>
              <p 
                className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2"
                itemProp="abstract"
              >
                {video.description}
              </p>
              <time 
                className="text-gray-500 dark:text-gray-400 text-xs"
                itemProp="datePublished"
              >
                {video.published}
              </time>
            </div>
          </article>
        ))}
      </div>
      
      {isLoading && videos.length === 0 ? (
        <div 
          role="status" 
          aria-label="Loading videos" 
          className="col-span-full flex justify-center items-center min-h-[400px]"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        hasMore && (
          <div 
            role="status" 
            aria-label="Loading more videos" 
            className="col-span-full flex justify-center p-4"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500">
              <span className="sr-only">Loading more...</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}
