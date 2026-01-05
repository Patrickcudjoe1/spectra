import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerGroup}>
        <div className={styles.logo}>
          <Image
            src="/Spectra-02.svg"
            alt="Spectra Logo"
            width={80}
            height={80}
            className={styles.logoImage}
          />
        </div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>PROJECTS</a>
          <a href="#work" className={styles.navLink}>CONTACT</a>
          <a href="#work" className={styles.navLink}>SERVICES</a>
        </nav>
      </div>
    </header>
  )
}
