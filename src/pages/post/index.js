import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"

const PostPage = () => {
    return (
        <MainLayout>
            <Title title="Share your thoughts..." />
            <textarea placeholder="Your thoughts here..." cols="30" rows="10"></textarea>
            <button>Post</button>
        </MainLayout>
    )
}

export default PostPage