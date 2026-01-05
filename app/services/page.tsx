import Header from '@/components/Header'
import ServiceSection from '@/components/ServiceSection'
import SocialIcons from '@/components/SocialIcons'
import styles from './page.module.css'

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <ServiceSection />
        <SocialIcons />
      </div>
    </main>
  )
}

