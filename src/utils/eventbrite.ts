const BASE_URL = 'https://www.eventbriteapi.com/v3'
const EVENTBRITE_API_KEY = process.env.EVENTBRITE_API_KEY
const EVENTBRITE_ORGANIZATION_ID = process.env.EVENTBRITE_ORGANIZATION_ID

export interface EventbriteEvent {
  id: string
  name: {
    text: string
    html: string
  }
  description: {
    text: string
    html: string
  }
  url: string
  start: {
    timezone: string
    local: string
    utc: string
  }
  end: {
    timezone: string
    local: string
    utc: string
  }
  venue_id: string
  online_event: boolean
  is_free: boolean
  logo?: {
    url: string
    original?: {
      url: string
    }
  }
}

export async function getReformEvents(): Promise<EventbriteEvent[]> {
  // Return empty array if credentials are missing
  if (!EVENTBRITE_API_KEY || !EVENTBRITE_ORGANIZATION_ID) {
    console.warn('Eventbrite credentials not configured')
    return []
  }

  try {
    const response = await fetch(
      `${BASE_URL}/organizations/${EVENTBRITE_ORGANIZATION_ID}/events?status=live&expand=venue`,
      {
        headers: {
          'Authorization': `Bearer ${EVENTBRITE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error('Failed to fetch events:', response.statusText)
      return []
    }

    const data = await response.json()
    return data.events || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export function formatEventDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}
