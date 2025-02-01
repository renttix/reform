/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,
  compress: true,
  generateBuildId: () => 'build',
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2
  },
  swcMinify: true,
  optimizeFonts: true,
  reactStrictMode: true,
  output: 'standalone'
}

module.exports = nextConfig
