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
    serverMinification: true,
    optimizeServerBuilds: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = false;
    }
    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  generateBuildId: () => 'build',
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true
}

module.exports = nextConfig
