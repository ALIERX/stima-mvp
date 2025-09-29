'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BentoGrid, BentoCard, StatPair, SectionTitle } from '@/components/Bento'
import { RadaDonut3D } from '@/components/RadaDonut3D'
import { AssetGalaxy } from '@/components/AssetGalaxy'
import { AssetList } from '@/components/Cards'
import { ConfettiButton } from '@/components/Micro'

type Bucket = { key: string; pct: number }
type Asset = { id:string; title:string; category:string; est_value_eur:number; sigma:number; media:string; status:string }

export default function Dashboard() {
  const [nav, setNav] = useState<number>(0)
  const [buckets, setBuckets] = useState<Bucket[]>([])
  const [assets, setAssets] = useState<Asset[]>([])

  useEffect(()=>{
    fetch('/api/mock-oracle').then(r=>r.json()).then(d=>{ setNav(d.nav_eur); setBuckets(d.buckets) })
    fetch('/api/mock-assets').then(r=>r.json()).then(d=> setAssets(d.assets))
  },[])

  const topMovers = [...assets].sort((a,b)=> b.sigma - a.sigma).slice(0,3)

  return (
    <main className="relative">
      <div className="aurora absolute inset-0 pointer-events-none" />
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 grid gap-6">
        <header className="grid gap-2">
          <motion.h1 initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-4xl md:text-6xl font-extrabold tracking-tight">Tokenize Reality</motion.h1>
          <p className="text-zinc-400 max-w-2xl">Illiquid masterpieces → spendable crypto in 24h. Premium dark dashboard with 3D RADA, Asset Galaxy and micro‑interactions.</p>
        </header>

        <BentoGrid>
          <BentoCard span="col-span-12 md:col-span-5" title="Vault NAV" subtitle="Live oracle (mock)" align="center">
            <div className="grid place-items-center py-4">
              <StatPair label="NAV (EUR)" value={nav ? nav.toLocaleString('en-US', {style:'currency', currency:'EUR'}) : '—'} />
            </div>
            <div className="mt-4">
              <RadaDonut3D buckets={buckets}/>
            </div>
          </BentoCard>

          <BentoCard span="col-span-12 md:col-span-7" title="Asset Galaxy" subtitle="Bubbles: size=value, color=volatility">
            <AssetGalaxy/>
          </BentoCard>

          <BentoCard span="col-span-12 md:col-span-5" title="Top Movers" subtitle="σ (volatility)">
            <ul className="divide-y divide-white/10">
              {topMovers.map(a=> (
                <li key={a.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={a.media} alt="" className="h-10 w-10 rounded-md border border-white/10" />
                    <div>
                      <div className="font-medium">{a.title}</div>
                      <div className="text-xs text-zinc-400">{a.category} · σ {a.sigma.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="text-sm text-zinc-300">€ {a.est_value_eur.toLocaleString()}</div>
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard span="col-span-12 md:col-span-7" title="Collection" subtitle="Mock assets">
            <AssetList assets={assets}/>
          </BentoCard>

          <BentoCard span="col-span-12" title="Demo Actions" subtitle="Micro‑interactions">
            <div className="flex flex-wrap gap-3">
              <ConfettiButton>Mint (demo)</ConfettiButton>
              <ConfettiButton glow>Unlock (demo)</ConfettiButton>
              <ConfettiButton teal>Trade (demo)</ConfettiButton>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>
    </main>
  )
}
