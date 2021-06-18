import { useParams, useLocation } from 'react-router-dom'

const User = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h1>User Details</h1>
            <h2>User Id: {params.userId}</h2>
        </div>
    )
}

export default User;