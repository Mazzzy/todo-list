import { TabsState, SET_TAB_ACTIVE, TabsAction } from "../types";

const initialTabsState: TabsState = {
    activeName: "all",
};

export const tabsReducer = (state = initialTabsState, action: TabsAction): TabsState => {
    switch (action.type) {
        case SET_TAB_ACTIVE:
            return {
                ...state,
                activeName: action.activeName,
            };
        default:
            return state;
    }
};
