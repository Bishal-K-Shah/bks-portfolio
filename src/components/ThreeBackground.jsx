import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Particles = ({ count = 1500 }) => {
  const ref = useRef()
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(count * 3), { radius: 50 })], [count])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y -= delta / 30
      
      // Mouse following effect
      ref.current.position.x = state.mouse.x * 5
      ref.current.position.y = state.mouse.y * 5
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#667eea"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2} // AdditiveBlending
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

const ThreeBackground = ({ theme }) => {
  if (theme === 'light') {
    return null // Hide background in light theme
  }

  return (
    <div 
      id="canvas-container" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Particles />
      </Canvas>
    </div>
  )
}

export default ThreeBackground