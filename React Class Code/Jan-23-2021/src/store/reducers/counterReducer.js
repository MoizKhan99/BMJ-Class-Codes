import { COUNTER_MINUS, COUNTER_ADD } from "../actionType";
const initialState = {
    count: 0,
}
// todos: [],
// user: null,
// loading: false,
// users: [],
// posts: [],
// checkouts: []
export function counterReducer(state = initialState, action) {
    const newState = { ...state }

    switch (action.type) {
        case COUNTER_ADD:
            newState.count += action.count;
            return newState;
        case COUNTER_MINUS:
            newState.count -= 1;
            return newState;
        // case USER_PROFILE:
        //     newState.user = action.user
        //     return newState;
        // case LOADING_USER:
        //     newState.loading = !newState.loading;
        //     return newState;
    }

    return newState;
}
