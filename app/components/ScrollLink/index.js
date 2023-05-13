'use client'
import Link from 'next/link'
import React from 'react'

const ScrollLink = ({ children, ...props }) => {
  const handle = (e) => {
    e.preventDefault()

    const targetId = e.currentTarget.href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth'
    })
  }

  return (<Link {...props} onClick={handle}>{children}</Link>)
}

export default ScrollLink
