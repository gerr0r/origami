import React from 'react'
import Link from "../link/Link"
import styles from './aside.module.css'

const Aside = () => {
	const location = "aside";
	return (
		<aside className={styles.container}>
			<ul>
				<Link href="#" title="Publications" location={location}/>
				<Link href="#" title="Post" location={location}/>
				<Link href="#" title="Register" location={location}/>
				<Link href="#" title="Login" location={location}/>
				<Link href="#" title="Profile" location={location}/>
			</ul>
		</aside>
	)
}

export default Aside