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
    // Avoid client-side trace collection
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
        minimize: false,
        concatenateModules: false
      };
    }
    // Add custom ignore patterns for micromatch
    config.watchOptions = {
      ignored: ['**/.git/**', '**/node_modules/**', '**/.next/**']
    };
    return config;
  },
  // Explicitly define page patterns to avoid micromatch issues
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Disable unnecessary file tracing
  generateBuildId: () => 'build',
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true
}

module.exports = nextConfig
