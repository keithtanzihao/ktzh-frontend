import React from 'react'

import Sidebar from './components/ui/sidebar/Sidebar'

import styles from 'sass/main.module.scss'

export default function App() {
  return (
    <div className={`${styles['app']}`}>
      <Sidebar />
    </div>
  )
}


