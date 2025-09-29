export async function GET() {
  return Response.json({
    assets: [
      {
        id: 'ast_01',
        title: 'Vintage Rolex Daytona',
        category: 'Watches',
        est_value_eur: 280000,
        sigma: 0.22,
        media: '/assets/rolex.svg',
        status: 'liquid'
      },
      {
        id: 'ast_02',
        title: 'Blue Diamond 3.2ct',
        category: 'Jewels',
        est_value_eur: 520000,
        sigma: 0.35,
        media: '/assets/diamond.svg',
        status: 'custodied'
      },
      {
        id: 'ast_03',
        title: 'Modern Art — Untitled (1992)',
        category: 'Art',
        est_value_eur: 410000,
        sigma: 0.28,
        media: '/assets/art.svg',
        status: 'minted'
      },
      {
        id: 'ast_04',
        title: 'Grand Cru — 1989 Collection',
        category: 'Wine',
        est_value_eur: 150000,
        sigma: 0.18,
        media: '/assets/wine.svg',
        status: 'verified'
      },
      {
        id: 'ast_05',
        title: 'Collector Car — Series I',
        category: 'Cars',
        est_value_eur: 320000,
        sigma: 0.26,
        media: '/assets/car.svg',
        status: 'uploaded'
      }
    ]
  })
}
