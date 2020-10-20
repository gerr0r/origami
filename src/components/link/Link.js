import React from 'react'
import styles from './link.module.css'

const Link = (props) => {
	const { href, title } = props
	return (
		<li className={styles["header-list-item"]}>
			<a href={href} className={styles["header-link"]}>{title}</a>
		</li>
	)
}

export default Link