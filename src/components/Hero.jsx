import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const phrases = ['& Security Analyst', '& Cloud Engineer', '& Problem Solver', '& Creative Thinker']

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, letterIndex - 1))
        setLetterIndex(prev => prev - 1)
        
        if (letterIndex === 0) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      } else {
        setTypedText(currentPhrase.substring(0, letterIndex + 1))
        setLetterIndex(prev => prev + 1)
        
        if (letterIndex === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [letterIndex, isDeleting, phraseIndex])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Bishal K Shah
        </motion.h1>
        <motion.h2 variants={itemVariants}>
          Full Stack Developer <span className="typing-text">{typedText}</span>
        </motion.h2>
        <motion.p variants={itemVariants}>
          Crafting seamless digital experiences with modern web technologies.
          Specializing in scalable applications, cloud infrastructure, and creative solutions.
        </motion.p>
        <motion.div 
          className="cta-buttons"
          variants={itemVariants}
        >
          <motion.a 
            href="https://blog.bishalkshah.com.np" 
            className="btn btn-primary"
            whileHover={{ 
              translateY: -3,
              boxShadow: "0 15px 40px rgba(102, 126, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-blog"></i> Read My Blog
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero