'use client';

import { useEffect, useState } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

const videoLinks = {
  latest1: 'videos',
  policy1: 'playlists?list=PLfHdP5iIHjqQDfVJBxKtxDtLHyDYxz_Hy',
  speech1: 'playlists?list=PLfHdP5iIHjqQDfVJBxKtxDtLHyDYxz_Hy',
  local1: 'playlists?list=PLfHdP5iIHjqQDfVJBxKtxDtLHyDYxz_Hy',
  campaign1: 'playlists?list=PLfHdP5iIHjqQDfVJBxKtxDtLHyDYxz_Hy',
  interview1: 'playlists?list=PLfHdP5iIHjqQDfVJBxKtxDtLHyDYxz_Hy'
};

export default function YouTubeFeed() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/youtube');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        if ('error' in data) {
          throw new Error(data.error);
        }
        setVideos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load videos');
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-reform-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error loading videos. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/@ReformUKOfficial/${videoLinks[video.id as keyof typeof videoLinks]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-reform-primary rounded-full p-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm mt-2 font-medium">Watch on YouTube</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-reform-primary dark:group-hover:text-reform-primary transition-colors line-clamp-2">
                {video.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                {video.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.youtube.com/@ReformUKOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-reform-primary text-white rounded-lg hover:bg-reform-primary/90 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
          View All Videos on YouTube
        </a>
      </div>
    </div>
  );
}
