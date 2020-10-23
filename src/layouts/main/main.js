import React from 'react'
import Nav from '../../components/nav/Nav'
import Aside from '../../components/aside/Aside'
import Footer from "../../components/footer/Footer"
import styles from './main.module.css'

const MainLayout = (props) => {
  return (
    <div className={styles.app}>
      <Nav />
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