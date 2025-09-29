'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo } from 'react'

export function AssetGalaxy(){
  return (
    <div className="aspect-[16/10] rounded-md border border-white/10 overflow-hidden">
      <Canvas camera={{ position: [0,0,8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2,3,4]} intensity={1} />
        <Bubbles/>
      </Canvas>
    </div>
  )
}

function Bubbles(){
  const count = 28
  const meshes = useMemo(()=> new Array(count).fill(0).map((_,i)=>({
    pos: new THREE.Vector3((Math.random()-0.5)*6,(Math.random()-0.5)*4,(Math.random()-0.5)*2),
    scale: 0.25 + Math.random()*1.0,
    color: new THREE.Color().setHSL(Math.random(),0.5,0.6)
  })),[])
  useFrame((state)=>{ state.scene.rotation.y += 0.0025 })
  return (
    <group>
      {meshes.map((m,i)=> (
        <mesh key={i} position={m.pos}>
          <sphereGeometry args={[m.scale, 32, 32]} />
          <meshStandardMaterial color={m.color} metalness={0.4} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}
