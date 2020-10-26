import React from "react"
import MainLayout from "../../layouts/main/main"
import Title from "../../components/title/title"
import FormControl from "../../components/form-control/form-control"
import Form from "../../components/form/form"

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        }
    }

    checkLogin = e => {
        e.preventDefault()
        console.log(this.state)

        fetch("http://localhost:9999/api/user/register", {
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
            if (res.status === 409) throw Error("Username already taken")
            else if (res.status === 500) throw Error("Something went wrong")
            else {
                let authToken = res.headers.get("Authorization")
                document.cookie = `x-auth-token=${authToken}`
                return res.json()
            }
        })
        .then(data => {
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
                    <Title title="Register page" />
                    <FormControl element="input" label="Username" id="username" type="text" value={this.state.username} onChange={this.changeState} />
                    <FormControl element="input" label="Password" id="password" type="password" value={this.state.password} onChange={this.changeState} />
                    <FormControl element="input" label="Re-Password" id="rePassword" type="password" value={this.state.rePassword} onChange={this.changeState} />
                    <FormControl element="button" label="Register" />
                </Form>
            </MainLayout>
        )
    }
}

export default RegisterPage