import { useState } from 'react'

import { motion, AnimateSharedLayout } from 'framer-motion'

import styles from 'sass/main.module.scss'

interface Props {
  items: string[]
}

export default function FilterCtn({ items } : Props) {
  
  const [selected, setSelected] = useState(0)

  return (
    <AnimateSharedLayout>
      <ul className={styles['fill__ctn']}>
        {items.map((itemText, i) => {
          return (
            <motion.li
              animate
              key={i}
              className={`${i === selected ? styles['fill__item--selected'] : styles['fill__item'] }`}
              onClick={() => setSelected(i)}
            >
              {i === selected && (
                <motion.div
                  layoutId="fill__item__cover"
                  className={`${styles['fill__item__cover']}`}
                  style={{ backgroundColor: '#B1D8B7', opacity: 0.3 }}
                ></motion.div>
              )}
              {itemText}
            </motion.li>
          )
        })}
      </ul>
    </AnimateSharedLayout>
  )
}
