import { ReactNode } from 'react'

export function BentoGrid({ children }: { children: ReactNode }){
  return <div className="grid grid-cols-12 gap-4 md:gap-6">{children}</div>
}

export function BentoCard({ span='col-span-12', title, subtitle, children, align='start' }:
 { span?: string; title:string; subtitle?:string; children: ReactNode; align?: 'start'|'center'|'end' }){
  return (
    <section className={`${span} bg-glass p-4 md:p-6`}>
      <header className="mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle && <p className="text-xs text-zinc-400">{subtitle}</p>}
      </header>
      <div className={`grid place-items-${align}`}>{children}</div>
    </section>
  )
}

export function StatPair({ label, value }:{ label:string; value:string }){
  return (
    <div className="text-center">
      <div className="text-xs text-zinc-400 uppercase tracking-wider">{label}</div>
      <div className="text-3xl md:text-4xl font-bold text-zinc-100">{value}</div>
    </div>
  )
}

export function SectionTitle({ children }:{ children: ReactNode }){
  return <h2 className="text-xl font-semibold">{children}</h2>
}
