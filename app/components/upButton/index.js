import React from 'react'
import style from './upButton.module.css'
import Icon from 'feather-icons-react'
import ScrollLink from '../ScrollLink'

const UpButton = () => {
  return (
    <>
      <div className={style.button}>
        <ScrollLink href='#home'>
          <Icon icon='arrow-up' size={24} />
        </ScrollLink>

      </div>
    </>
  )
}

export default UpButton
