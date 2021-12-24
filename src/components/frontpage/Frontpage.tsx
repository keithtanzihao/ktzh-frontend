import React from 'react'

import MainSection from './MainSection'
import BlockSection from './BlockSection'
import Navbar from 'components/ui/navbar/Navbar'
import YelpPage from 'components/projectpage/YelpPage'

export default function Frontpage() {
  return (
    <React.Fragment>
      <Navbar />
      <MainSection />
      <BlockSection />

      <YelpPage/>
    </React.Fragment>
  )
}
