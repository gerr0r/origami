import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import SubmitButton from "../../components/buttons/submit"
import styles from "./index.module.css"

const RegisterPage = () => {
    return (
        <MainLayout>
            <div className={styles.forms}>
                <Title title="Register page" />
                <div className={styles["form-control"]}>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className={styles["form-control"]}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className={styles["form-control"]}>
                    <label>Re-Password</label>
                    <input type="password" />
                </div>
                <div className={styles["form-control"]}>
                    <SubmitButton name="Register" />
                </div>
            </div>
        </MainLayout>
    )
}

export default RegisterPage