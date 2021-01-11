export const SET_TAB_ACTIVE = "SET_TAB_ACTIVE";
export interface TabsState {
    activeName: string;
}
interface TabActiveAction {
    type: typeof SET_TAB_ACTIVE;
    activeName: string;
}

export type TabsAction = TabActiveAction;
