import React from 'react';
import Link from '../link/Link'
import styles from './header.module.css'
import logo from "../../images/white-origami-bird.png"
import getLinks from "../../helpers/anchors"

const Header = () => {
    const links = getLinks()
    const location = "header"
    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul>
            {links.map(link => <Link href={link.path} title={link.name} location={location} />)}
            </ul>
        </header>
    )
}

export default Header