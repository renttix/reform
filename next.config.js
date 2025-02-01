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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack: (config, { dev, isServer }) => {
    // Avoid micromatch in production build
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [];
    }
    return config;
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'],
    turbotrace: {
      logLevel: 'error'
    }
  }
}

module.exports = nextConfig
