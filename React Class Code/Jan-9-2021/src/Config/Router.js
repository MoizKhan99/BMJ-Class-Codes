import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from '../screens/About';
import PrivateRoute from '../Component/privateRoute';
import User from '../screens/User'
import ToUser from '../screens/toUser'
const Router =()=>{
    return (
        <BrowserRouter>
        
        <Switch>

            <Route path='/' exact render={()=> <Home /> }/>
            
{/* //ROUTE STEP ONE//             */}
            {/* <Route path='/contact'>
                <Contact />
            </Route>
            <Route path='/about'>
                <About />
            </Route> */}

{/* //ROUTE STEP TWO// */}

            <PrivateRoute path='/about' component={About} />
            <PrivateRoute path='/contact' component={Contact} />
            <Route path='/users/:username' component={User} />
            <Route path='/touser' component={ToUser} />
            <Route>
                <h1>Route Not Found</h1>
            </Route>
        
        </Switch>

        </BrowserRouter>
    )
}

export default Router;