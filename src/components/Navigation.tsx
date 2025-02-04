'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isRollInComplete, setIsRollInComplete] = useState(false)
  const [mouthOpen, setMouthOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<string>('light')

  // Handle mounting and initial animations
  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsRollInComplete(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Handle mouth animation
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setMouthOpen(prev => !prev)
    }, 200)
    return () => clearInterval(interval)
  }, [mounted])

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return
    setCurrentTheme(theme || 'light')
  }, [theme, mounted])

  const toggleTheme = () => {
    if (!mounted) return
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-reform-dark shadow-lg border-b border-gray-200 dark:border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 lg:h-28">
          <Link 
            href="/" 
            className="flex items-center space-x-2 lg:space-x-6 group relative"
          >
            <div className="relative w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] bg-white dark:bg-reform-dark rounded-lg">
              <div 
                className={`absolute inset-0 ${isRollInComplete ? 'animate-spin3d' : 'animate-rollIn'}`}
                style={{ 
                  transformOrigin: 'center center',
                  clipPath: mouthOpen ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(35% 0, 100% 0, 100% 100%, 35% 100%, 0 50%)',
                  transition: 'all 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: mouthOpen 
                    ? 'rotate(0deg) scale(1)' 
                    : 'rotate(-8deg) scale(0.95)',
                }}
              >
                <Image
                  src="/images/reformlogo.jpg"
                  alt="ReformUK Logo"
                  fill
                  sizes="(max-width: 1024px) 40px, 70px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col -space-y-1 lg:-space-y-2">
              <span className="text-lg lg:text-[2.5rem] leading-[0.9] font-bold bg-gradient-to-r from-reform-primary to-reform-light dark:from-white dark:to-reform-light bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">ReformUK</span>
              <span className="text-base lg:text-3xl font-bold bg-gradient-to-r from-reform-primary to-reform-light dark:from-white dark:to-reform-light bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">Erdington</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/join" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              Join
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group dropdown-menu">
              <div className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5 group">
                Our Plan
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
                <div className="absolute left-0 top-full pt-2 w-72 opacity-0 -translate-y-4 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out origin-top">
                  <div className="bg-white dark:bg-reform-dark shadow-xl rounded-xl overflow-hidden border border-reform-primary/10 dark:border-white/10">
                    {[
                      { href: '/plan/cut-taxes', text: 'Cut Taxes', icon: '💰' },
                      { href: '/plan/reform-nhs', text: 'Reform NHS', icon: '🏥' },
                      { href: '/plan/control-immigration', text: 'Control Immigration', icon: '🌍' },
                      { href: '/plan/fight-crime', text: 'Fight Crime', icon: '⚖️' },
                      { href: '/plan/drive-growth', text: 'Drive Growth', icon: '📈' }
                    ].map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center px-6 py-4 text-base text-reform-dark dark:text-white hover:bg-gradient-to-r hover:from-reform-primary hover:to-reform-primary/90 hover:text-white dark:hover:text-white transition-all duration-200 ${
                          index === 0 ? 'rounded-t-xl' : ''
                        } ${
                          index === 4 ? 'rounded-b-xl' : ''
                        }`}
                      >
                        <span className="mr-3 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group dropdown-menu">
              <div className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5 group">
                Areas
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
                <div className="absolute left-0 top-full pt-2 w-72 opacity-0 -translate-y-4 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out origin-top">
                  <div className="bg-white dark:bg-reform-dark shadow-xl rounded-xl overflow-hidden border border-reform-primary/10 dark:border-white/10">
                    {[
                      { href: '/areas/erdington', text: 'Erdington', icon: '🏛️' },
                      { href: '/areas/kingstanding', text: 'Kingstanding', icon: '👑' },
                      { href: '/areas/stockland-green', text: 'Stockland Green', icon: '🌳' },
                      { href: '/areas/pype-hayes', text: 'Pype Hayes', icon: '🏡' },
                      { href: '/areas/castle-vale', text: 'Castle Vale', icon: '🏰' }
                    ].map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center px-6 py-4 text-base text-reform-dark dark:text-white hover:bg-gradient-to-r hover:from-reform-primary hover:to-reform-primary/90 hover:text-white dark:hover:text-white transition-all duration-200 ${
                          index === 0 ? 'rounded-t-xl' : ''
                        } ${
                          index === 4 ? 'rounded-b-xl' : ''
                        }`}
                      >
                        <span className="mr-3 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/reformtv" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              ReformTV
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/events" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium transition-all duration-300 hover:-translate-y-0.5 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-reform-primary dark:bg-reform-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div className="relative group dropdown-menu">
              <div className="relative text-lg text-reform-dark dark:text-white hover:text-reform-primary dark:hover:text-reform-light font-medium flex items-center transition-all duration-300 hover:-translate-y-0.5 group">
                News
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
                <div className="absolute right-0 top-full pt-2 w-72 opacity-0 -translate-y-4 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out origin-top">
                  <div className="bg-white dark:bg-reform-dark shadow-xl rounded-xl overflow-hidden border border-reform-primary/10 dark:border-white/10">
                    {[
                      { href: '/news/reform', text: 'Reform News', icon: '📰' },
                      { href: '/news/national', text: 'National', icon: '🇬🇧' },
                      { href: '/news/local', text: 'Local', icon: '📍' },
                      { href: '/news/crime-and-court', text: 'Crime & Courts', icon: '⚖️' }
                    ].map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group flex items-center px-6 py-4 text-base text-reform-dark dark:text-white hover:bg-gradient-to-r hover:from-reform-primary hover:to-reform-primary/90 hover:text-white dark:hover:text-white transition-all duration-200 ${
                          index === 0 ? 'rounded-t-xl' : ''
                        } ${
                          index === 3 ? 'rounded-b-xl' : ''
                        }`}
                      >
                        <span className="mr-3 text-xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-6 border-l border-reform-primary/10 dark:border-white/10 pl-8">
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
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-reform-gray/5 dark:bg-reform-secondary/5 hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                aria-label="Toggle theme"
              >
                {mounted && (currentTheme === 'dark' ? '🌞' : '🌙')}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-reform-gray/5 dark:bg-reform-secondary/5 hover:bg-reform-gray/10 dark:hover:bg-reform-secondary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {mounted && (currentTheme === 'dark' ? '🌞' : '🌙')}
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
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}
        
        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'max-h-[80vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
          } lg:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white dark:bg-reform-dark border-t border-reform-primary/10 dark:border-white/10 relative z-50 rounded-b-lg shadow-lg`}
        >
          <div className="py-4 space-y-1 px-2">
            <Link
              href="/join"
              className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join
            </Link>

            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-base font-medium mb-2">News</div>
              <div className="space-y-1 pl-4">
                {[
                  { href: '/news/reform', text: 'Reform News', icon: '📰' },
                  { href: '/news/national', text: 'National', icon: '🇬🇧' },
                  { href: '/news/local', text: 'Local', icon: '📍' },
                  { href: '/news/crime-and-court', text: 'Crime & Courts', icon: '⚖️' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white py-2.5 px-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-base font-medium mb-2">Areas</div>
              <div className="space-y-1 pl-4">
                {[
                  { href: '/areas/erdington', text: 'Erdington', icon: '🏛️' },
                  { href: '/areas/kingstanding', text: 'Kingstanding', icon: '👑' },
                  { href: '/areas/stockland-green', text: 'Stockland Green', icon: '🌳' },
                  { href: '/areas/pype-hayes', text: 'Pype Hayes', icon: '🏡' },
                  { href: '/areas/castle-vale', text: 'Castle Vale', icon: '🏰' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white py-2.5 px-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/reformtv"
              className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ReformTV
            </Link>

            <Link
              href="/events"
              className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>

            <Link
              href="/about"
              className="block text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white px-4 py-3 text-base rounded-lg transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="px-4 py-3">
              <div className="text-reform-dark dark:text-white text-base font-medium mb-2">Our Plan</div>
              <div className="space-y-1 pl-4">
                {[
                  { href: '/plan/cut-taxes', text: 'Cut Taxes', icon: '💰' },
                  { href: '/plan/reform-nhs', text: 'Reform NHS', icon: '🏥' },
                  { href: '/plan/control-immigration', text: 'Control Immigration', icon: '🌍' },
                  { href: '/plan/fight-crime', text: 'Fight Crime', icon: '⚖️' },
                  { href: '/plan/drive-growth', text: 'Drive Growth', icon: '📈' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center text-reform-dark dark:text-white hover:bg-reform-primary hover:text-white dark:hover:bg-reform-primary dark:hover:text-white py-2.5 px-3 text-base rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>
            </div>

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
