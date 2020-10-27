import React from "react"
import Link from "../link/Link"
import styles from "./aside.module.css"
import createLinks from "../../helpers/anchors"
import AuthContext from "../../authentication/context"

class Aside extends React.Component {
	
    static contextType = AuthContext

    render() {
        const links = createLinks(this.context.authenticated, this.context.user)
        const location = "aside"
        return (
			<aside className={styles.aside}>
			<ul>
				{links.map(link => <Link key={link.name} href={link.path} title={link.name} location={location} />)}
			</ul>
		</aside>
        )
    }
}

export default Aside