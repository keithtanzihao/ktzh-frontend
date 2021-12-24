
import styles from 'sass/main.module.scss'

interface Props {
  itemName: string
}

export default function NavbarItem({ itemName } : Props) {
  return (
    <div className={styles['nb-item']}>
      <a href="#">{itemName}</a>
    </div>
  )
}