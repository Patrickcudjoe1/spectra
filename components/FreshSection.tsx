import Image from 'next/image'
import styles from './FreshSection.module.css'

export default function FreshSection() {
  return (
    <section className={styles.freshSection}>
      <div className={styles.badge}>
        <Image
          src="/hero-3.webp"
          alt="Badge"
          width={1280}
          height={920}
          className={styles.badgeImage}
        />
      </div>
    </section>
  )
}

