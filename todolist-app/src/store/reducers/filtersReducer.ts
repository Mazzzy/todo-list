import { FilterState, FILTER_TEXT, FILTER_COMPLETED, FILTER_CLEAR, FilterAction } from "../types";

const initialFilterState: FilterState = {
    text: "",
    completed: false,
};

export const filtersReducer = (state = initialFilterState, action: FilterAction): FilterState => {
    switch (action.type) {
        case FILTER_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case FILTER_COMPLETED:
            return {
                ...state,
                completed: action.completed,
            };
        case FILTER_CLEAR:
            return {
                ...state,
                text: action.defaultFilter.text,
                completed: action.defaultFilter.completed,
            };
        default:
            return state;
    }
};
