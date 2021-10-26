import React from 'react'

import { motion } from 'framer-motion'

import styles from 'sass/main.module.scss'

interface Props {
  name: string
  msg: string
}

export default function ProjectItem({ name, msg }: Props) {
  return (
    <li className={styles['pji-ctn']}>
      <div className={styles['pji-ctn__inner']}>
        <a className={styles['pji-ctn__inner-link']} href="">
          {name}
        </a>

        <div className={styles['pji-ctn__inner-tag']}>
          <motion.div
            className={styles['inner-tag__front']}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            {msg}
          </motion.div>
          {/* <motion.div
            className={styles['inner-tag__back']}
            initial={{ x: '0%' }}
            animate={{ x: '-100%' }}
            transition={{ repeat: Infinity,  duration: 4, ease: "linear" }}
          >
            {msg}
          </motion.div> */}
        </div>
      </div>
    </li>
  )
}
