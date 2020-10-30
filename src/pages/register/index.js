import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"
import Form from "../../components/form/form"
import AuthContext from "../../authentication/context"

const RegisterPage = () => {
    const context = useContext(AuthContext)
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")

    const checkLogin = e => {
        e.preventDefault()

        fetch("http://localhost:9999/api/user/register", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
            if (res.status === 409) throw Error("Username already taken")
            else if (res.status === 500) throw Error("Something went wrong")
            else {
                let authToken = res.headers.get("Authorization")
                document.cookie = `x-auth-token=${authToken}; Secure`
                return res.json()
            }
        })
        .then(data => {
            context.logIn({
                username: data.username,
                id: data._id
            })
            history.push("/")
        })
        .catch(err => {
            console.log(err.message) //todo
        })
    }

    return (
        <MainLayout>
            <Form onSubmit={checkLogin}>
                <Title title="Register page" />
                <FormControl element="input" label="Username" id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                <FormControl element="input" label="Password" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <FormControl element="input" label="Re-Password" id="rePassword" type="password" value={rePassword} onChange={e => setRePassword(e.target.value)} />
                <FormControl element="button" label="Register" />
            </Form>
        </MainLayout>
    )
}

export default RegisterPage