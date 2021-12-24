import React from 'react'

import styles from 'sass/main.module.scss'

import ModalOverlay from '../modal/ModalOverlay'
import NavbarIcon from './NavbarIcon'
import NavbarMenu from './NavbarMenu'

import ButtonCircle from '../button/ButtonCircle'

export default function Navbar() {
  const [isOpen, setOpen] = React.useState(false)
  const handleOpen = function () {
    setOpen(!isOpen)
  }

  return (
    <nav className={`${styles['nb']}`}>
      
      {(isOpen === true) && <ModalOverlay isOpen={isOpen}/>}
      
      <NavbarIcon />
      {/* <NavbarCtn/> */}
      <NavbarMenu
        isOpen={isOpen}
        transition={{ duration: 0.8 }}
        onClick={handleOpen}
      />
    </nav>
  )
}
