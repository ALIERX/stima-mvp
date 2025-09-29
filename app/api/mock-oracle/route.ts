export async function GET() {
  const now = Date.now();
  return Response.json({
    nav_eur: 1000000 + Math.round(Math.sin(now/30000)*20000),
    buckets: [
      { key: 'Watches', pct: 0.28 },
      { key: 'Art', pct: 0.34 },
      { key: 'Wine', pct: 0.12 },
      { key: 'Jewels', pct: 0.10 },
      { key: 'Cars', pct: 0.09 },
      { key: 'Others', pct: 0.07 }
    ],
    updatedAt: new Date().toISOString()
  });
}
