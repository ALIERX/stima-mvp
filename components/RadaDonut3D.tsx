'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

type Bucket = { key: string; pct: number }

export function RadaDonut3D({ buckets=[] }:{ buckets: Bucket[] }){
  const total = buckets.reduce((a,b)=> a + b.pct, 0)
  const safe = total > 0 ? buckets : [
    { key: 'Watches', pct: .28 },
    { key: 'Art', pct: .34 },
    { key: 'Wine', pct: .12 },
    { key: 'Jewels', pct: .10 },
    { key: 'Cars', pct: .09 },
    { key: 'Others', pct: .07 },
  ]
  return (
    <div className="aspect-[16/10] rounded-md border border-white/10 overflow-hidden">
      <Canvas camera={{ position: [0,0,4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2,3,4]} intensity={1} />
        <Donut buckets={safe}/>
      </Canvas>
    </div>
  )
}

function Donut({ buckets }:{ buckets: Bucket[] }){
  let start = 0
  const radius = 1, tube = 0.35
  useFrame((state)=>{ state.scene.rotation.y += 0.003 })
  return (
    <group>
      {buckets.map((b,i)=>{
        const length = Math.max(0.05, b.pct * Math.PI * 2 - 0.02) // small gap
        const mesh = Segment({ radius, tube, arc: length })
        const g = useMemo(()=> mesh, [length])
        const m = new THREE.MeshStandardMaterial({ color: palette(i), metalness: .9, roughness: .25 })
        const node = <mesh key={b.key} geometry={g} material={m} rotation={[0,0,start]}/>;
        start += length + 0.02
        return node
      })}
      <Html position={[0,0,0]} center>
        <div className="text-xs text-zinc-400">RADA</div>
      </Html>
    </group>
  )
}

function Segment({ radius, tube, arc }:{ radius:number; tube:number; arc:number }){
  return new THREE.TorusGeometry(radius, tube, 32, 128, arc)
}

function palette(i:number){
  const colors = ['#B48C58','#00FFD1','#6E7F8A','#722F37','#8b5cf6','#22c55e']
  return colors[i % colors.length]
}
