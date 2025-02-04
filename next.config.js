/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      // BBC
      'ichef.bbci.co.uk',
      'news.bbci.co.uk',
      // Guardian
      'i.guim.co.uk',
      'static.guim.co.uk',
      // Telegraph
      'www.telegraph.co.uk',
      'static.telegraph.co.uk',
      // Independent
      'static.independent.co.uk',
      'www.independent.co.uk',
      // Sky News
      'e3.365dm.com',
      'news.sky.com',
      // Daily Mail
      'i.dailymail.co.uk',
      // The Sun
      'www.thesun.co.uk',
      // Mirror
      'i2-prod.mirror.co.uk',
      // Express
      'cdn.images.express.co.uk',
      // Metro
      'metro.co.uk',
      // Evening Standard
      'static.standard.co.uk',
      // Reuters
      'www.reuters.com',
      'static.reuters.com',
      // Bloomberg
      'assets.bwbx.io',
      // Regional News
      'i2-prod.birminghammail.co.uk',
      'i2-prod.manchestereveningnews.co.uk',
      'i2-prod.liverpoolecho.co.uk',
      'i2-prod.chroniclelive.co.uk',
      'i2-prod.walesonline.co.uk',
      'i2-prod.dailyrecord.co.uk',
      'i2-prod.glasgowlive.co.uk',
      'i2-prod.mylondon.news',
      // Other News Sources
      'static.politicshome.com',
      'www.politico.eu',
      'images.huffingtonpost.com',
      'www.thenational.scot',
      'www.scotsman.com',
      'www.heraldscotland.com',
      'www.belfasttelegraph.co.uk',
      'www.yorkshirepost.co.uk',
      // Fallback
      'reformnewsite.reform',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
