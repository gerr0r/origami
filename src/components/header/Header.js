import React from 'react';
import Link from '../link/Link'
import styles from './header.module.css'
import logo from "../../images/white-origami-bird.png"

const Header = () => {
    const location = "header"
    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul>
                <Link href="#" title="Publications" location={location} />
                <Link href="#" title="Post" location={location} />
                <Link href="#" title="Register" location={location} />
                <Link href="#" title="Login" location={location} />
                <Link href="#" title="Profile" location={location} />
            </ul>
        </header>
    )
}

export default Header