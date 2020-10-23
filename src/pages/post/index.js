import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import SubmitButton from "../../components/buttons/submit"
import styles from "./index.module.css"

const PostPage = () => {
    return (
        <MainLayout>
            <div className={styles.input}>
                <div>
                    <Title title="Share your thoughts..." />
                    <textarea className={styles.textarea} placeholder="Your thoughts here..."></textarea>
                    <SubmitButton name="Post" />
                </div>
                <div>
                    <h2>Last 3 posts on your wall</h2>
                </div>
            </div>
        </MainLayout>
    )
}

export default PostPage