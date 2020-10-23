import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import styles from "./index.module.css"

const PostPage = () => {
    return (
        <MainLayout>
            <div className={styles.input}>
                <Title title="Share your thoughts..." />
                <textarea placeholder="Your thoughts here..." cols="30" rows="10"></textarea>
                <button>Post</button>
            </div>
        </MainLayout>
    )
}

export default PostPage