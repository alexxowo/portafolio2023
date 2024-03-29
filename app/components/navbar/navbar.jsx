'use client'
import styles from './navbar.module.css'
import DesktopNavbar from './desktop/desktop'
import MobileNavbar from './mobile/mobile'
import { AnimatePresence } from 'framer-motion'

const links = [{
  label: 'Home',
  to: '#home'
},
{
  label: 'Projects',
  to: '#projects'
},
{
  label: 'Experience',
  to: '#experience'
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
