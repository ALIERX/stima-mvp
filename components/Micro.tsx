'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

function vibrate(pattern:number[]){ if (typeof navigator !== 'undefined' && 'vibrate' in navigator) { try{ (navigator as any).vibrate(pattern) } catch{} } }

export function ConfettiButton({ children, glow, teal }:{ children: React.ReactNode; glow?: boolean; teal?: boolean }){
  const [clicked, setClicked] = useState(false)
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={()=>{ setClicked(true); setTimeout(()=>setClicked(false), 1400); vibrate([120, 60, 120]) }}
      className={`relative px-4 py-2 rounded-full border border-white/10 ${glow ? 'shadow-gold' : teal ? 'shadow-teal' : ''}`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 -translate-x-full hover:translate-x-0 transition-transform duration-300 ${teal ? 'bg-gradient-to-r from-[rgba(0,255,209,.18)] to-transparent' : 'bg-gradient-to-r from-[rgba(180,140,88,.18)] to-transparent'}`} />
      {clicked && <Confetti/>}
    </motion.button>
  )
}

function Confetti(){
  // super lightweight confetti dots
  const dots = new Array(24).fill(0).map((_,i)=> i)
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      {dots.map(i => <span key={i} className="absolute w-1 h-1 rounded-full bg-white/80"
        style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, transform: `translate(-50%,-50%) scale(${.8+Math.random()*1.5})` }} />)}
    </div>
  )
}
