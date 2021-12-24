import ButtonLink from 'components/ui/button/ButtonLink'

import styles from 'sass/main.module.scss'

export default function MainSection() {
  return (
    <div className={styles['mainSec']}>
      
      <div className={styles['mainSec__ctn--light']}>
        <div className={styles['mainSec__intro']}>
          <span>Hi! I'm</span>
          <span>Keith Tan</span>
          <span className={styles['mainSec__span']}>
            Computer Science<br/>Graduate
          </span>
        </div>

        <ButtonLink id={'/'} linkToId={'/#blockSection'}/>
      </div>

      <div className={styles['mainSec__ctn--dark']}></div>
    </div>
  )
}
