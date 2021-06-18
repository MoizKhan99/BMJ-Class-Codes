import {useParams} from 'react-router-dom'

function Users() {
    const param =useParams()
    return (
      <div >
      <h1>Users Page</h1>
      <h2>{param.username}</h2>
      </div>
    );
  }
  
  export default Users;
  