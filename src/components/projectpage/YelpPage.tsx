import React from 'react'

import ButtonCircle from 'components/ui/button/ButtonCircle'

import styles from 'sass/main.module.scss'

export default function YelpPage() {
  return (
    <div className={styles['yelp']}>
      <div className={styles['yelp__btn-ctn']}>
        <ButtonCircle />
      </div>
      <div>
        <h1>YelpCamp</h1>
        <h3>A website where users can create and review campgrounds.</h3>

        <span>
          This project was part of Colt Steele's Udemy web development course
          created using HTML/CSS, Node.js, Express and MongoDB.
          <br />
          Basic features allows the creation of user accounts which is required
          to make, edit and remove campgrounds. Passport.js was used to handle
          authentication. And users are also able to create and see reviews left
          by other users for all these campground listings.
        </span>

        
      </div>
    </div>
  )
}
