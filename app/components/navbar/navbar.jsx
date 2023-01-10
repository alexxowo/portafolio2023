'use client'
import styles from './navbar.module.css'
import DesktopNavbar from './desktop/desktop'
import MobileNavbar from './mobile/mobile'
import { AnimatePresence } from 'framer-motion'

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
    <div className={styles.navigation__container}>
      <AnimatePresence>
        <DesktopNavbar links={links} />
        <MobileNavbar links={links} />
      </AnimatePresence>
    </div>
  )
}
