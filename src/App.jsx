import React from 'react'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import styles from './App.module.css'

export default function app() {
  return (
    <div className={styles.app}>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}
