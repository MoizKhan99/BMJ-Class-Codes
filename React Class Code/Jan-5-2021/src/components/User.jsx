import { useParams, useLocation, useHistory } from 'react-router-dom'
import { getUserById } from "../data/user";
const User = (props) => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory()
    console.log("history",history)
    const state = history.location.state;
    const user = state || getUserById(params.userId)
    if (!user) { // null, undefined, 0 , "", false
        return (
            <div>
                <h1>User Not Found!</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Id: {user.id}</h2>
        </div>
    )
}

export default User;