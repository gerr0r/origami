import React from 'react'
import Link from '../link/Link'
import styles from './footer.module.css'
import logo from "../../images/blue-origami-bird-flipped.png"
import getLinks from "../../helpers/anchors"

const Footer = () => {
	const links = getLinks()
	const location = "footer";
	return (
		<footer className={styles.footer}>
			<img className={styles.logo} src={logo} alt="logo" />
			<ul>
				{links.map(link => <Link href={link.path} title={link.name} location={location} />)}
			</ul>
			<p className={styles.reserved}>All rights reserved 2020</p>
		</footer>
	)
}

export default Footer