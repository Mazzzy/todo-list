export const FILTER_TEXT = "FILTER_TEXT";
export const FILTER_COMPLETED = "FILTER_COMPLETED";
export const FILTER_CLEAR = "FILTER_CLEAR";

export interface FilterState {
    text: string;
    completed: boolean;
}
interface FilterTextAction {
    type: typeof FILTER_TEXT;
    text: string;
}
interface FilterCompletedAction {
    type: typeof FILTER_COMPLETED;
    completed: boolean;
}
interface FilterClearAction {
    type: typeof FILTER_CLEAR;
    defaultFilter: FilterState;
}

export type FilterAction = FilterTextAction | FilterCompletedAction | FilterClearAction;
