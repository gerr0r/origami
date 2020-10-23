import React from 'react';
import Link from '../link/Link'
import styles from './nav.module.css'
import logo from "../../images/white-origami-bird.png"
import getLinks from "../../helpers/anchors"

const Nav = () => {
    const links = getLinks()
    const location = "nav"
    return (
        <nav className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo" />
            <ul>
            {links.map(link => <Link href={link.path} title={link.name} location={location} />)}
            </ul>
        </nav>
    )
}

export default Nav