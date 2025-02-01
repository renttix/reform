/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons']
  }
}

module.exports = nextConfig
