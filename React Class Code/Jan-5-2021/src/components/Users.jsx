import { Link, useHistory } from 'react-router-dom';
import { users } from "../data/user";

const Users = () => {
    const history = useHistory();

    const showUserDetails = (user) => {
        console.log(user)
        const options = {
            pathname: `/user/${user.id}`,
            state: user
        }
        history.push(options)
        // history.push(`/user/${user.id}`, user)
    }

    return (
        <div>
            <h1>Users Page</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Show Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <tr key={user.id} onClick={() => showUserDetails(user)}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><Link to={`/user/${user.id}`}>View</Link></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Users;