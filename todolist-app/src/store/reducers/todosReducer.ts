import {
    TodosState,
    GET_TODOS,
    SET_LOADING,
    TodosAction,
    SET_ERROR,
    ADD_TODO,
    GET_TODO_BY_ID,
    SET_TODOID_TO_DELETE,
    SET_TODO_TO_EDIT,
    DELETE_TODO,
    UPDATE_TODO,
    SET_SELECTED_TODO,
} from "../types";

import { getCollectionFromLS, saveCollectionToLS } from "../../utils/utils";

const initialTodosState: TodosState = {
    data: null,
    loading: false,
    error: "",
    todoIdToDelete: "",
    todoToEdit: null,
    todoById: null,
    selectedTodo: null,
};

export const todosReducer = (state = initialTodosState, action: TodosAction): TodosState => {
    const todosFromLS = getCollectionFromLS("todos");
    switch (action.type) {
        case GET_TODOS:
            console.log("TT ", todosFromLS);
            return {
                // ...state,
                //data: action.payload,
                data: !Object.keys(todosFromLS).length ? action.payload : Object.values(todosFromLS),
                loading: false,
                error: "",
                todoIdToDelete: "",
                todoToEdit: null,
                todoById: null,
                selectedTodo: null,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case ADD_TODO:
            const clonedTodosFromLS = { ...todosFromLS };
            clonedTodosFromLS[action.payload.id] = action.payload;
            saveCollectionToLS("todos", clonedTodosFromLS);
            return {
                ...state,
                data: Object.values(clonedTodosFromLS),
            };

        case GET_TODO_BY_ID:
            const todo = todosFromLS[action.payload];
            return {
                ...state,
                todoById: todo,
            };

        case SET_TODOID_TO_DELETE:
            return {
                ...state,
                todoIdToDelete: action.payload,
            };

        case SET_TODO_TO_EDIT:
            const todoToEdit = todosFromLS[action.payload];
            return {
                ...state,
                todoToEdit,
            };

        case DELETE_TODO:
            const clonedTodosFromLS2 = { ...todosFromLS };
            const todoId = clonedTodosFromLS2[action.payload].id;
            delete clonedTodosFromLS2[action.payload];
            saveCollectionToLS("todos", clonedTodosFromLS2);
            return {
                ...state,
                data: Object.values(clonedTodosFromLS2),
                todoIdToDelete: "",
                todoById: null,
                selectedTodo: state.selectedTodo && todoId === state.selectedTodo.id ? null : state.selectedTodo,
            };

        case UPDATE_TODO:
            const clonedTodosFromLS3 = { ...todosFromLS };
            clonedTodosFromLS3[action.payload.id].title = action.payload.title;
            saveCollectionToLS("todos", clonedTodosFromLS3);
            return {
                ...state,
                data: Object.values(clonedTodosFromLS3),
                todoToEdit: null,
            };

        case SET_SELECTED_TODO:
            const selectedTodo = getCollectionFromLS("todos")[action.payload];
            return {
                ...state,
                selectedTodo: selectedTodo,
            };
        default:
            return state;
    }
};
