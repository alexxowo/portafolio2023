'use client'
import styles from '../navbar.module.css'
import Link from 'next/link'

export default function DesktopNavbar ({ links }) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link href={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
