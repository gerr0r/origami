import React from "react"
import MainLayout from "../../layouts/main/main"
import Form from "../../components/form/form"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"

const LoginPage = () => {
    return (
        <MainLayout>
            <Form>
                <Title title="Login page" />
                <FormControl element="input" label="Email" type="email" />
                <FormControl element="input" label="Password" type="password" />
                <FormControl element="button" label="Login" />
            </Form>
        </MainLayout>
    )
}

export default LoginPage