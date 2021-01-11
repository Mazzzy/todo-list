import { TabsAction, SET_TAB_ACTIVE } from "../types";

export const setTabActive = (activeName: string): TabsAction => {
    return {
        type: SET_TAB_ACTIVE,
        activeName,
    };
};
