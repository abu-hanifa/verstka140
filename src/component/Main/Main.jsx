import React from 'react'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.number}>140</div>
      <div className={styles.buttons}>
        <button className={styles.button1}>Увеличить</button>
        <button className={styles.button2}>Уменьшить</button>
        <button className={styles.button3}>Сбросить</button>
      </div>
    </div>
  )
}
