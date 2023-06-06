import React from 'react'
import styles from './Header.module.css'


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}><img src="Group 1.svg" alt="asd" /></div>
        <div className={styles.meny}>
            <div className={styles.glavnaya}>
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </div>
            
        </div>
    </div>
  )
}

