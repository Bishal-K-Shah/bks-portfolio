import { useState, useEffect, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ErrorBoundary from './components/ErrorBoundary'
import SEOHead from './components/SEOHead'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'  
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.body.className = savedTheme === 'light' ? 'light-theme' : ''
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme === 'light' ? 'light-theme' : ''
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="app">
          <SEOHead />
          
          <Suspense fallback={<div className="three-loading">Loading 3D environment...</div>}>
            <ThreeBackground theme={theme} />
          </Suspense>
          
          <motion.div 
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Header theme={theme} toggleTheme={toggleTheme} />
            
            <main>
              <section id="home">
                <Hero />
              </section>
              
              <section id="timeline">
                <Timeline />
              </section>
              
              <section id="skills">
                <Skills />
              </section>
              
              <section id="projects">
                <Projects />
              </section>
              
              <section id="services">
                <Services />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </main>
            
            <Footer />
          </motion.div>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App
