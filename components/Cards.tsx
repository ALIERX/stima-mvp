'use client'
import { motion } from 'framer-motion'

type Asset = { id:string; title:string; category:string; est_value_eur:number; sigma:number; media:string; status:string }

export function AssetList({ assets }:{ assets: Asset[] }){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {assets.map(a => <AssetCard key={a.id} asset={a}/>)}
    </div>
  )
}

function statusColor(s:string){
  switch(s){
    case 'liquid': return 'text-emerald-300';
    case 'custodied': return 'text-sky-300';
    case 'minted': return 'text-violet-300';
    case 'verified': return 'text-amber-300';
    case 'uploaded': return 'text-zinc-300';
    default: return 'text-zinc-300';
  }
}

export function AssetCard({ asset }:{ asset: Asset }){
  return (
    <motion.article initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:.3}} whileHover={{scale:1.01}} className="bg-glass p-3 border border-white/10 rounded-card">
      <div className="aspect-[16/10] overflow-hidden rounded-md border border-white/10 mb-3">
        <img src={asset.media} alt={asset.title} className="h-full w-full object-cover"/>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="font-medium leading-tight">{asset.title}</h4>
          <p className="text-xs text-zinc-400">{asset.category} • σ {asset.sigma.toFixed(2)}</p>
        </div>
        <div className={`text-xs ${statusColor(asset.status)}`}>{asset.status}</div>
      </div>
      <div className="mt-1 text-sm">€ {asset.est_value_eur.toLocaleString()}</div>
    </motion.article>
  )
}
