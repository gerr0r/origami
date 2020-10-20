import React from 'react'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
      </div>
    </div>
  );
}

export default App;
