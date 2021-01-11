import { Todo } from "../store/types";

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
