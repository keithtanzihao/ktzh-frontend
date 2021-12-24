import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Frontpage from 'components/frontpage/Frontpage'

import styles from 'sass/main.module.scss'
import MainSection from 'components/frontpage/MainSection'
import BlockSection from 'components/frontpage/BlockSection'

export default function App() {
  return (
    <div className={`${styles['app']}`}>
      <Routes>
        {/* <Route path="/main" element={<MainSection />} /> */}
        {/* <Route path="/block" element={<BlockSection />} /> */}
        <Route path="/block" element={<Frontpage />} />
      </Routes>
    </div>
  )
}
