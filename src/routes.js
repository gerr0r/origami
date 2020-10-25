import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PublicationsPage from "./pages/publications"
import PostPage from "./pages/post"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ProfilePage from "./pages/profile"
import ErrorPage from "./pages/error"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PublicationsPage} />
                <Route path="/post" component={PostPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:uid" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes