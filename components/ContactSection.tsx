'use client'

import { useState } from 'react'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="work" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>CONTACT</h2>
            <p className={styles.description}>
            Let’s talk about your next project. Whether you’re looking for thoughtful design solutions, creative collaborations, custom commissions, or long-term partnerships, feel free to reach out. We’d love to connect and explore how we can bring your ideas to life.
            </p>
            
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Address</span>
                <span className={styles.infoValue}>Achimota overhead, Accra, Ghana</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Phone</span>
                <a href="tel:+233534830983" className={styles.infoValue}>
                  +233 (0) 53 483 09 83
                </a>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:spectra@spectra.com" className={styles.infoValue}>
                  spectra@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.formContainer}>
              <h3 className={styles.formTitle}>CONTACT FORM</h3>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Your phone"
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="Your e-mail"
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    rows={4}
                    placeholder="Message"
                  />
                </div>

                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  <span>SEND MESSAGE</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </form>

              <div className={styles.verticalText}>SPECTRA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
