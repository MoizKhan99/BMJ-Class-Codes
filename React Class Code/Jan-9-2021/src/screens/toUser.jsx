import {useHistory} from 'react-router-dom'

function ToUser() {
const history =useHistory()
const toUsersPage=()=>{
    const names = 'arsalan'
    history.push(`/users/${names}`)
}

    return (
      <div >
      <h1>ToUser Page</h1>
      <button onClick={()=>toUsersPage()}>To User</button>
      </div>
    );
  }
  
  export default ToUser;
  