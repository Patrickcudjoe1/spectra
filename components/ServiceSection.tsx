'use client'

import styles from './ServiceSection.module.css'

interface ServiceCategory {
  id: number
  title: string
  services: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    title: 'Branding Identity Design',
    services: [
      'Logo design',
      'Brand identity and development',
      'Business cards design',
      'Brand style guides',
      'Letterheads and stationery',
    ]
  },
  {
    id: 2,
    title: 'Print Design',
    services: [
      'Flyers and brochures',
      'Posters',
      'Magazines and booklets',
      'Catalogues',
      'Menus',
      'Product labels and packaging'
    ]
  },
  {
    id: 3,
    title: 'Digital and Social Media Design',
    services: [
      'Social media posts',
      'Banners and ads',
      'Story templates',
      'Profile and cover photos',
      'Email newsletter designs',
    ]
  },
  {
    id: 4,
    title: 'Marketing and Advertising Design',
    services: [
      'Billboard designs',
      'Roll-up banners',
      'Backdrops',
      'Vehicle wraps',
      'Promotional materials',
      '3D Signages',
      'Presentation decks',
    ]
  },
  {
    id: 5,
    title: 'Product and Merchandise Design',
    services: [
      'T-shirt and apparel graphics',
      'Stickers',
      'Mugs and gift items',
      'Custom packaging',
      'Fabric Design',
      'Fabric Printing',
    ]
  },
 
  {
    id: 6,
    title: 'Creative & Custom Design',
    services: [
      'Illustrations',
      'Infographics',
      'Photo editing and retouching',
      'Typography and layout design',
      'Mockups and concept visuals'
    ]
  }
]

export default function ServiceSection() {
  return (
    <section id="services" className={styles.serviceSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>SERVICES</h2>
          <p className={styles.subtitle}>what we offer</p>
        </div>

        <div className={styles.categoriesGrid}>
          {serviceCategories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.servicesList}>
                {category.services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
