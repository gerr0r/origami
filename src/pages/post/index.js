import React, {  useState  } from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import SubmitButton from "../../components/buttons/submit"
import styles from "./index.module.css"
import Origamies from "../../components/origamies/Origamies"
import getCookie from "../../helpers/auth-cookie"

const PostPage = () => {
    const [post, setPost] = useState("")
    const [update, setUpdate] = useState(false)

    const createPost = async () => {
        const token = getCookie("x-auth-token")

        if (!post) return

        await fetch("http://localhost:9999/api/origami", {
            method: "POST",
            body: JSON.stringify({
                description: post
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        setUpdate(!update)
    }

    return (
        <MainLayout>
            <div className={styles.input}>
                <div>
                    <Title title="Share your thoughts..." />
                    <textarea className={styles.textarea} placeholder="Your thoughts here..." onChange={e => setPost(e.target.value)}></textarea>
                    <SubmitButton name="Post" onClick={createPost} />
                </div>
                <div>
                    <h2>Last 3 posts on your wall</h2>
                    <Origamies location="posts" length={"3"} update={update}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default PostPage