'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from 'feather-icons-react'
import styles from '../navbar.module.css'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -1000 }
}

export default function MobileNavbar ({ links }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <div className={styles.mobile}>
      {!isOpen && <MenuButton handleClick={handleClick} isOpen={isOpen} />}
      <AnimatePresence>
        {isOpen && <Menulinks links={links} handleClick={handleClick} isOpen={isOpen} />}
      </AnimatePresence>
    </div>
  )
}

function MenuButton ({ handleClick, isOpen }) {
  return (
    <div
      className={styles.mobile__button}
      onClick={handleClick}
    >
      {isOpen ? <Icon icon='x' /> : <Icon icon='menu' />}
    </div>
  )
}

function Menulinks ({ links, handleClick, isOpen }) {
  return (
    <motion.div
      className={styles.mobile__menu}
      variants={variants}
      initial='closed'
      animate='open'
      exit='closed'
      transition={{ duration: 0.5 }}
    >
      <div
        className={styles.mobile__button}
        onClick={handleClick}
      >
        {isOpen ? <Icon icon='x' /> : <Icon icon='menu' />}
      </div>
      <ul className={styles.mobile__list}>
        {links.map(({ label, to }) => (
          <li key={label + '-' + to}>
            <a href={to}>{label}</a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
