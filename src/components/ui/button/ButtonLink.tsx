import { Link } from 'react-router-dom'
import { HashLink, NavHashLink } from 'react-router-hash-link'

import { IconContext } from 'react-icons'
import { FiArrowDown } from 'react-icons/fi'

import styles from 'sass/main.module.scss'

interface Props {
  id: string
  linkToId: string
}

export default function ButtonLink({ id = '/', linkToId = '/' }: Props) {
  return (
    <div className={styles['btn-link']} id={id}>
      <HashLink smooth to={linkToId}>
        <a href="" className={styles['btn-link__a']}>
          <span>SELECTED WORK</span>
          <IconContext.Provider
            value={{ className: `${styles['btn-link__icon']}` }}
          >
            <FiArrowDown />
          </IconContext.Provider>
        </a>
      </HashLink>
    </div>
  )
}
