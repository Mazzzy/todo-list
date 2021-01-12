import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { todosReducer, tabsReducer, filtersReducer } from "./reducers";

const mainReducer = combineReducers({
    todos: todosReducer,
    tabs: tabsReducer,
    filters: filtersReducer,
});

export const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof mainReducer>;
