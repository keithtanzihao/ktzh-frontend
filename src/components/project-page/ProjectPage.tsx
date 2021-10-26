import ProjectItem from './ProjectItem'

import styles from 'sass/main.module.scss'

export default function ProjectPage() {
  return (
    <div className={styles['pj-ctn']}>
      <ul>
        <ProjectItem
          name="YelpCamp"
          msg="Udemy Web Development Course Project "
        />
        {/* <ProjectItem
          name="Seloc"
          msg="E-Commerce Webpage Personal Project "
        />
        <ProjectItem
          name="Stickman"
          msg="2D Stickman Game "
        />
        <ProjectItem name="DASH" msg="Capstone Project | " />
        <ProjectItem name="About" msg="Udemy Course" /> */}
      </ul>
    </div>
  )
}
