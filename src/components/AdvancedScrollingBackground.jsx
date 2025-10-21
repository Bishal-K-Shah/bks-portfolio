import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import './scrollingIconbackground.css'

import awsIcon from '../assets/Icons/icons8-aws-100.png'
import dockerIcon from '../assets/Icons/icons8-docker-logo-100.png'
import phpIcon from '../assets/Icons/icons8-php-100.png'
import reactNativeIcon from '../assets/Icons/icons8-react-native-100.png'
import wordpressIcon from '../assets/Icons/icons8-wordpress-100.png'
import hubspotIcon from '../assets/Icons/icons8-hubspot-100.png'
import cpanelIcon from '../assets/Icons/cpanel-logo.png'

const AdvancedScrollingBackground = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const techIcons = [
    { src: reactNativeIcon, alt: 'React Native', color: '#61DAFB' },
    { src: dockerIcon, alt: 'Docker', color: '#2496ED' },
    { src: wordpressIcon, alt: 'WordPress', color: '#21759B' },
    { src: hubspotIcon, alt: 'HubSpot', color: '#FF7A59' },
    { src: cpanelIcon, alt: 'cPanel', color: '#FF6C2C' },
    { src: awsIcon, alt: 'AWS', color: '#FF9900' },
    { src: phpIcon, alt: 'PHP', color: '#777BB4' }
  ]

  // Generate floating particles with individual control for each icon
  const generateParticles = () => {
    // Individual configuration for each icon - Easy to customize!
    const iconConfigs = [
      // 🔵 React Native - Top left area
      {
        icon: techIcons[0],
        x: 5,           // X position (0-100%)
        y: 20,          // Y position (0-100%)
        size: 70,       // Size in pixels
        speed: 0.3,
        opacity: 0.5,
        delay: 0
      },
      // 🐳 Docker - Top right area
      {
        icon: techIcons[1],
        x: 75,
        y: 25,
        size: 95,
        speed: 0.45,
        opacity: 0.6,
        delay: 0.4
      },
      // 📝 WordPress - Left upper-mid area
      {
        icon: techIcons[2],
        x: 22,
        y: 27,
        size: 75,
        speed: 0.6,
        opacity: 0.5,
        delay: 0.8
      },
      // 🟠 HubSpot - Right mid area
      {
        icon: techIcons[3],
        x: 90,
        y: 45,
        size: 65,
        speed: 0.75,
        opacity: 0.7,
        delay: 1.2
      },
      // ⚙️ cPanel - Left lower-mid area
      {
        icon: techIcons[4],
        x: 30,
        y: 50,
        size: 90,
        speed: 0.3,
        opacity: 0.7,
        delay: 1.6
      },
      // ☁️ AWS - Right lower-mid area
      {
        icon: techIcons[5],
        x: 65,
        y: 60,
        size: 100,
        speed: 0.45,
        opacity: 0.85,
        delay: 2.0
      },
      // 🐘 PHP - Bottom left area
      {
        icon: techIcons[6],
        x: 20,
        y: 80,
        size: 80,
        speed: 0.6,
        opacity: 0.9,
        delay: 2.4
      }
    ]
    
    return iconConfigs.map((config, i) => ({
      id: i,
      icon: config.icon,
      x: config.x,
      y: config.y,
      size: config.size,
      speed: config.speed,
      rotationSpeed: ((i % 2) - 0.5) * 2.5, // Alternate rotation directions
      opacity: config.opacity,
      delay: config.delay
    }))
  }

  const [particles] = useState(() => generateParticles()) // Use exactly 8 unique icons

  // Enhanced scroll transforms with smoother curves and parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, -50, -200, -500]) // Eased movement
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, -100, -400, -800]) // Faster with curves
  const y3 = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [50, 0, -150, -350]) // Delayed start
  
  // Fluid horizontal movement with curves
  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], [-30, 40, 100])
  const x2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, -20, -60, -120])
  const x3 = useTransform(scrollYProgress, [0, 0.6, 1], [-15, 30, 80])
  
  // Smooth rotation with easing
  const rotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 5, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [15, -5, -15, -25])
  const rotate3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-8, 8, -8, 18])
  
  // Scale transforms for depth effect
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9])
  const scale2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1.2, 0.7])
  const scale3 = useTransform(scrollYProgress, [0, 0.6, 1], [1.2, 0.9, 1.3])

  return (
    <div ref={containerRef} className="advanced-scrolling-background skills-focused">
      {/* Layer 1 - Slowest moving with enhanced scroll effects */}
      <motion.div className="particle-layer layer-1" style={{ y: y1, x: x1, rotate: rotate1, scale: scale1 }}>
        {particles.slice(0, 3).map((particle) => (
          <motion.div
            key={`layer1-${particle.id}`}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -40, 10, -30, 0],
              x: [0, 25, -15, 20, 0],
              rotate: [0, 10, -15, 8, 0],
              scale: [1, 1.15, 0.95, 1.08, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: particle.delay,
              ease: [0.4, 0, 0.6, 1] // Custom cubic bezier for smooth motion
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ 
              opacity: particle.opacity, 
              scale: 1,
              rotate: 0,
              transition: { 
                duration: 1.5, 
                delay: particle.delay * 0.3,
                ease: "backOut"
              }
            }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.img
              src={particle.icon.src}
              alt={particle.icon.alt}
              style={{
                width: '100%',
                height: '100%',
              }}
              className="particle-icon"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.6,
                rotate: 15,
                filter: "brightness(1.3)",
                transition: { duration: 0.3, type: "spring", bounce: 0.4 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 2 - Medium speed with enhanced scroll effects */}
      <motion.div className="particle-layer layer-2" style={{ y: y2, x: x2, rotate: rotate2, scale: scale2 }}>
        {particles.slice(3, 6).map((particle) => (
          <motion.div
            key={`layer2-${particle.id}`}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y + 50}%`,
              width: `${particle.size * 0.85}px`,
              height: `${particle.size * 0.85}px`,
            }}
            animate={{
              y: [0, 35, -10, 25, 0],
              x: [0, -20, 10, -15, 0],
              rotate: [0, -12, 18, -8, 0],
              scale: [1, 0.9, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              delay: particle.delay + 0.5,
              ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
            }}
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ 
              opacity: particle.opacity * 0.85, 
              scale: 1,
              y: 0,
              transition: { 
                duration: 1.8, 
                delay: particle.delay * 0.4,
                ease: "circOut"
              }
            }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.img
              src={particle.icon.src}
              alt={particle.icon.alt}
              style={{
                width: '100%',
                height: '100%',
              }}
              className="particle-icon"
              animate={{
                rotate: [0, -8, 12, 0],
                scale: [1, 1.08, 0.92, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay * 0.5
              }}
              whileHover={{
                scale: 1.4,
                rotate: -20,
                transition: { duration: 0.4, type: "spring" }
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Layer 3 - Fastest moving with enhanced scroll effects */}
      <motion.div className="particle-layer layer-3" style={{ y: y3, x: x3, rotate: rotate3, scale: scale3 }}>
        {particles.slice(6, 8).map((particle) => (
          <motion.div
            key={`layer3-${particle.id}`}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 0.7}px`,
              height: `${particle.size * 0.7}px`,
            }}
            animate={{
              y: [0, -20, 15, -10, 0],
              x: [0, 15, -8, 12, 0],
              rotate: [0, 20, -12, 15, 0],
              scale: [1, 1.2, 0.85, 1.05, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: particle.delay + 1.5,
              ease: [0.68, -0.55, 0.265, 1.55] // Bouncy easing
            }}
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ 
              opacity: particle.opacity * 0.75, 
              scale: 1,
              x: 0,
              transition: { 
                duration: 2, 
                delay: particle.delay * 0.2,
                type: "spring",
                bounce: 0.6
              }
            }}
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.img
              src={particle.icon.src}
              alt={particle.icon.alt}
              style={{
                width: '100%',
                height: '100%',
              }}
              className="particle-icon"
              animate={{
                rotate: [0, 15, -10, 8, 0],
                scale: [1, 0.9, 1.15, 0.95, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay * 0.8
              }}
              whileHover={{
                scale: 1.5,
                rotate: 25,
                transition: { duration: 0.3, type: "spring", bounce: 0.5 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AdvancedScrollingBackground