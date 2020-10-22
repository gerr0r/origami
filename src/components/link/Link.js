import React from 'react'
import {Link as A} from "react-router-dom"
import styles from './link.module.css'

const Link = (props) => {
	const { href, title, location } = props
	return (
		<li className={styles[`${location}-list-item`]}>
			<A to={href} className={styles[`${location}-link`]}>{title}</A>
		</li>
	)
}

export default Link