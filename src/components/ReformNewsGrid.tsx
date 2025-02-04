'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

interface NewsItem {
  id: string
  title: string
  description: string | null
  link: string
  source: string
  imageUrl: string | null
  pubDate: string
}

interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
}

interface ApiResponse {
  articles: NewsItem[]
  pagination: PaginationInfo
  error?: string
}

export default function ReformNewsGrid() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [pagination, setPagination] = useState<PaginationInfo>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'desc')

  const currentPage = parseInt(searchParams.get('page') || '1')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: '10',
          sort: sortOrder,
          ...(searchTerm && { search: searchTerm }),
        })

        const response = await fetch(`/api/news/reform?${params}`)
        const data: ApiResponse = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch news')
        }

        if (data.articles && Array.isArray(data.articles)) {
          setNewsItems(data.articles)
          setPagination(data.pagination)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (error) {
        console.error('Error fetching Reform UK news:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch news')
        setNewsItems([])
        setPagination(undefined)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [currentPage, searchTerm, sortOrder])

  const handleImageError = (link: string) => {
    setImageErrors(prev => ({ ...prev, [link]: true }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
    params.set('page', '1')
    router.push(`/news/reform?${params.toString()}`)
  }

  const handleSort = (order: string) => {
    setSortOrder(order)
    const params = new URLSearchParams(searchParams)
    params.set('sort', order)
    router.push(`/news/reform?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`/news/reform?${params.toString()}`)
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-reform-dark rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-200 dark:bg-gray-700" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-red-600 dark:text-red-400 mb-4">
          {error}
        </p>
        <button
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-reform-primary text-white rounded-lg hover:bg-reform-secondary transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-reform-dark p-4 rounded-xl shadow-lg">
        <form onSubmit={handleSearch} className="w-full sm:w-auto">
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full sm:w-80 px-4 py-2 pr-10 rounded-lg border border-reform-primary/20 dark:border-white/20 bg-white dark:bg-reform-dark/50 focus:outline-none focus:ring-2 focus:ring-reform-primary/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-reform-primary dark:text-reform-light hover:text-reform-secondary dark:hover:text-reform-secondary transition-colors"
            >
              🔍
            </button>
          </div>
        </form>
        <div className="flex items-center gap-2">
          <span className="text-sm text-reform-dark/70 dark:text-white/70">Sort by date:</span>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="px-3 py-2 rounded-lg border border-reform-primary/20 dark:border-white/20 bg-white dark:bg-reform-dark/50 focus:outline-none focus:ring-2 focus:ring-reform-primary/50"
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>

      {/* News Grid */}
      {newsItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-reform-dark dark:text-white">
            No Reform UK news articles found. Please try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-reform-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-48 bg-reform-gray/5 dark:bg-reform-dark/50">
                {item.imageUrl && !imageErrors[item.link] ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError(item.link)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-reform-primary/5 dark:bg-reform-dark/50">
                    <Image
                      src="/images/reformlogo.jpg"
                      alt="Reform UK Logo"
                      width={80}
                      height={80}
                      style={{ width: 'auto', height: 'auto' }}
                      className="w-20 h-20 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                    />
                  </div>
                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-reform-dark dark:text-white line-clamp-2 group-hover:text-reform-primary dark:group-hover:text-reform-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-reform-dark/70 dark:text-white/70 line-clamp-3 text-sm">
                  {item.description}
                </p>
                <div className="flex justify-between items-center text-sm text-reform-primary/60 dark:text-reform-light/60">
                  <span className="font-medium">{item.source}</span>
                  <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 py-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-reform-primary/10 dark:bg-reform-primary/20 text-reform-primary dark:text-reform-light disabled:opacity-50 disabled:cursor-not-allowed hover:bg-reform-primary/20 dark:hover:bg-reform-primary/30 transition-colors"
          >
            Previous
          </button>
          <div className="flex items-center space-x-2">
            {[...Array(pagination.totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === i + 1
                    ? 'bg-reform-primary text-white'
                    : 'bg-reform-primary/10 dark:bg-reform-primary/20 text-reform-primary dark:text-reform-light hover:bg-reform-primary/20 dark:hover:bg-reform-primary/30'
                } transition-colors`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === pagination.totalPages}
            className="px-4 py-2 rounded-lg bg-reform-primary/10 dark:bg-reform-primary/20 text-reform-primary dark:text-reform-light disabled:opacity-50 disabled:cursor-not-allowed hover:bg-reform-primary/20 dark:hover:bg-reform-primary/30 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
