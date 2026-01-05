'use client'

import { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerGroup}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/Spectra-02.svg"
            alt="Spectra Logo"
            width={80}
            height={80}
            className={styles.logoImage}
          />
        </Link>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        {isMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div>
        )}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#about" className={styles.navLink} onClick={closeMenu}>PROJECTS</a>
          <a href="/services" className={styles.navLink} onClick={closeMenu}>SERVICES</a>
          <a href="#work" className={styles.navLink} onClick={closeMenu}>CONTACT</a>
          <div className={styles.themeToggleWrapper}>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
