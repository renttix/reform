import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

interface LayoutClientProps {
  children: React.ReactNode
}

export default function LayoutClient({ children }: LayoutClientProps) {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
