import { Link, useHistory } from 'react-router-dom';

const users = [
    {
        id: 'user1',
        name: 'User 1',
        email: 'user1@gmail.com'
    },
    {
        id: 'user2',
        name: 'User 2',
        email: 'user2@gmail.com'
    },
    {
        id: 'user3',
        name: 'User 3',
        email: 'user3@gmail.com'
    }
]

const Users = () => {
    const history = useHistory();

    const showUserDetails = (user) => {
        console.log(user)
        history.push(`/user/${user.id}`, user)
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