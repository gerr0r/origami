import React from 'react';
import Link from '../link/Link'
import styles from './nav.module.css'
import logo from "../../images/white-origami-bird.png"
import createLinks from "../../helpers/anchors"
import AuthContext from '../../authentication/context';

class Nav extends React.Component {

    static contextType = AuthContext

    render() {
        const links = createLinks(this.context.authenticated, this.context.user)
        const location = "nav"
        return (
            <nav className={styles.navigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul>
                {links.map(link => <Link key={link.name} href={link.path} title={link.name} location={location} />)}
                </ul>
            </nav>
        )
    }
}

export default Nav