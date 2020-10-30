import React, { useEffect, useState } from "react"
import AuthContext from "./context"

const Auth = (props) => {
    const [user, setUser] = useState(null)
    const [authenticated, setAuth] = useState(null)

    const logIn = user => {
        setUser(user)
        setAuth(true)
    }

    const logOut = () => {
        setUser(null)
        setAuth(false)
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure"
    }

    const getCookie = (cookie) => {
        const cookies = {}
        const cookiesString = document.cookie.split("; ")
        cookiesString.forEach(c => {
            let [name, value] = c.split("=")
            cookies[name] = value
        })
        return cookies[cookie]
    }

    useEffect(() => {
        const token = getCookie("x-auth-token")

        if (!token) {
            logOut()
            return
        }

        fetch("http://localhost:9999/api/user/verify", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }).then(res => {
            // console.log(res)
            if (!res.ok) {
                logOut()
                return
            }
            return res.json()
        }).then(data => {
            // console.log(data)
            if (data.status) {
                logIn({
                    user: data.user.username,
                    id: data.user._id
                })
            } else {
                logOut()
            }
        })
    }, [])

    if (authenticated === null) {
        return <div>Please wait...</div>
    }

    return (
        <AuthContext.Provider value={{
            authenticated,
            user,
            logIn,
            logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Auth