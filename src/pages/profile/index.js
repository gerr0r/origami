import React from 'react'
import MainLayout from "../../layouts/main/main"
import img from "../../images/profile_image.svg"

const ProfilePage = () => {
    return (
        <MainLayout>
            <img src={img} alt="Profile"/>
            <div>ProfilePage</div>
        </MainLayout>
    )
}

export default ProfilePage