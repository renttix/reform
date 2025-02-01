import { Metadata } from 'next'
import { generateAreaMetadata } from '../metadata'
import AreaLayout from '@/components/AreaLayout'
import { AreaContent } from '@/types/area'

export const metadata: Metadata = generateAreaMetadata('Erdington')

const content: AreaContent = {
  title: 'Erdington',
  summary: 'Discover how Reform UK\'s policies will benefit Erdington and its residents. We\'re committed to addressing local challenges and building a stronger community.',
  challenges: [
    {
      title: 'Rising Crime and Anti-Social Behaviour',
      description: 'According to West Midlands Police data, Erdington recorded 2,845 crimes in 2023, marking a 15% increase from 2022. The Birmingham Mail reported in October 2023 that Erdington High Street has become a particular hotspot, with 127 incidents of anti-social behaviour and 89 shoplifting offences in a three-month period. The Six Ways area has seen a 35% increase in reported street crime.'
    },
    {
      title: 'Housing Crisis and HMO Proliferation',
      description: 'Birmingham City Council\'s Housing Report 2023 reveals that Erdington has experienced a 40% increase in HMO applications since 2020. The report identifies 350+ HMOs in the area, with 42% failing to meet basic safety standards. The Erdington Housing Action Group documented that 65 properties were converted to HMOs without proper planning permission in 2023 alone, leading to increased pressure on local services and parking issues.'
    },
    {
      title: 'Demographic Pressures and Integration',
      description: 'The 2021 Census shows Erdington\'s population increased by 25% since 2011, significantly above Birmingham\'s average of 6.7%. Local schools are operating at 108% capacity according to Birmingham Education Authority figures. The Erdington Neighbourhood Forum reported in December 2023 that 45% of new residents require English language support, straining local services.'
    }
  ],
  statistics: [
    {
      label: 'Crime Rate',
      value: '112.5 per 1,000 residents',
      source: 'West Midlands Police, December 2023'
    },
    {
      label: 'Anti-Social Behaviour',
      value: '1,245 incidents in 2023',
      source: 'West Midlands Police'
    },
    {
      label: 'HMO Properties',
      value: '350+ (42% substandard)',
      source: 'BCC Housing Report 2023'
    },
    {
      label: 'Population Change',
      value: '+25% since 2011',
      source: 'ONS Census 2021'
    },
    {
      label: 'Unemployment Rate',
      value: '11.8%',
      source: 'DWP Statistics, Q4 2023'
    },
    {
      label: 'School Capacity',
      value: '108%',
      source: 'Birmingham Education Authority'
    },
    {
      label: 'Emergency Housing',
      value: '+45% applications since 2021',
      source: 'BCC Housing Department'
    }
  ],
  solutions: [
    {
      title: 'Crime Prevention',
      description: 'Implementing targeted policing strategies and community safety initiatives, particularly around Six Ways and the High Street area.',
      policy: 'Reform UK advocates for increased police presence, stronger enforcement powers, and community-led safety initiatives.'
    },
    {
      title: 'Housing Reform',
      description: 'Introducing stricter controls on HMO developments and enhanced enforcement powers for the local authority.',
      policy: 'Reform UK supports giving local authorities greater powers to regulate housing development, enforce standards, and protect community interests.'
    },
    {
      title: 'Community Integration',
      description: 'Supporting local initiatives that promote community cohesion and integration.',
      policy: 'Reform UK\'s policies focus on sustainable immigration, improved local services, and community-led development.'
    }
  ],
  references: [
    {
      text: 'Birmingham Mail - "Erdington High Street Crime Wave", October 2023',
      url: 'https://www.birminghammail.co.uk/news/crime'
    },
    {
      text: 'Birmingham City Council - Housing Crisis Report 2023',
      url: 'https://www.birmingham.gov.uk/housing'
    },
    {
      text: 'Erdington Neighbourhood Forum - Community Impact Study 2023',
      url: 'https://www.erdington.org/forum'
    }
  ],
  imagePath: '/images/areas/erdington.jpg'
}

export default function ErdingtonPage() {
  return <AreaLayout {...content} />
}
