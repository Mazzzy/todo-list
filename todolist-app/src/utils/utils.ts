import { Todo, FilterState } from "../store/types";

// local storage related
export const getCollectionFromLS = (lsKeyName: string): any => {
    if (localStorage.getItem(lsKeyName)) {
        return JSON.parse(localStorage.getItem(lsKeyName) || "{}");
    }

    return {};
};

export const saveCollectionToLS = (lsKeyName: string, todos: any) => {
    localStorage.setItem(lsKeyName, JSON.stringify(todos));
};

// helper methods
export const hoursFormat = (date: Date): string => {
    let hours: any = date.getHours();
    let minutes: any = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes;
};

// filter out matched criterias
export const getFilteredTodos = (todos: Todo[], filters: FilterState, activeTab: string) => {
    const { text, completed } = filters;
    const selectedTodosFromLS = getCollectionFromLS("selected-todos");
    return todos.filter((todoItem) => {
        const textTodosMatch: boolean = text ? todoItem.title.toLowerCase().includes(text.toLowerCase()) : true;
        const completedTodosMatch: boolean = completed ? todoItem.completed : true;
        const myTodosMatch: boolean =
            activeTab === "mylist" ? Object.keys(selectedTodosFromLS).includes(String(todoItem.id)) : true;

        return myTodosMatch && textTodosMatch && completedTodosMatch;
    });
};
