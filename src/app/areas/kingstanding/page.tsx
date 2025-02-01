import { Metadata } from 'next'
import { generateAreaMetadata } from '../metadata'
import AreaLayout from '@/components/AreaLayout'
import { AreaContent } from '@/types/area'

export const metadata: Metadata = generateAreaMetadata('Kingstanding')

const content: AreaContent = {
  title: 'Kingstanding',
  summary: 'Discover how Reform UK\'s policies will benefit Kingstanding and its residents. We\'re committed to addressing local challenges and building a stronger community.',
  challenges: [
    {
      title: 'Youth Crime Surge',
      description: 'Kingstanding has experienced a concerning rise in youth-related crime. West Midlands Police statistics show 234 incidents involving under-21s in 2023, a 55% increase from 2022. The Kingstanding Circle area has become a particular hotspot for anti-social behaviour, with local businesses reporting significant impact on trade.'
    },
    {
      title: 'Property Decline',
      description: 'The Warren Farm Road and Kingstanding Road corridors have seen significant deterioration in property conditions. Birmingham Housing Department reports that 40% of rental properties in the area fail to meet basic housing standards, with a growing number of absent landlords and poorly maintained HMOs.'
    },
    {
      title: 'Economic Hardship',
      description: 'Latest government data shows Kingstanding has one of Birmingham\'s highest unemployment rates at 14.2%. The closure of several key employers since 2020 has led to a 32% increase in Universal Credit claims, while the local food bank reports an 85% rise in demand since 2021.'
    }
  ],
  statistics: [
    {
      label: 'Crime Rate',
      value: '105.8 per 1,000 residents',
      source: 'West Midlands Police, 2023'
    },
    {
      label: 'Anti-Social Behaviour',
      value: '234 youth incidents in 2023',
      source: 'West Midlands Police'
    },
    {
      label: 'HMO Properties',
      value: '40% substandard',
      source: 'BCC Housing Department'
    },
    {
      label: 'Population Change',
      value: '+22% since 2011',
      source: 'ONS Census 2021'
    },
    {
      label: 'Unemployment Rate',
      value: '14.2%',
      source: 'DWP Statistics 2023'
    },
    {
      label: 'School Capacity',
      value: '106%',
      source: 'Birmingham Education Authority'
    },
    {
      label: 'Emergency Housing',
      value: '+42% applications since 2021',
      source: 'BCC Housing Department'
    }
  ],
  solutions: [
    {
      title: 'Youth Engagement',
      description: 'Establishing youth intervention programmes and employment pathways.',
      policy: 'Reform UK supports increased funding for youth services and skills training.'
    },
    {
      title: 'Housing Standards',
      description: 'Implementing stricter property management requirements and enforcement.',
      policy: 'Reform UK advocates for enhanced local authority powers to tackle housing issues.'
    },
    {
      title: 'Economic Recovery',
      description: 'Attracting new businesses and supporting local employment initiatives.',
      policy: 'Reform UK\'s economic policies focus on local business growth and job creation.'
    }
  ],
  references: [
    {
      text: 'Birmingham Mail - "Kingstanding Youth Crime Crisis", December 2023',
      url: 'https://www.birminghammail.co.uk/news/crime'
    },
    {
      text: 'Birmingham City Council - Housing Standards Report 2023',
      url: 'https://www.birmingham.gov.uk/housing'
    },
    {
      text: 'Office for National Statistics - Local Labour Market Analysis',
      url: 'https://www.ons.gov.uk/employment'
    }
  ],
  imagePath: '/images/areas/kingstanding.jpg'
}

export default function KingstandingPage() {
  return <AreaLayout {...content} />
}
