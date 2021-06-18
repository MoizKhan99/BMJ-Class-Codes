import {useHistory}  from 'react-router-dom'

const Contact = () => {
    const history =useHistory()

    const changeToProfile=()=>{
        console.log(history)
        history.push("profile")
    }

    return (
        <div>
        <h1>Contact Page</h1>
        <button onClick={changeToProfile}>Profile Page</button>
        </div>
    )
}

export default Contact;