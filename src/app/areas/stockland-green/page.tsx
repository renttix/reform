import { Metadata } from 'next'
import { generateAreaMetadata } from '../metadata'
import AreaLayout from '@/components/AreaLayout'
import { AreaContent } from '@/types/area'

export const metadata: Metadata = generateAreaMetadata('Stockland Green')

const content: AreaContent = {
  title: 'Stockland Green',
  summary: 'Discover how Reform UK\'s policies will benefit Stockland Green and its residents. We\'re committed to addressing local challenges and building a stronger community.',
  challenges: [
    {
      title: 'Serious Crime Issues',
      description: 'Stockland Green has faced significant crime challenges, with West Midlands Police data showing a 45% increase in serious crime since 2021. The Slade Road area has been particularly affected, with 89 violent incidents reported in 2023 alone. Recent police operations have targeted drug-related activities and organised crime networks.'
    },
    {
      title: 'HMO Crisis',
      description: 'The area has become a hotspot for unregulated HMOs, particularly around Marsh Hill and George Road. Birmingham City Council\'s 2023 Housing Report identifies Stockland Green as having the highest concentration of problematic HMOs in North Birmingham, with over 200 properties raising serious concerns about living conditions and community impact.'
    },
    {
      title: 'Social Cohesion',
      description: 'Recent demographic changes have created integration challenges. The 2023 Community Cohesion Report highlights that 65% of long-term residents report feeling disconnected from their changing neighbourhood, with particular concerns about language barriers and cultural integration.'
    }
  ],
  statistics: [
    {
      label: 'Crime Rate',
      value: '118.2 per 1,000 residents',
      source: 'West Midlands Police, 2023'
    },
    {
      label: 'Anti-Social Behaviour',
      value: '892 incidents in 2023',
      source: 'West Midlands Police'
    },
    {
      label: 'HMO Properties',
      value: '200+ problem properties',
      source: 'BCC Housing Report 2023'
    },
    {
      label: 'Population Change',
      value: '+32% since 2011',
      source: 'ONS Census 2021'
    },
    {
      label: 'Unemployment Rate',
      value: '13.5%',
      source: 'DWP Statistics 2023'
    },
    {
      label: 'School Capacity',
      value: '112%',
      source: 'Birmingham Education Authority'
    },
    {
      label: 'Emergency Housing',
      value: '+55% applications since 2021',
      source: 'BCC Housing Department'
    }
  ],
  solutions: [
    {
      title: 'Crime Reduction',
      description: 'Implementing targeted policing strategies and community safety measures.',
      policy: 'Reform UK supports increased police resources and stronger enforcement powers.'
    },
    {
      title: 'Housing Control',
      description: 'Taking action against rogue landlords and unregulated HMOs.',
      policy: 'Reform UK advocates for immediate intervention powers for local authorities to address housing issues.'
    },
    {
      title: 'Community Integration',
      description: 'Supporting initiatives to rebuild community cohesion.',
      policy: 'Reform UK\'s policies promote sustainable immigration and community-led integration programmes.'
    }
  ],
  references: [
    {
      text: 'Birmingham Mail - "Stockland Green Crime Wave Concerns", January 2024',
      url: 'https://www.birminghammail.co.uk/news/crime'
    },
    {
      text: 'Birmingham City Council - Housing Crisis Report 2023',
      url: 'https://www.birmingham.gov.uk/housing'
    },
    {
      text: 'Community Cohesion Report - Stockland Green 2023',
      url: 'https://www.birmingham.gov.uk/communities'
    }
  ],
  imagePath: '/images/areas/stockland-green.jpg'
}

export default function StocklandGreenPage() {
  return <AreaLayout {...content} />
}
