import React from 'react'

import styles from 'sass/main.module.scss'

interface Props {
  icon?: React.ReactNode
  title: string
  url: string
}

export default function SidebarItem(props: Props) {
  return (
    <li className={styles['sb-head']}>
      <a href={props.url}>
        <span>&#123;</span>
        {props.title}
        <span>&#125;</span>
      </a>
    </li>
  )
}
