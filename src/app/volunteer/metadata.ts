import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Volunteer | Reform UK Erdington',
  description: 'Volunteer with Reform UK Erdington. Help make a difference in our community through local campaigns, events, and outreach programmes.',
  openGraph: {
    title: 'Volunteer with Reform UK Erdington',
    description: 'Join our team of volunteers and help make a real difference in Erdington. Get involved in local campaigns, events, and community outreach.',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Volunteer with Reform UK Erdington' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volunteer with Reform UK Erdington',
    description: 'Join our team of volunteers and help make a real difference in Erdington. Get involved in local campaigns, events, and community outreach.',
    images: ['/images/hero.jpg'],
  },
}

export default metadata
