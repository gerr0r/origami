import React from 'react'
import Origami from "../origami/Origami"
import styles from './origamies.module.css'

class Origamies extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			origamies: []
		}
	}

	getOrigamies = async () => {
		const data = await fetch("http://localhost:9999/api/origami")
		const origamies = await data.json()
		this.setState({
			origamies
		})
	}

	renderOrigamies = () => {
		const { origamies } = this.state
		
		return origamies.map((origami, idx) => {
			return (
				<Origami key={origami._id} index={idx} {...origami}/>
				
			)
		})
	}

	componentDidMount() {
		this.getOrigamies()
	}

	render() {
		return (
			<div className={styles.container}>
				<h1 className={styles.title}>Origamies</h1>
				<div className={styles["origamies-wrapper"]}>
					{this.renderOrigamies()}
				</div>
			</div>
		)
	}
}

export default Origamies