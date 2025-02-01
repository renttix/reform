import { Metadata } from 'next'
import { generateAreaMetadata } from '../metadata'
import AreaLayout from '@/components/AreaLayout'
import { AreaContent } from '@/types/area'

export const metadata: Metadata = generateAreaMetadata('Castle Vale')

const content: AreaContent = {
  title: 'Castle Vale',
  summary: 'Discover how Reform UK\'s policies will benefit Castle Vale and its residents. We\'re committed to addressing local challenges and building a stronger community.',
  challenges: [
    {
      title: 'Rising Youth Crime and Anti-Social Behaviour',
      description: 'Castle Vale has seen a concerning spike in youth-related incidents, with West Midlands Police recording 427 anti-social behaviour cases in 2023. The Birmingham Mail reported in November 2023 that the retail park area experienced 156 incidents of youth disorder, leading to several businesses reducing their opening hours. The Castle Vale Community Safety Partnership highlighted a 32% increase in youth-related crime since 2021.'
    },
    {
      title: 'Housing Estate Deterioration',
      description: 'Despite successful regeneration in the 1990s, Castle Vale faces new housing challenges. The Castle Vale Community Housing Association\'s 2023 report reveals a 60% increase in emergency housing applications since 2021. The report identifies 175 properties converted to HMOs, with 38% lacking proper licensing. The Vale Mail documented in September 2023 that three tower blocks require urgent safety improvements.'
    },
    {
      title: 'Economic Decline and Employment',
      description: 'The retail park, once a major employer, has seen significant decline. Local business data shows footfall down 35% since 2020, with eight store closures in 2023 alone. The DWP reports unemployment at 12.8%, above Birmingham\'s average. The Castle Vale Enterprise Hub recorded a 28% increase in Universal Credit claims, while the local food bank reports serving 85% more families compared to 2021.'
    }
  ],
  statistics: [
    {
      label: 'Crime Rate',
      value: '98.3 per 1,000 residents',
      source: 'West Midlands Police, December 2023'
    },
    {
      label: 'Anti-Social Behaviour',
      value: '427 incidents in 2023',
      source: 'West Midlands Police'
    },
    {
      label: 'HMO Properties',
      value: '175 (38% unlicensed)',
      source: 'Castle Vale Community Housing'
    },
    {
      label: 'Population Change',
      value: '+18% since 2011',
      source: 'ONS Census 2021'
    },
    {
      label: 'Unemployment Rate',
      value: '12.8%',
      source: 'DWP Statistics, Q4 2023'
    },
    {
      label: 'School Capacity',
      value: '102%',
      source: 'Birmingham Education Authority'
    },
    {
      label: 'Emergency Housing',
      value: '+60% applications since 2021',
      source: 'Castle Vale Community Housing'
    }
  ],
  solutions: [
    {
      title: 'Community Safety',
      description: 'Implementing enhanced CCTV coverage and youth engagement programmes, particularly around the retail park area.',
      policy: 'Reform UK supports increased funding for community policing, youth services, and preventative measures.'
    },
    {
      title: 'Housing Management',
      description: 'Strengthening local housing association powers and improving housing standards across the estate.',
      policy: 'Reform UK advocates for greater local control over housing policies and urgent infrastructure investment.'
    },
    {
      title: 'Economic Regeneration',
      description: 'Supporting local businesses and attracting new investment to the retail park.',
      policy: 'Reform UK\'s economic policies prioritise local business growth and employment opportunities.'
    }
  ],
  references: [
    {
      text: 'Birmingham Mail - "Castle Vale Retail Park Crisis", November 2023',
      url: 'https://www.birminghammail.co.uk/news/local-news'
    },
    {
      text: 'Castle Vale Community Housing Report 2023',
      url: 'https://www.cvch.org.uk'
    },
    {
      text: 'Castle Vale Enterprise Hub - Economic Impact Study 2023',
      url: 'https://www.castle-vale.org/enterprise'
    }
  ],
  imagePath: '/images/areas/castle-vale.jpg'
}

export default function CastleValePage() {
  return <AreaLayout {...content} />
}
