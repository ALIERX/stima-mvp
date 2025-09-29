# STIMA MVP — Next.js 14 (Dark Bento Dashboard)

This is a **deploy‑ready MVP** of the STIMA Portal with mock data, a premium **dark-mode bento dashboard**, 3D **RADA (radar donut)**, **Asset Galaxy**, and micro‑interactions. No backend required to demo — all data is served from local API routes.

## ✨ Highlights
- Next.js 14 (App Router), Tailwind, Framer Motion
- Dark‑luxury theme (obsidian glass, liquid gold)
- Bento dashboard: NAV card, RADA Donut 3D, Asset Galaxy 3D, Top Movers, Recent Activity, CTA
- Mock assets and NAV oracle under `/api`
- Fully responsive, accessible, and **Vercel‑ready**

---

## 🚀 Quick Start (Local)
```bash
# using pnpm (recommended)
pnpm i
pnpm dev
# then open http://localhost:3000
```

> You can use npm or yarn too: replace `pnpm` with `npm` / `yarn` as needed.

---

## ⛴️ One‑Click Deploy on Vercel
1) Create a new GitHub repo (empty) and **upload** the ZIP contents.
2) Go to **Vercel → New Project → Import** that repo.
3) Set **Framework Preset** to Next.js (auto-detected).
4) Set **Build command**: `npm run build` (auto) and **Output**: `.next` (auto).
5) **Deploy**. That’s it — **no env vars needed** for the MVP.

> Optional: add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` if/when you wire real data.

---

## 📁 Structure
```
stima-mvp/
├─ app/
│  ├─ api/
│  │  ├─ mock-oracle/route.ts
│  │  └─ mock-assets/route.ts
│  ├─ (dashboard)/page.tsx   # main bento dashboard (default route)
│  ├─ layout.tsx
│  ├─ globals.css
│  └─ favicon.ico
├─ components/
│  ├─ Bento.tsx
│  ├─ Cards.tsx
│  ├─ RadaDonut3D.tsx
│  ├─ AssetGalaxy.tsx
│  ├─ Micro.tsx
│  └─ NavBar.tsx
├─ lib/theme.ts
├─ public/
│  └─ assets/ (mock svgs/pngs)
├─ tailwind.config.ts
├─ postcss.config.js
├─ next.config.mjs
├─ package.json
├─ tsconfig.json
└─ vercel.json
```

---

## 🧭 Investor Demo Script (2–3 min)
1. **Landing/Dashboard** opens in dark-luxury style with **NAV** and live **RADA** donut.
2. Hover cards → **micro glow**; scroll → **text-reveal**.
3. Open **Asset Galaxy** (3D bubbles) → drag/rotate scene.
4. Click an asset card → quick details sheet (mock) + **“Mint (demo)”** button.
5. Show **confetti** + **haptic** (mobile) on demo success.

---

## 🧰 Next Steps
- Wire Supabase Auth + Storage (drop‑zone → fingerprint → row insert).
- KYC/AML webhook (SumSub) before **Mint → Custody**.
- Contracts (Foundry) + wagmi/RainbowKit (connect wallet).

Enjoy — and wow the room. ✨
