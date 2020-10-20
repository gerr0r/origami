import React from 'react'
import Header from './components/header/Header'
import Aside from './components/aside/Aside'
import Origamies from './components/origamies/Origamies'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamies />
      </div>
    </div>
  );
}

export default App;
