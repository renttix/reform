import { Metadata } from 'next'
import { generateAreaMetadata } from '../metadata'
import AreaLayout from '@/components/AreaLayout'
import { AreaContent } from '@/types/area'

export const metadata: Metadata = generateAreaMetadata('Pype Hayes')

const content: AreaContent = {
  title: 'Pype Hayes',
  summary: 'Discover how Reform UK\'s policies will benefit Pype Hayes and its residents. We\'re committed to addressing local challenges and building a stronger community.',
  challenges: [
    {
      title: 'Park Safety Concerns',
      description: 'Pype Hayes Park, once a community cornerstone, has seen a troubling rise in crime. West Midlands Police recorded 156 incidents in the park area during 2023, including drug-related offences and vandalism. The Friends of Pype Hayes Park group reports significant damage to facilities.'
    },
    {
      title: 'Unauthorised HMO Developments',
      description: 'The Chester Road corridor has been particularly affected by uncontrolled HMO conversions. Birmingham City Council enforcement data shows 45 investigations into unauthorised HMOs in 2023, with concerns about overcrowding and safety standards.'
    },
    {
      title: 'Infrastructure Strain',
      description: 'Local schools are operating at 115% capacity according to Birmingham Education Authority figures. The Eachelhurst Road medical centre reports patient registration numbers have doubled since 2020, creating significant waiting times for appointments.'
    }
  ],
  statistics: [
    {
      label: 'Crime Rate',
      value: '94.7 per 1,000 residents',
      source: 'West Midlands Police, 2023'
    },
    {
      label: 'Anti-Social Behaviour',
      value: '156 park incidents in 2023',
      source: 'West Midlands Police'
    },
    {
      label: 'HMO Properties',
      value: '45 investigations',
      source: 'BCC Enforcement 2023'
    },
    {
      label: 'Population Change',
      value: '+15% since 2011',
      source: 'ONS Census 2021'
    },
    {
      label: 'Unemployment Rate',
      value: '10.5%',
      source: 'DWP Statistics 2023'
    },
    {
      label: 'School Capacity',
      value: '115%',
      source: 'Birmingham Education Authority'
    },
    {
      label: 'Emergency Housing',
      value: '+38% applications since 2021',
      source: 'BCC Housing Department'
    }
  ],
  solutions: [
    {
      title: 'Park Security',
      description: 'Installing modern security systems and increasing park warden presence.',
      policy: 'Reform UK supports increased funding for public space protection and maintenance.'
    },
    {
      title: 'Housing Enforcement',
      description: 'Strengthening local authority powers to tackle unauthorised HMOs.',
      policy: 'Reform UK advocates for stricter housing regulations and enforcement capabilities.'
    },
    {
      title: 'Infrastructure Investment',
      description: 'Expanding local service capacity to meet growing community needs.',
      policy: 'Reform UK\'s policies prioritise sustainable community development and infrastructure improvement.'
    }
  ],
  references: [
    {
      text: 'Birmingham Mail - "Pype Hayes Park Safety Concerns", November 2023',
      url: 'https://www.birminghammail.co.uk/news/local-news'
    },
    {
      text: 'Birmingham City Council - HMO Enforcement Report 2023',
      url: 'https://www.birmingham.gov.uk/housing'
    },
    {
      text: 'Birmingham Education Authority - Capacity Report 2023',
      url: 'https://www.birmingham.gov.uk/education'
    }
  ],
  imagePath: '/images/areas/pype-hayes.jpg'
}

export default function PypeHayesPage() {
  return <AreaLayout {...content} />
}
