import {useHistory} from 'react-router-dom'

const Profile = () => {
    const history = useHistory();
const chgTiContact=()=>{
    console.log(history)
    history.push("contact")
}

    return (
        <div>
        <h1>Profile Page</h1>
        <button onClick={chgTiContact}>Contact</button>
        </div>
    )
}

export default Profile;