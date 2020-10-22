import React from 'react'
import Link from '../link/Link'
import styles from './footer.module.css'
import logo from "../../images/blue-origami-bird-flipped.png"

const Footer = () => {
	const location = "footer"
	return (
		<footer className={styles.footer}>
			<ul>
				<Link href="#" title="Publications" location={location} />
				<Link href="#" title="Post" location={location} />
				<Link href="#" title="Register" location={location} />
				<Link href="#" title="Login" location={location} />
				<Link href="#" title="Profile" location={location} />
			</ul>
			<img className={styles.logo} src={logo} alt="logo" />
			<p className={styles.reserved}>All rights reserved 2020</p>
		</footer>
	)
}

export default Footer