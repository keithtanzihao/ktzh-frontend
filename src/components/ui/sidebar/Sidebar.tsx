import React from 'react'

import styles from 'sass/main.module.scss'

import { BsPeopleFill, BsFolderFill } from 'react-icons/bs'

import SidebarItem from './SidebarItem'

export default function Sidebar() {
  return (
    <nav className={`${styles['sb']}`}>
      <ul>
        <SidebarItem title="KT" url="#" />
      </ul>
    </nav>
  )
}
