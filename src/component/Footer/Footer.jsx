import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.buts}>
        <div className={styles.img}>
          <div className={styles.img1}><img src="Vector.svg" alt="" /></div>
          <div className={styles.img2}><img src="Vector1.svg" alt="" /></div>
        </div>
        <div className={styles.but2}><a href="#">Партнерам</a></div>
        <div className={styles.but3}><a href="#">Разработчикам</a></div>
        <div className={styles.but4}><a href="#">Вакансии</a></div>
      </div>
      <div className={styles.but5}>OOO"интукод",2020г.</div>
    </div>
  )
}
