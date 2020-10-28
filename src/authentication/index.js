import React from "react"
import AuthContext from "./context"

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authenticated: null,
            user: null
        }
    }

    logIn = user => {
        this.setState({
            authenticated: true,
            user
        })
    }

    logOut = () => {
        this.setState({
            authenticated: false,
            user: null
        })
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    }

    getCookie = (cookie) => {
        const cookies = {}
        const cookiesString = document.cookie.split("; ")
        cookiesString.forEach(c => {
            let [name, value] = c.split("=")
            cookies[name] = value
        })
        return cookies[cookie]
    }

    componentDidMount() {
        const token = this.getCookie("x-auth-token")

        if (!token) {
            this.logOut()
            return
        }

        fetch("http://localhost:9999/api/user/verify",{
            method: "POST",
            body: JSON.stringify({
                token
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {

            console.log(res);
            if (!res.ok) {
                this.logOut()
                return
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            if (data.status) {
                this.logIn({
                    user: data.user.username,
                    id: data.user._id
                })
            } else {
                this.logOut()
            }
        })
    }

    render() {
        if (this.state.authenticated === null) {
            return <div>Please wait...</div>
        }
        return (
            <AuthContext.Provider value={{
                authenticated: this.state.authenticated,
                user: this.state.user,
                logIn: this.logIn,
                logOut: this.logOut
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default Auth