export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PoliticalOrganization',
    name: 'Reform UK Erdington Branch',
    alternateName: 'Reform Erdington',
    url: 'https://reform-uk-erdington.vercel.app',
    logo: 'https://reform-uk-erdington.vercel.app/images/reformlogo.svg',
    sameAs: [
      'https://facebook.com/groups/reformukerdington',
      'https://x.com/reformukerdington',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Erdington',
      addressRegion: 'Birmingham',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'City',
      name: 'Erdington',
      containsPlace: [
        {
          '@type': 'Place',
          name: 'Castle Vale',
        },
        {
          '@type': 'Place',
          name: 'Pype Hayes',
        },
        {
          '@type': 'Place',
          name: 'Stockland Green',
        },
        {
          '@type': 'Place',
          name: 'Kingstanding',
        },
      ],
    },
    email: 'chair.bhamerdington@reform.uk',
    description: 'Reform UK Erdington Branch - Your local voice for positive change. We\'re committed to cutting taxes, reforming the NHS, controlling immigration, fighting crime, and driving economic growth in Erdington.',
    parentOrganization: {
      '@type': 'PoliticalOrganization',
      name: 'Reform UK',
      url: 'https://reform.uk',
    },
  }
}

export function generateWebPageSchema(pageData: {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.title,
    description: pageData.description,
    url: pageData.url,
    ...(pageData.imageUrl && { image: pageData.imageUrl }),
    ...(pageData.datePublished && { datePublished: pageData.datePublished }),
    ...(pageData.dateModified && { dateModified: pageData.dateModified }),
    isPartOf: {
      '@type': 'WebSite',
      name: 'Reform UK Erdington',
      url: 'https://reform-uk-erdington.vercel.app',
    },
    publisher: {
      '@type': 'PoliticalOrganization',
      name: 'Reform UK Erdington Branch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reform-uk-erdington.vercel.app/images/reformlogo.svg',
      },
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateNewsArticleSchema(article: {
  headline: string
  description: string
  url: string
  imageUrl?: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.headline,
    description: article.description,
    url: article.url,
    ...(article.imageUrl && { image: article.imageUrl }),
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.authorName || 'Reform UK Erdington Branch',
    },
    publisher: {
      '@type': 'PoliticalOrganization',
      name: 'Reform UK Erdington Branch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reform-uk-erdington.vercel.app/images/reformlogo.svg',
      },
    },
  }
}
