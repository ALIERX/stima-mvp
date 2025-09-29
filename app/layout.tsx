import './globals.css'
import type { ReactNode } from 'react'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'STIMA — Tokenize Reality',
  description: 'Robin-Hood of Luxury — dark-luxury bento dashboard'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-primary text-zinc-200 antialiased">
        <div className="min-h-dvh grid grid-rows-[auto,1fr]">
          <NavBar/>
          {children}
        </div>
      </body>
    </html>
  )
}
