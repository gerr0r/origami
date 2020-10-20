import React from 'react'
import styles from './origami.module.css'

const Origami = (props) => {
	const { description, author } = props

	return (
		<div className={styles.container}>
			<p className={styles.description}>
				{description}
			</p>
			<div>
				<span className={styles.user}>
					<small>Author:</small>
					{author.username}
				</span>
			</div>
		</div>
	)
}

export default Origami