import React from "react"
import MainLayout from "../../layouts/main/main"
import Form from "../../components/form/form"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"
import AuthContext from "../../authentication/context"

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    static contextType = AuthContext

    checkLogin = e => {
        e.preventDefault()

        fetch("http://localhost:9999/api/user/login", {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
            let authToken = res.headers.get("Authorization")
            if (!authToken) throw Error("Username or password invalid")
            document.cookie = `x-auth-token=${authToken}`
            return res.json()
        })
        .then(data => {
            this.context.logIn({
                username: data.username,
                id: data._id
            })
            this.props.history.push("/")
        })
        .catch(err => {
            console.log(err.message) //todo
        })
    }

    changeState = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <MainLayout>
                <Form onSubmit={this.checkLogin}>
                    <Title title="Login page" />
                    <FormControl element="input" label="Username" id="username" type="text" value={this.state.username} onChange={this.changeState}/>
                    <FormControl element="input" label="Password" id="password" type="password" value={this.state.password} onChange={this.changeState}/>
                    <FormControl element="button" label="Login" />
                </Form>
            </MainLayout>
        )
    }
}

export default LoginPage