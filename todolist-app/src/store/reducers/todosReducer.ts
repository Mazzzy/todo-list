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
    SET_TODO_TO_CONFIRM,
    SET_SELECTED_TODOS,
    REMOVE_SELECTED_TODOS,
} from "../types";

import { getCollectionFromLS, saveCollectionToLS } from "../../utils/utils";

const initialTodosState: TodosState = {
    data: null,
    loading: false,
    error: "",
    todoIdToDelete: "",
    todoToEdit: null,
    todoById: null,
    todoToConfirm: "",
    selectedTodos: null,
};

export const todosReducer = (state = initialTodosState, action: TodosAction): TodosState => {
    const todosFromLS = getCollectionFromLS("todos");
    const selectedTodosFromLS = getCollectionFromLS("selected-todos");
    switch (action.type) {
        case GET_TODOS:
            console.log("TT ", todosFromLS);
            return {
                // ...state,
                // data: action.payload,
                data: !Object.keys(todosFromLS).length ? action.payload : Object.values(todosFromLS),
                loading: false,
                error: "",
                todoIdToDelete: "",
                todoToEdit: null,
                todoById: null,
                todoToConfirm: "",
                selectedTodos: !Object.keys(selectedTodosFromLS).length ? null : Object.values(selectedTodosFromLS),
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

            // delete selectedTodosFromLS[todoId];
            // saveCollectionToLS("selected-todos", selectedTodosFromLS);
            return {
                ...state,
                data: Object.values(clonedTodosFromLS2),
                todoIdToDelete: "",
                todoById: null,
                selectedTodos: Object.values(selectedTodosFromLS),
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

        case SET_TODO_TO_CONFIRM:
            const todoToConfirm = action.payload;
            return {
                ...state,
                todoToConfirm,
            };

        case SET_SELECTED_TODOS:
            // const selectedTodos = getCollectionFromLS("todos")[action.payload];
            // return {
            //     ...state,
            //     selectedTodos,
            // };

            const clonedSelectedTodosFromLS = { ...selectedTodosFromLS };
            clonedSelectedTodosFromLS[action.payload] = action.payload;
            saveCollectionToLS("selected-todos", clonedSelectedTodosFromLS);

            return {
                ...state,
                todoToConfirm: "",
                selectedTodos: clonedSelectedTodosFromLS,
            };

        case REMOVE_SELECTED_TODOS:
            const clonedSelectedTodosFromLSToRemove = { ...selectedTodosFromLS };
            delete clonedSelectedTodosFromLSToRemove[action.payload];
            saveCollectionToLS("selected-todos", clonedSelectedTodosFromLSToRemove);
            return {
                ...state,
                todoToConfirm: "",
                selectedTodos: clonedSelectedTodosFromLSToRemove,
            };

        default:
            return state;
    }
};
