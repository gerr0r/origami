import React from 'react'
import MainLayout from "../../layouts/main/main"
import img from "../../images/profile_image.svg"
import Origamies from '../../components/origamies/Origamies'
import styles from "./index.module.css"
import AuthContext from '../../authentication/context'

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: undefined,
            posts: 0
        }
    }

    static contextType = AuthContext

    getInfo = async (id) => {
        const fetch_ = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!fetch_.ok) this.props.history.push("/error")
        const data = await fetch_.json()

        this.setState({
            name: data.username,
            posts: data.posts.length.toString()
        })
    }

    logOut = () => {
        this.context.logOut()
        this.props.history.push("/")
    }

    componentDidMount() {
        this.getInfo(this.props.match.params.uid)
    }

    render() {
        return (
            <MainLayout>
                <div className={styles.profile}>
                    <img src={img} alt="Profile" />
                    <div className={styles["personal-info"]}>
                        <p><span>Name: </span>{this.state.name || "Loading..."}</p>
                        <p><span>Posts: </span>{this.state.posts || "Loading..."}</p>
                        <button onClick={this.logOut}>Logout</button>
                    </div>
                    <div>
                        <h2>3 of your recent posts</h2>
                        <Origamies location="profile" />
                    </div>
                </div>
            </MainLayout>
        )
    }
}

export default ProfilePage