import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import advRiderMagImg from '../assets/projects/advridermag-ss.png'
import walkaboutAustraliaImg from '../assets/projects/walkaboutaustralia-ss.png'
import ausMotorcyclistImg from '../assets/projects/ausmotorcyclist-ss.png'
import weatherDashboardImg from '../assets/projects/weather-dashboard-ss.png'
import ausDataVizImg from '../assets/projects/aus-data-viz-ss.png'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const projectsData = [
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive charts, and responsive design.",
      image: weatherDashboardImg,
      technologies: ["React", "Chart.js", "OpenWeather API"],
      categories: ["frontend", "backend"],
      githubUrl: "https://github.com/Bishal-K-Shah/weather-app",
      liveUrl: "https://bishalkshah.com.np/weather-app/",
      featured: true,
      show: true
    },
    {
      id: 2,
      title: "Adventure Rider Magazine",
      description: "WordPress-based adventure motorcycling magazine featuring expert bike reviews, epic route guides, and gear recommendations for motorcycle enthusiasts in Australia and beyond.",
      image: advRiderMagImg,
      technologies: ["WordPress", "PHP", "MySQL", "User Management"],
      categories: ["CMS", "frontend"],
      githubUrl: null,
      liveUrl: "https://advridermag.com.au/",
      featured: false,
      show: true
    },
    {
      id: 3,
      title: "Walkabout Australia",
      description: "Cultural WordPress platform supporting Indigenous communities with online shop, donation system, and educational content promoting Aboriginal culture and heritage.",
      image: walkaboutAustraliaImg,
      technologies: ["WooCommerce", "PHP", "Payment Gateway"],
      categories: ["CMS", "frontend"],
      githubUrl: null,
      liveUrl: "https://walkaboutaustralia.org/",
      featured: true,
      show: true
    },
    {
      id: 7,
      title: "Data Analytics Visualization",
      description: "Australian business data visualization and analytics dashboard with multiple chart types and data export functionality.",
      image: ausDataVizImg,
      technologies: ["Vanilla JS", "Chart.js", "jsPDF"],
      categories: ["frontend"],
      githubUrl: "https://github.com/Bishal-K-Shah/aus-biz-data-viz",
      liveUrl: "https://bishalkshah.com.np/aus-biz-data-viz/",
      featured: true,
      show: true
    },
    {
      id: 4,
      title: "Australian Motorcyclist",
      description: "Premier WordPress magazine site for Australian motorcycle enthusiasts featuring latest news, bike reviews, adventure stories, and industry insights.",
      image: ausMotorcyclistImg,
      technologies: ["cPanel", "PHP", "MySQL", "Server Management"],
      categories: ["CMS", "frontend"],
      githubUrl: null,
      liveUrl: "https://ausmotorcyclist.com.au/",
      featured: true,
      show: true
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/400/225",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      categories: ["fullstack"],
      githubUrl: null,
      liveUrl: null,
      featured: false,
      show: false
    },
    {
      id: 6,
      title: "REST API Server",
      description: "Scalable Node.js REST API with authentication, rate limiting, and comprehensive documentation.",
      image: "/api/placeholder/400/225",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      categories: ["backend"],
      githubUrl: "*",
      liveUrl: null,
      featured: false,
      show: false
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'CMS', label: 'CMS' }
  ]

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProjects(projectsData)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredProjects = filter === 'all' 
    ? projects.filter(project => project.show) 
    : projects.filter(project => project.categories.includes(filter) && project.show)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work and technical expertise</p>
        </motion.div>

        <motion.div className="filter-tabs" variants={itemVariants}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="m18 13 6-6-6-6"/>
                          <polyline points="2,7 9,7 9,13 2,13"/>
                          <line x1="9" y1="7" x2="20" y2="7"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="projects-cta" variants={itemVariants}>
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/bishal-k-shah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects