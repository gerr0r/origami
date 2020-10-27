import React from "react"
import AuthContext from "./context"

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authenticated: false,
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
    }

    render() {
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