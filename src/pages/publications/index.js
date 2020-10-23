import React from 'react'
import MainLayout from "../../layouts/main/main"
import Origamies from '../../components/origamies/Origamies'
import Title from "../../components/title/title"
import styles from "./index.module.css"

const PublicationsPage = () => {
    return (
        <MainLayout>
            <main className={styles.main}>
                <Title title="Publications" />
                <Origamies />
            </main>
        </MainLayout>
    )
}

export default PublicationsPage