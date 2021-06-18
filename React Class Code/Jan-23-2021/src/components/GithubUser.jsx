import { useState } from "react";
import { connect } from "react-redux";
import { getUser } from "../store/actionType";
const GithubUser = (props) => {
    const [user, setUser] = useState("")
    const onInputChange = (event) => {
        setUser(event.target.value)
    }

    const getUserDetails = () => {
        props.getGithubUser(user)
    }

    const getContent = () => {
        if(props.loading) {
            return <h3>Loading ...</h3>;
        } else if(props.user) {
            return <h3>User: {props.user.id}</h3>;
        } else {
            return <h3>Get Some User Details</h3>
        }
    }
    return (
        <div>
            <input type="text" onChange={onInputChange} />
            <button onClick={getUserDetails}>Get User</button>

            {getContent()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        loading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getGithubUser: (userId) => { dispatch(getUser(userId)) }
    }
}

const myConnect = connect(mapStateToProps, mapDispatchToProps)

export default myConnect(GithubUser);