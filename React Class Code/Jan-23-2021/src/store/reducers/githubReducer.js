import { USER_PROFILE, LOADING_USER } from "../actionType";

const initialState = {
    user: null,
    loading: false,
}

export const githubReducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case USER_PROFILE:
            newState.user = action.user
            return newState;
        case LOADING_USER:
            newState.loading = !newState.loading;
            return newState;
    }

    return newState;
}