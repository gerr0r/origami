import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import SubmitButton from "../../components/buttons/submit"
import styles from "./index.module.css"

const LoginPage = () => {
    return (
        <MainLayout>
            <div className={styles.forms}>
                <Title title="Login page" />
                <div className={styles["form-control"]}>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className={styles["form-control"]}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className={styles["form-control"]}>
                    <SubmitButton name="Login" />
                </div>
            </div>
        </MainLayout>
    )
}

export default LoginPage