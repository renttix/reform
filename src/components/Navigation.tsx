'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlanOpen, setIsPlanOpen] = useState(false)
  const [isAreasOpen, setIsAreasOpen] = useState(false)
  const [isRollInComplete, setIsRollInComplete] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Wait for rollIn animation to complete before starting spin3d
    const timer = setTimeout(() => {
      setIsRollInComplete(true)
    }, 3000) // 3s matches the rollIn animation duration
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.plan-dropdown')) {
        setIsPlanOpen(false);
      }
      if (!target.closest('.areas-dropdown')) {
        setIsAreasOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const areas = [
    { href: '/areas/erdington', text: 'Erdington' },
    { href: '/areas/castle-vale', text: 'Castle Vale' },
    { href: '/areas/pype-hayes', text: 'Pype Hayes' },
    { href: '/areas/stockland-green', text: 'Stockland Green' },
    { href: '/areas/kingstanding', text: 'Kingstanding' }
  ]

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-reform-dark shadow-lg border-b border-reform-primary/10 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <Link 
            href="/" 
            className="flex items-center space-x-6 group relative"
          >
            <div className="relative w-[220px] h-[70px]" style={{ transformStyle: 'preserve-3d' }}>
              <div 
                className={`absolute inset-0 ${isRollInComplete ? 'animate-spin3d' : 'animate-rollIn'}`} 
                style={{ animationDuration: isRollInComplete ? '8s' : '3s' }}
              >
                <object
                  data="/images/reformlogo.svg"
                  type="image/svg+xml"
                  className="w-full h-full"
                  aria-label="ReformUK Logo"
                >
                  <img
                    src="/images/reformlogo.svg"
                    alt="ReformUK Logo"
                    className="w-full h-full object-contain"
                  />
                </object>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-reform-primary text-3xl font-bold">ReformUK</span>
              <span className="text-reform-dark dark:text-white text-3xl font-bold">Erdington</span>
              <span className="text-reform-secondary text-3xl font-bold">Branch</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/join" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              Join
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="relative group areas-dropdown">
              <button 
                className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5 group"
                onClick={() => setIsAreasOpen(!isAreasOpen)}
              >
                Areas
                <svg
                  className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isAreasOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div 
                className={`${
                  isAreasOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                } absolute right-0 mt-2 w-64 bg-white dark:bg-reform-dark shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-out transform border border-reform-primary/10 dark:border-white/10`}
              >
                {areas.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-6 py-3.5 text-base text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white transition-all duration-200 ${
                      index === 0 ? 'rounded-t-xl' : ''
                    } ${
                      index === areas.length - 1 ? 'rounded-b-xl' : ''
                    }`}
                    onClick={() => setIsAreasOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/events" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group plan-dropdown">
              <button 
                className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5 group"
                onClick={() => setIsPlanOpen(!isPlanOpen)}
              >
                Our Plan
                <svg
                  className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${isPlanOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
              </button>
              <div 
                className={`${
                  isPlanOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                } absolute right-0 mt-2 w-64 bg-white dark:bg-reform-dark shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-out transform border border-reform-primary/10 dark:border-white/10`}
              >
                {[
                  { href: '/plan/cut-taxes', text: 'Cut Taxes' },
                  { href: '/plan/reform-nhs', text: 'Reform NHS' },
                  { href: '/plan/control-immigration', text: 'Control Immigration' },
                  { href: '/plan/fight-crime', text: 'Fight Crime' },
                  { href: '/plan/drive-growth', text: 'Drive Growth' }
                ].map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-6 py-3.5 text-base text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white transition-all duration-200 ${
                      index === 0 ? 'rounded-t-xl' : ''
                    } ${
                      index === 4 ? 'rounded-b-xl' : ''
                    }`}
                    onClick={() => setIsPlanOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="flex items-center space-x-6 ml-8 border-l border-reform-primary/10 dark:border-white/10 pl-8">
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/ReformErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-reform-gray/5 dark:bg-reform-secondary/5 hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-reform-gray/5 dark:bg-reform-secondary/5 hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light focus:outline-none transition-all duration-300 p-2 rounded-lg bg-reform-gray/5 dark:bg-reform-secondary/5 hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'max-h-[32rem] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-reform-dark rounded-xl mt-2 border border-reform-primary/10 dark:border-white/10`}
        >
          <div className="py-4 space-y-1 border-t border-reform-primary/10 dark:border-white/10 px-2">
            {[
              { href: '/join', text: 'Join' },
              { href: '/about', text: 'About' },
              { href: '/events', text: 'Events' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            
            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-base font-medium mb-2">Areas</div>
              <div className="space-y-1 pl-4">
                {areas.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white py-2.5 px-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-base font-medium mb-2">Our Plan</div>
              <div className="space-y-1 pl-4">
                {[
                  { href: '/plan/cut-taxes', text: 'Cut Taxes' },
                  { href: '/plan/reform-nhs', text: 'Reform NHS' },
                  { href: '/plan/control-immigration', text: 'Control Immigration' },
                  { href: '/plan/fight-crime', text: 'Fight Crime' },
                  { href: '/plan/drive-growth', text: 'Drive Growth' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white py-2.5 px-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex space-x-6 px-4 py-4 border-t border-reform-primary/10 dark:border-white/10 mt-2">
              <a
                href="https://www.facebook.com/groups/916932353577131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/ReformErdington"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light transition-all duration-200 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
