
import styles from 'sass/main.module.scss'

import NavbarItem from './NavbarItem'

export default function NavbarCtn() {
  const itemList = ['All', 'About', 'Projects', 'Work', 'Contact']

  return (
    <div className={styles['nb-ctn']}>
      {itemList.map((name) => {
        return <NavbarItem itemName={name}/>
      })}
    </div>
  )
}