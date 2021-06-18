
export const users = [
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

export const getUserById = (id) => {
    console.log("user -----------")
    // for (let i = 0; i < users.length; i++) {
    //     if(users[i].id === id) {
    //         return users[i];
    //     }
    // }

    const user = users.find((usr) => usr.id === id)
    return user;
}