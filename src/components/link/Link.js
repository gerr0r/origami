import React from 'react'
import styles from './link.module.css'

const Link = (props) => {
	const { href, title, location } = props
	return (
		<li className={styles[`${location}-list-item`]}>
			<a href={href} className={styles[`${location}-link`]}>{title}</a>
		</li>
	)
}

export default Link