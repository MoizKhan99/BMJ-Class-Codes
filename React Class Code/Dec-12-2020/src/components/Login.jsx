import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const onLogin = () => {
        localStorage.setItem("isLoggedIn", "true")
        history.push('/home')
    }
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default Login