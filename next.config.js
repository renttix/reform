/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    disableMemoryWatcher: true,
    disableTelemetry: true
  }
}

module.exports = nextConfig
