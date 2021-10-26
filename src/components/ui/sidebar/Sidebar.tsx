import React from 'react'

import styles from 'sass/main.module.scss'

import ModalOverlay from '../modal/ModalOverlay'
import SidebarIcon from './SidebarIcon'
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  const [isOpen, setOpen] = React.useState(false)
  const handleOpen = function () {
    setOpen(!isOpen)
  }

  return (
    <nav className={`${styles['sb']}`}>
      
      {(isOpen === true) && <ModalOverlay isOpen={isOpen}/>}
      
      <SidebarIcon />
      <SidebarMenu
        isOpen={isOpen}
        transition={{ duration: 0.8 }}
        onClick={handleOpen}
      />
    </nav>
  )
}
