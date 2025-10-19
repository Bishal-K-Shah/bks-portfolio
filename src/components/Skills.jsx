import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AdvancedScrollingBackground from './AdvancedScrollingBackground'
import './scrollingIconbackground.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const skills = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Modern React, Next.js, and TypeScript applications with responsive design',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Scalable APIs and microservices with Node.js and cloud technologies',
      tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      icon: 'fas fa-cloud',
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation, containerization, and cloud deployment',
      tags: ['Docker', 'AWS', 'Linux', 'CI/CD', 'Kubernetes']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications and responsive web solutions',
      tags: ['React Native', 'PWA', 'Mobile-First', 'Responsive Design']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="skills" ref={ref}>
      <AdvancedScrollingBackground />
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Technical Expertise
        </motion.h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              variants={cardVariants}
              whileHover={{ 
                translateY: -5,
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.2)"
              }}
            >
              <div className="skill-icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex}
                    className="tag"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills