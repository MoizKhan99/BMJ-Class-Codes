import { createStore } from "redux";

function todoReducer(state, action) {
    if (action.type === "ADD") {
        return state + 1
    }

    return state;
}

export const store = createStore(todoReducer, {
    todos: [],
    count: 0
})

