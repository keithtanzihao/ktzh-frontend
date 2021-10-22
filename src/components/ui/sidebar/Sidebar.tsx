import React from 'react'

import styles from 'sass/main.module.scss'

import SidebarIcon from './SidebarIcon'
import SidebarMenu from './SidebarMenu'

export default function Sidebar() {

  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = function() {
    setOpen(!isOpen);
  }

  return (
    <nav className={`${styles['sb']}`}>
      <SidebarIcon/>
      <SidebarMenu isOpen={isOpen} onClick={handleOpen}/>
    </nav>
  )
}


