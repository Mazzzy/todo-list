import { createStore, combineReducers } from "redux";
import { todosReducer } from "./reducers";

const reducers = combineReducers({
    todos: todosReducer,
});

export const store = createStore(reducers);
