import React from 'react'

import styles from 'sass/main.module.scss'

interface Props {
  children? : React.ReactNode
}

export default function BlockContainer({ children } : Props) {
  return (
    <div className={styles['blk__ctn']}>
      {children}
    </div>
  )
}