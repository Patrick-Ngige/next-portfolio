'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo, useState } from 'react'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function Particles({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null!)
  
  const particleCount = 1000
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      // Create a patterned distribution instead of random
      positions[i * 3] = (Math.sin(i * 0.1) - 0.5) * 8
      positions[i * 3 + 1] = (Math.cos(i * 0.1) - 0.5) * 8
      positions[i * 3 + 2] = (Math.sin(i * 0.05) - 0.5) * 6
    }
    
    return positions
  }, [particleCount])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05 + mousePosition.y * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.075 + mousePosition.x * 0.1
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00D1FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#E84DFF"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    setMousePosition({ x, y })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0" onMouseMove={handleMouseMove}>
        <Canvas
          camera={{ position: [0, 0, 1] }}
          className="opacity-60"
        >
          <Particles mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-page/20 via-transparent to-background-page/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-hero font-bold mb-6 relative">
            <span className="gradient-text text-glow animate-gradient-x">
              Patrick Ngige
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-cyan/10 blur-xl rounded-full"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-text-secondary font-medium mb-4">
            Creative Technologist | Front-End Developer | AI & VR Innovator
          </p>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Bridging technology, creativity, and marketing through innovative digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8"
        >
          <motion.a
            href="#projects"
            className="button-primary text-lg px-8 py-4 inline-flex items-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="button-secondary text-lg px-8 py-4 inline-flex items-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-text-secondary text-center"
          >
            <p className="text-small mb-4 font-medium">Scroll to explore</p>
            <div className="scroll-indicator">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-accent-cyan/50 rounded-full mx-auto relative backdrop-blur-sm"
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-gradient-to-b from-accent-cyan to-accent-magenta rounded-full mx-auto mt-2 shadow-glow-md"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}