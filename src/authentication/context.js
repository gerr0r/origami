import React from "react"

const AuthContext = React.createContext({
    authenticated: false,
    user: null,
    logIn: () => {},
    logOut: () => {}
})

export default AuthContext