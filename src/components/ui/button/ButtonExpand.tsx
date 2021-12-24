import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { IconContext } from 'react-icons'
import { FiArrowUpRight } from 'react-icons/fi'

import styles from 'sass/main.module.scss'

interface Props {
  animated?: boolean
  text?: string
  genericProps?: any
  onHover(): void
}

export default function ButtonExpand({
  text,
  animated = false,
  ...props
}: Props) {
  const variant = animated ? 'hoverYes' : 'hoverNo'
  const btnExpand = {
    hoverYes: { width: '100%', transition: { duration: 0.5 } },
    hoverNo: { width: '3rem', transition: { duration: 0.7 } },
  }

  const textExpand = {
    hoverYes: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.25 },
    },
    hoverNo: {
      opacity: 0,
      transition: { duration: 0.25 },
    },
  }

  const arrowExpand = {
    hoverYes: { opacity: 0, transition: { duration: 0.5 } },
    hoverNo: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  }

  props.genericProps = {
    animate: variant,
    initial: 'hoverNo',
  }

  return (
    <div className={styles['btn-exp']}>
      <motion.a
        className={styles['btn-exp__btn']}
        onMouseEnter={props.onHover}
        onMouseLeave={props.onHover}
        {...props.genericProps}
        variants={btnExpand}
      >
        <AnimatePresence>
          <IconContext.Provider
            value={{ className: `${styles['btn-exp__icon']}` }}
          >
            <motion.p
              className={styles['btn-exp__p']}
              {...props.genericProps}
              variants={textExpand}
            >
              {text}
              <FiArrowUpRight />
            </motion.p>

            <motion.div
              className={styles['btn-exp__icon__ctn']}
              {...props.genericProps}
              variants={arrowExpand}
            >
              <FiArrowUpRight />
            </motion.div>
          </IconContext.Provider>
        </AnimatePresence>
      </motion.a>
    </div>
  )
}
