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
    optimizePackageImports: ['@heroicons/react', 'react-icons']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Avoid client-side trace collection
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
        minimize: false,
        concatenateModules: false
      };
    }
    return config;
  }
}

module.exports = nextConfig
