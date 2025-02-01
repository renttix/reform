'use client'

import { useState } from 'react'
import Link from 'next/link'

const areas = [
  { name: 'Erdington', path: '/areas/erdington' },
  { name: 'Castle Vale', path: '/areas/castle-vale' },
  { name: 'Pype Hayes', path: '/areas/pype-hayes' },
  { name: 'Stockland Green', path: '/areas/stockland-green' },
  { name: 'Kingstanding', path: '/areas/kingstanding' }
]

export default function CoverageAreas() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  return (
    <div className="hidden md:flex items-center justify-center space-x-2 text-[13px] mt-2">
      <span className="text-reform-dark/60 dark:text-white/60 font-medium">Serving:</span>
      <div className="flex items-center justify-center">
        {areas.map((area, index) => (
          <div key={area.name} className="relative group">
            <Link 
              href={area.path}
              className={`${
                hoveredArea === area.name 
                  ? 'text-reform-primary dark:text-reform-light scale-110' 
                  : 'text-reform-dark/80 dark:text-white/80'
              } transition-all duration-300 font-medium whitespace-nowrap hover:text-reform-primary dark:hover:text-reform-light`}
              onMouseEnter={() => setHoveredArea(area.name)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              {area.name}
            </Link>
            {index < areas.length - 1 && (
              <span className="text-reform-dark/30 dark:text-white/30 mx-2">•</span>
            )}
            {hoveredArea === area.name && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-reform-primary to-reform-light dark:from-white dark:to-reform-light transform origin-left animate-expandWidth"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
