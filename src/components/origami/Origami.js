import React from 'react'
import styles from './origami.module.css'
import logo from "../../images/blue-origami-bird.png"

const Origami = (props) => {
	const { description, author, index } = props

	return (
		<div className={styles.post}>
			<img className={styles.logo} src={logo} alt="" />
			<p className={styles.description}>
				{index} - {description}
			</p>
			<div className={styles.author}>
				<span >
					<small>Author: </small>
					{author.username}
				</span>
			</div>
		</div>
	)
}

export default Origami