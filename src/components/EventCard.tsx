import Image from 'next/image'
import Link from 'next/link'

interface EventCardProps {
  title: string
  date: string
  location: string
  description: string
  imageUrl: string
  registrationUrl: string
}

export default function EventCard({
  title,
  date,
  location,
  description,
  imageUrl,
  registrationUrl,
}: EventCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={`Reform UK Erdington event: ${title} at ${location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <header>
          <h3 className="text-xl font-bold mb-2 text-reform-dark dark:text-white">
            <Link 
              href={registrationUrl}
              className="hover:text-reform-primary dark:hover:text-reform-light transition-colors"
              title={`Learn more about ${title}`}
            >
              {title}
            </Link>
          </h3>
        </header>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={date} className="text-sm">{formattedDate}</time>
        </div>
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <address className="text-sm not-italic">{location}</address>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <Link
            href={registrationUrl}
            className="inline-block bg-reform-primary dark:bg-reform-dark text-white px-6 py-2 rounded-lg font-medium hover:bg-reform-primary/90 dark:hover:bg-reform-dark/90 transition-colors duration-200"
            aria-label={`Register for ${title}`}
          >
            Register Now
          </Link>
          <Link
            href={registrationUrl}
            className="text-reform-primary dark:text-reform-light hover:text-reform-primary/80 dark:hover:text-reform-light/80 font-medium flex items-center gap-1 group"
            aria-label={`Learn more about ${title}`}
          >
            Learn More
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
