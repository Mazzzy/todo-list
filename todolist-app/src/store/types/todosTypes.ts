export const GET_TODOS = "GET_TODOS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const GET_TODO_BY_ID = "GET_TODO_BY_ID";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_TODOID_TO_DELETE = "SET_TODOID_TO_DELETE";
export const SET_TODO_TO_EDIT = "SET_TODO_TO_EDIT";
export const SET_SELECTED_TODO = "SET_SELECTED_TODO";

export interface Todo {
    id: number;
    title: string;
    creationDate: string;
    completed: boolean;
}
export interface TodosData {
    todos: Todo[];
}

// complete todos data load specific
export interface TodosState {
    data: TodosData | null | Todo[];
    loading: boolean;
    error: string;
    todoIdToDelete: string;
    todoToEdit: Todo | null;
    todoById: Todo | null;
    selectedTodo: Todo | null;
}

// error handling during API call
export interface APIError {
    code: string;
    message: string;
    data: string;
}

// actions specific

interface GetTodosAction {
    type: typeof GET_TODOS;
    payload: TodosData;
}
interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}
interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

interface GetTodoByIdAction {
    type: typeof GET_TODO_BY_ID;
    payload: string;
}

interface SetTodoIdToDeleteAction {
    type: typeof SET_TODOID_TO_DELETE;
    payload: string;
}

interface SetTodoToEditAction {
    type: typeof SET_TODO_TO_EDIT;
    payload: string;
}

interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: string;
}

interface UpdateTodoAction {
    type: typeof UPDATE_TODO;
    payload: {
        id: number;
        title: string;
    };
}

interface SetSelectedTodoAction {
    type: typeof SET_SELECTED_TODO;
    payload: string;
}

export type TodosAction =
    | GetTodosAction
    | SetLoadingAction
    | SetErrorAction
    | AddTodoAction
    | GetTodoByIdAction
    | SetTodoIdToDeleteAction
    | SetTodoToEditAction
    | DeleteTodoAction
    | UpdateTodoAction
    | SetSelectedTodoAction;
