import React from 'react';

class GithubUser extends React.Component {

    constructor() {
        super();

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const url = 'https://api.github.com/users/MohammadArsalan'
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    user: res
                })
            })
            .catch((error) => console.log(error))


    }
    componentDidUpdate() { }
    componentWillUnmount() { }
    render() {
        console.log(this.state.user)
        return (
            <div>
                <h1>Image Gallery</h1>
                {this.state.user ? <h2>Login Name: { this.state.user.login}</h2>: <div />}
            </div>
        )
    }
}

export default GithubUser;