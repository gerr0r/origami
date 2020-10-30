import React, { useCallback, useEffect, useState } from 'react'
import Origami from "../origami/Origami"
import styles from './origamies.module.css'


const Origamies = (props) => {
	const [origamies, setOrigamies] = useState([])

	const getOrigamies = useCallback(async () => {
		const fetch_ = await fetch(`http://localhost:9999/api/origami?length=${props.length}`)
		const data = await fetch_.json()
		setOrigamies(data)
	},[props.length])

	const renderOrigamies = () => {
		return origamies.map((origami, idx) => {
			return (
				<Origami key={origami._id} index={idx} {...origami} />
			)
		})
	}

	useEffect(() => {
		getOrigamies()
	},[getOrigamies, props.update])

	return (
		<div className={styles.posts}>
			{renderOrigamies()}
		</div>
	)
}

export default Origamies