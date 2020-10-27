import React from 'react'
import Link from '../link/Link'
import styles from './footer.module.css'
import logo from "../../images/blue-origami-bird-flipped.png"
import createLinks from "../../helpers/anchors"
import AuthContext from '../../authentication/context'

class Footer extends React.Component {

	static contextType = AuthContext

	render() {
		const links = createLinks(this.context.authenticated, this.context.user)
		const location = "footer"
		return (
			<footer className={styles.footer}>
				<img className={styles.logo} src={logo} alt="logo" />
				<ul>
					{links.map(link => <Link key={link.name} href={link.path} title={link.name} location={location} />)}
				</ul>
				<p className={styles.reserved}>All rights reserved 2020</p>
			</footer>
		)
	}
}

export default Footer