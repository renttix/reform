'use client'

import { useState } from 'react'

export default function DonateButton() {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <div className="relative">
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 -z-10 bg-gradient-to-r from-reform-primary/40 to-reform-light/40 rounded-lg blur-3xl scale-110 transition-all duration-500 ${
          isAnimating ? 'opacity-100 scale-125' : 'opacity-0 scale-110'
        }`} 
      />
      {/* Button */}
      <a
        href="https://donate.reformparty.uk/birmingham-erdington"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-reform-primary via-reform-light to-reform-primary text-white rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-reform-primary/20 relative overflow-hidden group"
        onClick={handleClick}
      >
        <span className="relative z-10 flex items-center">
          <span className="mr-3 text-2xl">🤝</span>
          Donate Now
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </a>
    </div>
  )
}
