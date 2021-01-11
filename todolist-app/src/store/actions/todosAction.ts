import { ThunkAction } from "redux-thunk";
import {
    GET_TODOS,
    TodosAction,
    Todo,
    SET_LOADING,
    SET_ERROR,
    TodosData,
    APIError,
    ADD_TODO,
    GET_TODO_BY_ID,
    SET_TODOID_TO_DELETE,
    SET_TODO_TO_EDIT,
    SET_SELECTED_TODO,
    DELETE_TODO,
    UPDATE_TODO,
} from "../types";
import { RootState } from "../store";
import API from "../../config/API";

export const getTodos = (): ThunkAction<void, RootState, null, TodosAction> => {
    return async (dispatch) => {
        try {
            const res = await API.getTodos();

            if (!res.ok) {
                const resData: APIError = await res.json();
                throw new Error(resData.data);
            }

            const resData: TodosData = await res.json();
            dispatch({
                type: GET_TODOS,
                payload: resData,
            });
        } catch (err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message,
            });
        }
    };
};

export const setLoading = (): TodosAction => {
    return {
        type: SET_LOADING,
    };
};

export const setError = (): TodosAction => {
    return {
        type: SET_ERROR,
        payload: "",
    };
};

export const addTodo = (todo: Todo): TodosAction => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export const getTodoById = (id: string): TodosAction => {
    return {
        type: GET_TODO_BY_ID,
        payload: id,
    };
};

export const setTodoIdToDelete = (id: string): TodosAction => {
    return {
        type: SET_TODOID_TO_DELETE,
        payload: id,
    };
};

export const setTodoToEdit = (id: string): TodosAction => {
    return {
        type: SET_TODO_TO_EDIT,
        payload: id,
    };
};

export const setSelectedTodo = (id: string): TodosAction => {
    return {
        type: SET_SELECTED_TODO,
        payload: id,
    };
};

export const deleteTodo = (id: string): TodosAction => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

export const updateTodo = (id: number, title: string): TodosAction => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            title,
        },
    };
};
