import Link from 'next/link'
import styles from './navbar.module.css'

const links = [{
  label: 'Home',
  to: '#'
},
{
  label: 'Projects',
  to: '#'
},
{
  label: 'Experience',
  to: '#'
},
{
  label: 'Contact',
  to: '#'
}]

export default function Navbar () {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {links.map(({ icon, label, to }) => (
          <li key={to}>
            <Link href={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
