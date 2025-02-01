/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
