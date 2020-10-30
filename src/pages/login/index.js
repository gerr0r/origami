import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import MainLayout from "../../layouts/main/main"
import Form from "../../components/form/form"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"
import AuthContext from "../../authentication/context"


const LoginPage = () => {
    const context = useContext(AuthContext)
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const changeUsername = e => {
        setUsername(e.target.value)
    }

    const changePassword = e => {
        setPassword(e.target.value)
    }

    const checkLogin = e => {
        e.preventDefault()

        fetch("http://localhost:9999/api/user/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            let authToken = res.headers.get("Authorization")
            if (!authToken) throw Error("Username or password invalid")
            document.cookie = `x-auth-token=${authToken}; Secure`
            return res.json()
        }).then(data => {
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
                <Title title="Login page" />
                <FormControl element="input" label="Username" id="username" type="text" value={username} onChange={changeUsername}/>
                <FormControl element="input" label="Password" id="password" type="password" value={password} onChange={changePassword}/>
                <FormControl element="button" label="Login" />
            </Form>
        </MainLayout>
    )
}

export default LoginPage