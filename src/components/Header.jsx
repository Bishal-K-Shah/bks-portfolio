import { motion } from 'framer-motion'

const Header = ({ theme, toggleTheme }) => {
  const handleSmoothScroll = (e, target) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BKS
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
          className="theme-toggle" 
          onClick={toggleTheme}
          whileHover={{ rotate: 15, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
        </motion.button>
      </div>
    </motion.header>
  )
}

export default Header