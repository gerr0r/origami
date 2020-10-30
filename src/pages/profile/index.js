import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom"
import MainLayout from "../../layouts/main/main"
import img from "../../images/profile_image.svg"
import Origamies from '../../components/origamies/Origamies'
import styles from "./index.module.css"
import AuthContext from '../../authentication/context'

const ProfilePage = () => {
    const context = useContext(AuthContext)
    const history = useHistory()
    const params = useParams()
    const [name, setName] = useState(undefined)
    const [posts, setPosts] = useState(0)

    async function getInfo() {
        const id = params.uid
        const fetch_ = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!fetch_.ok) history.push("/error")

        const data = await fetch_.json()

        setName(data.username)
        setPosts(data.posts.length.toString())
    }

    const logOut = () => {
        context.logOut()
        history.push("/")
    }

    useEffect(() => {
        getInfo()
    })

    return (
        <MainLayout>
            <div className={styles.profile}>
                <img src={img} alt="Profile" />
                <div className={styles["personal-info"]}>
                    <p><span>Name: </span>{name || "Loading..."}</p>
                    <p><span>Posts: </span>{posts || "Loading..."}</p>
                    <button onClick={logOut}>Logout</button>
                </div>
                <div>
                    <h2>3 of your recent posts</h2>
                    <Origamies location="profile" length={"3"}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProfilePage