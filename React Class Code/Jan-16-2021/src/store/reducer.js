import { COUNTER_MINUS, COUNTER_ADD, USER_PROFILE, LOADING_USER } from "./actionType";
const initialState = {
    todos: [],
    count: 0,
    user: null,
    loading: false,
    users: [],
    posts: [],
    checkouts: []
}

export function todoReducer(state = initialState, action) {
    const newState = { ...state }

    switch (action.type) {
        case COUNTER_ADD:
            newState.count += action.count;
            return newState;
        case COUNTER_MINUS:
            newState.count -= 1;
            return newState;
        case USER_PROFILE:
            newState.user = action.user
            return newState;
        case LOADING_USER:
            newState.loading = !newState.loading;
            return newState;
    }

    return newState;
}
