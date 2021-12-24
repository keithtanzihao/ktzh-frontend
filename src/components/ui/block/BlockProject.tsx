import React from 'react'

import BlockContainer from './BlockContainer'
import ButtonExpand from '../button/ButtonExpand'

import styles from 'sass/main.module.scss'

interface Prop {
  title: string
  img?: string
}

export default function BlockProject({ title, img = '' }: Prop) {
  const [isHover, setHover] = React.useState(false)
  const handleHover = function () {
    setHover(!isHover)
  }

  return (
    <BlockContainer>
      <img className={styles['blk__pj__img']} src={img} />
      {/* <span className={styles['blk__pj__title']}>{title}</span> */}

      <ButtonExpand
        animated={isHover}
        text={title}
        onHover={handleHover}
      ></ButtonExpand>
      
    </BlockContainer>
  )
}
