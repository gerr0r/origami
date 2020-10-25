import React from "react"
import image from "../../images/sad-face.png"
import MainLayout from "../../layouts/main/main"
import styles from "./index.module.css"

const ErrorPage = () => {
    return (
        <MainLayout>
            <div className={styles.error}>
                <h1>Something went wrong...</h1>
                <img src={image} alt="Sadface" />
            </div>
        </MainLayout>
    )
}

export default ErrorPage