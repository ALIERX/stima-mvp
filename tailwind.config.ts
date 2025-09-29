import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0B',
        surface: '#111113',
        sunken: '#050505',
        gold: '#B48C58',
        teal: '#00FFD1',
        plat: '#6E7F8A'
      },
      boxShadow: {
        gold: '0 0 24px rgba(180,140,88,0.32)',
        teal: '0 0 16px rgba(0,255,209,0.40)'
      },
      borderRadius: {
        'card': '24px'
      }
    },
  },
  plugins: [],
} satisfies Config
