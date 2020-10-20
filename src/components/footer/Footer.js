import React from 'react'
import Link from '../link/Link'
import styles from './footer.module.css'
import logo from "../../images/blue-origami-bird-flipped.png"

const Footer = (props) => {

	return (
		<footer className={styles.footer}>
			<ul>
				<Link href="#" title="Going to 1" type="footer" />
				<Link href="#" title="Going to 2" type="footer" />
				<Link href="#" title="Going to 3" type="footer" />
				<Link href="#" title="Going to 4" type="footer" />
				<Link href="#" title="Going to 5" type="footer" />
				<Link href="#" title="Going to 6" type="footer" />
				<Link href="#" title="Going to 7" type="footer" />
			</ul>
			<img className={styles.logo} src={logo} alt="logo-image"/>
			<p className={styles.reserved}>All rights reserved 2020</p>
		</footer>
	)
}

export default Footer