import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ path, component: Component }) => {
    // const Component = component;
    return (
        <Route path={path} render={() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (isLoggedIn) {
                return <Component />
            } else {
                return <Redirect to="/" />
            }
        }}>

        </Route>
    )
}

export default PrivateRoutes;