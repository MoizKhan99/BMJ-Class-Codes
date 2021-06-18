import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { githubReducer } from './reducers/githubReducer';

const reducers = combineReducers({
    counter: counterReducer,
    user: githubReducer
})
export const store = createStore(reducers, applyMiddleware(reduxThunk))

