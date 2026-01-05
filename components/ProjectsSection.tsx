'use client'

import Image from 'next/image'
import styles from './ProjectsSection.module.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern design solution that transforms user experiences through innovative thinking.',
    image: '/hero-1.jpg',
    category: 'Web Design'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Creative branding and visual identity that captures the essence of forward-thinking brands.',
    image: '/hero-2.webp',
    category: 'Branding'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Digital experiences that engage audiences and drive meaningful connections.',
    image: '/hero-3.webp',
    category: 'Digital'
  }
]

export default function ProjectsSection() {
  return (
    <section id="about" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>PROJECTS</h2>
          <p className={styles.subtitle}>selected work</p>
        </div>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

