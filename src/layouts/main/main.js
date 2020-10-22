import React from 'react'
import Header from '../../components/header/Header'
import Aside from '../../components/aside/Aside'
import Footer from "../../components/footer/Footer"
import styles from './main.module.css'

const MainLayout = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout;