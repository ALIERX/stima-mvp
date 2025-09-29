'use client'
import { motion } from 'framer-motion'

export default function NavBar(){
  return (
    <nav className="sticky top-0 z-50 bg-surface/70 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl h-16 px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">STIMA</a>
        <div className="flex items-center gap-2">
          <motion.a whileHover={{scale:1.02}} whileTap={{scale:0.98}} href="/" className="px-3 py-1.5 rounded-full border border-white/10">Dashboard</motion.a>
          <motion.a whileHover={{scale:1.02}} whileTap={{scale:0.98}} href="#" className="px-3 py-1.5 rounded-full border border-white/10">Connect</motion.a>
        </div>
      </div>
    </nav>
  )
}
