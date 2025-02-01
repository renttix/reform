/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: true,
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'],
    serverMinification: true
  }
}

module.exports = nextConfig
