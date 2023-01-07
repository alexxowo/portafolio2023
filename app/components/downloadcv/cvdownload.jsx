'use client'
import Icon from 'feather-icons-react'

export default function cvdownload () {
  return (
    <button className='btn btn-primary btn-icon'>
      Download resume
      <Icon icon='download' fill='black' size={14} />
    </button>
  )
}
