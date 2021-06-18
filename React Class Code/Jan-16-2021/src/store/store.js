import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { todoReducer } from "./reducer";

export const store = createStore(todoReducer, applyMiddleware(reduxThunk))

