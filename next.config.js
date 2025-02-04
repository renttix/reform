/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'static.independent.co.uk',
      'i.guim.co.uk',
      'www.telegraph.co.uk',
      'ichef.bbci.co.uk',
      'images.ctfassets.net',
      'static.standard.co.uk',
      'i2-prod.birminghammail.co.uk',
      'i2-prod.mirror.co.uk',
      'www.thesun.co.uk',
      'i.dailymail.co.uk',
      'cdn.images.express.co.uk',
      'images.news.itv.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
