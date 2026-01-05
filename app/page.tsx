import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FreshSection from '@/components/FreshSection'
import SocialIcons from '@/components/SocialIcons'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Hero />
      </div>
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
