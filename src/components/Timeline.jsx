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
      title: 'Intern Web Developer',
      company: 'Clemenger Media Sales',
      description: 'Developing and maintaining web applications, collaborating with cross-functional teams to deliver high-quality solutions.',
      skills: ['Wordpress', 'cPanel', 'AWS', 'Docker', 'Network Security', 'Server Administration', 'Cloudflare CDN'],
      achievements: [
        'Improved application performance by 40%',
        'Reduced infrastructure costs by 35%',
        'Enhanced website security reducing vulnerabilities by 60%',
        'Deployed 10+ production websites using DigitalOcean Cloud and Docker'
      ],
      icon: 'fas fa-shield-alt'
    },
    {
      year: '2025',
      type: 'achievement',
      title: 'ACS Professional Year Program',
      company: 'ECA PY',
      description: 'Successfully completed AWS Solutions Architect, Docker container, and Network Security courses, gaining practical skills in cloud architecture and cybersecurity.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Docker Compose'],
      achievements: [
        'Designed 10+ cloud architectures',
        'Developed auto-scaling solutions',
        'Achieved AWS Solutions Architect Course Completion',
        'Achieved Network Security Certification'
      ],
      icon: 'fas fa-cloud'
    },
    {
      year: '2018-2019',
      type: 'experience',
      title: 'Startup Web Developer and Intern',
      company: 'Hunts Mobile, Stamp & Gold',
      description: 'Resolved customer inquiries, managed eCommerce orders, and developed website using WordPress and PHP.',
      skills: ['Inventory Management', 'Ticket Resolution', 'WordPress', 'PHP'],
      achievements: [
        'Resolved 50+ eCommerce customer inquiries weekly',
        'Reduced order processing error rates by 15%',
        'Delivered 20+ client projects',
        'Maintained 99.9% uptime',
        'Managed ticket resolutions efficiently using IT service desk operations'
      ],
      icon: 'fas fa-briefcase'
    },
    {
      year: '2021-2024',
      type: 'achievement',
      title: 'IT Degree Completion',
      company: 'Federation University Australia',
      description: 'Comprehensive degree program covering software development, cybersecurity, database management, and IT project management.',
      skills: ['JavaScript', 'Python', 'Network Security', 'System Analysis', 'Project Management', 'Cybersecurity'],
      achievements: [
        'Graduated with Distinction',
        'Completed capstone project on secure web applications',
        'Dean\'s List for 3 semesters',
        'Completed cybersecurity specialization track'
      ],
      icon: 'fas fa-graduation-cap'
    },
    {
      year: '2018-2019',
      type: 'experience',
      title: 'IT Support',
      company: 'Sapkota & Associates Architect Firm',
      description: 'Started my professional journey providing in-house IT support, managing network systems, website and software installations.',
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
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(102, 126, 234, 0.2)"
                }}
                transition={{ duration: 0.2 }}
                style={{
                  transformOrigin: index % 2 === 0 ? 'right center' : 'left center'
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