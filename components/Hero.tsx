'use client'

import Header from '@/components/Header'
import SocialIcons from '@/components/SocialIcons'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroPanel}>
        <Header />
        
        <div className={styles.content}>
          <div className={styles.topText}>I AM</div>
          <h1 className={styles.brandName}>SPECTRA</h1>
          <div className={styles.bottomText}>A CREATIVE DESIGN STUDIO</div>
        </div>
        
        <SocialIcons />
        
        <div className={styles.scrollIndicator}>
          <span>SCROLL</span>
          <span className={styles.dash}>—</span>
          <span>DOWN</span>
        </div>
      </div>
    </section>
  )
}
