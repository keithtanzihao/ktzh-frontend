import styles from 'sass/main.module.scss'

import { IconContext } from 'react-icons/lib'
import { FiCodesandbox } from 'react-icons/fi'

export default function NavbarIcon() {
  return (
    <div className={styles['nb-icon-ctn']}>
      <IconContext.Provider value={{ className: styles['nb-icon']}}>
        <FiCodesandbox />
      </IconContext.Provider>
    </div>
  )
}
