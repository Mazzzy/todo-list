import React, { FC, useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { filterText, filterCompleted, filterClear } from "../../../store/actions";

import Card from "../../atoms/Card/Card";
import FilterContent from "./FilterContent";

import "./Filters.css";

const Filters: FC = () => {
    const dispatch = useDispatch();

    const filterCompInitialState = {
        todoName: "",
        completedTodo: false,
    };

    const [filterCompState, setFilterCompState] = useState(filterCompInitialState);

    const filterTextChange = (txtVal: string) => {
        dispatch(filterText(txtVal));
    };

    const filterOnlyCompletedOnes = (checkVal: boolean) => {
        dispatch(filterCompleted(checkVal));
    };

    const clickClearHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setFilterCompState({ ...filterCompInitialState });
        // trigger to update store
        dispatch(filterClear());
    };

    return (
        <Card title="Filter by">
            <FilterContent
                filterCompState={filterCompState}
                setFilterCompState={setFilterCompState}
                filterTextChange={filterTextChange}
                filterOnlyCompletedOnes={filterOnlyCompletedOnes}
                clickClearHandler={clickClearHandler}
            />
        </Card>
    );
};

export default Filters;
