import React from 'react'
import Link from "../link/Link"
import styles from './aside.module.css'

const Aside = (props) => {

	return (
		<aside className={styles.container}>
			<ul>
				<Link href="#" title="Going to 1" type="aside"/>
				<Link href="#" title="Going to 2" type="aside"/>
				<Link href="#" title="Going to 3" type="aside"/>
				<Link href="#" title="Going to 4" type="aside"/>
				<Link href="#" title="Going to 5" type="aside"/>
				<Link href="#" title="Going to 6" type="aside"/>
				<Link href="#" title="Going to 7" type="aside"/>
			</ul>
		</aside>
	)
}

export default Aside