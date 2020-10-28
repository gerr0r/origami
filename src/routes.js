import React , { useContext } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PublicationsPage from "./pages/publications"
import PostPage from "./pages/post"
import LoginPage from "./pages/login"
import RegisterPage from "./pages/register"
import ProfilePage from "./pages/profile"
import ErrorPage from "./pages/error"
import AuthContext from "./authentication/context"

const Routes = () => {
    const context = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PublicationsPage} />
                <Route path="/post" component={context.authenticated ? PostPage : ErrorPage} />
                <Route path="/register" component={context.authenticated ? ErrorPage : RegisterPage} />
                <Route path="/login" component={context.authenticated ? ErrorPage : LoginPage} />
                <Route path="/profile/:uid" component={context.authenticated ? ProfilePage : ErrorPage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes