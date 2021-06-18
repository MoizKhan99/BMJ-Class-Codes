export const COUNTER_ADD = "COUNTER/ADD";
export const COUNTER_MINUS = "COUNTER/MINUS";


export const TODO_ADD = "TODO/ADD"
export const USER_PROFILE = "USER/GET";
export const LOADING_USER = "USER/LOADING";


export const onIncrement = (count = 1) => {
    return {
        type: COUNTER_ADD,
        count: count
    }
}

export const getUser = (userId) => {
    return function (dispatch) {
        dispatch({
            type: LOADING_USER
        })
        fetch(`https://api.github.com/users/${userId}`)
            .then((res) => res.json())
            .then(res => {
                dispatch({
                    type: USER_PROFILE,
                    user: res
                })

                dispatch({
                    type: LOADING_USER
                })
            })
    }
}