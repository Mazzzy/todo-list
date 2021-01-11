import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { todosReducer, tabsReducer } from "./reducers";

const mainReducer = combineReducers({
    todos: todosReducer,
    tabs: tabsReducer,
});

export const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof mainReducer>;
