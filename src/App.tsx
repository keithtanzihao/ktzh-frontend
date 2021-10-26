import React from 'react'

import Sidebar from './components/ui/sidebar/Sidebar'
import ProjectPage from 'components/project-page/ProjectPage'

import styles from 'sass/main.module.scss'

export default function App() {
  return (
    <div className={`${styles['app']}`}>
      <Sidebar />
      <ProjectPage/>
    </div>
  )
}


