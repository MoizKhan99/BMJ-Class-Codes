import Home from './components/Home';
import About from './components/About';
import Contact from './components/ContactUs';
import Profile from './components/Profile';
import Users from './components/Users';
import User from './components/User';
import Login from './components/Login'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                {/* <h1>My App</h1>
                <h2>Html Link</h2>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
                <h2>Router Link</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul> */}
                <Switch>

                    <Route path="/" exact render={() => <Login />}/>
                    {/* <Route path="/" exact>
                        <Login />
                    </Route> */}
                    <Route path="/home" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <PrivateRoutes path="/profile" component={Profile} />
                    <PrivateRoutes path="/users" component={Users} />
                    <PrivateRoutes path="/user/:userId" component={User} />
                    {/* <Route path="/profile" render={() => {
                        const isLoggedIn = localStorage.getItem("isLoggedIn");
                        if(isLoggedIn) {
                            return <Profile />
                        } else {
                            return <h1>Please Login</h1>
                        }
                    }}/> */}
                    {/* <Route path="/users" render={() => {
                        const isLoggedIn = localStorage.getItem("isLoggedIn");
                        if(isLoggedIn) {
                            return <Users />
                        } else {
                            return <h1>Please Login</h1>
                        }
                    }} /> */}
                    {/* <Route path="/user/:userId" render={() => {
                        const isLoggedIn = localStorage.getItem("isLoggedIn");
                        if(isLoggedIn) {
                            return <User />
                        } else {
                            return <h1>Please Login</h1>
                        }
                    }} /> */}
                    <Route>
                        <h1>Not Found</h1>
                    </Route>
                </Switch>


            </div>
        </BrowserRouter>

    )
}

export default App;