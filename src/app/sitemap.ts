import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://reform-uk-erdington.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/join',
    '/volunteer',
    '/privacy-policy',
    '/news/national',
    '/news/local',
    '/plan/control-immigration',
    '/plan/cut-taxes',
    '/plan/drive-growth',
    '/plan/fight-crime',
    '/plan/reform-nhs',
    '/areas/erdington',
    '/areas/castle-vale',
    '/areas/pype-hayes',
    '/areas/stockland-green',
    '/areas/kingstanding',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : route.startsWith('/news') ? 0.9 : 0.8,
  }))

  return routes
}
