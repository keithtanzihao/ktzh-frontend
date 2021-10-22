import styles from 'sass/main.module.scss'

import { IconContext } from 'react-icons/lib'
import { FiCodesandbox } from 'react-icons/fi'

export default function SidebarIcon() {
  return (
    <div className={styles['sb-icon-ctn']}>
      <IconContext.Provider value={{ className: styles['sb-icon']}}>
        <FiCodesandbox />
      </IconContext.Provider>
      <span className={styles['sb-icon-name']}>KeithTan</span>
    </div>
  )
}
