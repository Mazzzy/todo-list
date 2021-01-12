import { FilterAction, FILTER_TEXT, FILTER_COMPLETED, FILTER_CLEAR } from "../types";

export const filterText = (text: string): FilterAction => {
    return {
        type: FILTER_TEXT,
        text,
    };
};

export const filterCompleted = (completed: boolean): FilterAction => {
    return {
        type: FILTER_COMPLETED,
        completed,
    };
};

const defaultFilter = {
    text: "",
    completed: false,
};

export const filterClear = (): FilterAction => {
    return {
        type: FILTER_CLEAR,
        defaultFilter,
    };
};
