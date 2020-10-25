import React from "react"
import Link from "../link/Link"
import styles from "./aside.module.css"
import getLinks from "../../helpers/anchors"

const Aside = () => {
	const links = getLinks()
	const location = "aside"
	return (
		<aside className={styles.aside}>
			<ul>
				{links.map(link => <Link key={link.name} href={link.path} title={link.name} location={location} />)}
			</ul>
		</aside>
	)
}

export default Aside