import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const timelineData = [
    {
      year: '2024-Present',
      type: 'experience',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Labs',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing CI/CD pipelines.',
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
      achievements: [
        'Improved application performance by 40%',
        'Led team of 5 developers',
        'Deployed 15+ production applications'
      ],
      icon: 'fas fa-briefcase'
    },
    {
      year: '2023',
      type: 'achievement',
      title: 'Cloud Solutions Architect Certification',
      company: 'AWS',
      description: 'Achieved AWS Solutions Architect Professional certification, demonstrating expertise in designing distributed applications and systems.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure as Code'],
      achievements: [
        'Designed 10+ cloud architectures',
        'Reduced infrastructure costs by 30%',
        'Implemented auto-scaling solutions'
      ],
      icon: 'fas fa-cloud'
    },
    {
      year: '2022-2023',
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      description: 'Developed and maintained multiple client projects using modern web technologies. Specialized in creating responsive, user-friendly interfaces.',
      skills: ['React', 'Vue.js', 'Python', 'Django', 'PostgreSQL'],
      achievements: [
        'Delivered 20+ client projects',
        'Maintained 99.9% uptime',
        'Improved code quality by implementing testing'
      ],
      icon: 'fas fa-code'
    },
    {
      year: '2021',
      type: 'achievement',
      title: 'Full Stack Development Bootcamp',
      company: 'Tech Academy',
      description: 'Intensive 6-month program covering modern web development technologies and best practices.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
      achievements: [
        'Graduated with honors',
        'Built 5 full-stack applications',
        'Completed 500+ coding hours'
      ],
      icon: 'fas fa-graduation-cap'
    },
    {
      year: '2020',
      type: 'experience',
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      description: 'Started my professional journey building responsive websites and learning modern development practices.',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Built first production website',
        'Learned agile methodology',
        'Created 10+ landing pages'
      ],
      icon: 'fas fa-rocket'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'experience':
        return 'var(--gradient-start)'
      case 'achievement':
        return '#10B981'
      default:
        return 'var(--gradient-start)'
    }
  }

  return (
    <section id="timeline" className="timeline-section" ref={ref}>
      <motion.div 
        className="timeline-container"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Professional Journey
        </motion.h2>
        
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="timeline-marker"
                style={{ backgroundColor: getTypeColor(item.type) }}
                whileHover={{ 
                  scale: 1.2,
                  boxShadow: `0 0 20px ${getTypeColor(item.type)}40`
                }}
                transition={{ duration: 0.2 }}
              >
                <i className={item.icon}></i>
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.2)"
                }}
              >
                <div className="timeline-header">
                  <span className="timeline-year">{item.year}</span>
                  <span className={`timeline-type ${item.type}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
                
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
                
                <div className="timeline-skills">
                  <h5>Skills & Technologies:</h5>
                  <div className="skills-tags">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="skill-tag"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'var(--tag-bg-hover, var(--tag-bg))'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="timeline-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {item.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.5 + (index * 0.3) + (achIndex * 0.1) 
                        }}
                      >
                        <i className="fas fa-check-circle"></i>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Timeline