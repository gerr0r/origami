import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"
import Form from "../../components/form/form"

const RegisterPage = () => {
    return (
        <MainLayout>
            <Form>
                <Title title="Register page" />
                <FormControl element="input" label="Email" type="email" />
                <FormControl element="input" label="Password" type="password" />
                <FormControl element="input" label="Re-Password" type="password" />
                <FormControl element="button" label="Register" />
            </Form>
        </MainLayout>
    )
}

export default RegisterPage