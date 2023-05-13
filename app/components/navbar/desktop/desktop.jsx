'use client'
import styles from '../navbar.module.css'
import ScrollLink from '../../ScrollLink'

export default function DesktopNavbar ({ links }) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {links.map(({ label, to }) => (
          <li key={label}>
            <ScrollLink href={to}>{label}</ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
