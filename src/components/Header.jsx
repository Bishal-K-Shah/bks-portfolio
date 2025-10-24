import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Only apply auto-hide on mobile screens
      if (window.innerWidth <= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down - hide header
          setIsHeaderVisible(false)
          setIsMobileMenuOpen(false)
        } else {
          // Scrolling up - show header
          setIsHeaderVisible(true)
        }
      } else {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleSmoothScroll = (e, target) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsMobileMenuOpen(false)
    setIsHeaderVisible(true)
    
    // Small delay to let menu close
    setTimeout(() => {
      const element = document.querySelector(target)
      
      if (element) {
        // Get the element's position relative to the document
        const yOffset = -80 // Header height offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        })
      }
    }, 300) // Increased delay to ensure menu closes first
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isHeaderVisible ? 0 : -100, 
        opacity: isHeaderVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BKS Portfolio
        </motion.div>
        <nav>
          <ul className="nav-links">
            <li>
              <motion.a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#timeline" 
                onClick={(e) => handleSmoothScroll(e, '#timeline')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Journey
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#skills" 
                onClick={(e) => handleSmoothScroll(e, '#skills')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Skills
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, '#services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </nav>
        
        <motion.button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </motion.button>

        <motion.button 
          className="theme-toggle" 
          onClick={toggleTheme}
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
        </motion.button>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
                  <i className="fas fa-home"></i> Home
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <a href="#timeline" onClick={(e) => handleSmoothScroll(e, '#timeline')}>
                  <i className="fas fa-route"></i> Journey
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>
                  <i className="fas fa-code"></i> Skills
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>
                  <i className="fas fa-folder"></i> Projects
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>
                  <i className="fas fa-briefcase"></i> Services
                </a>
              </motion.li>
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header