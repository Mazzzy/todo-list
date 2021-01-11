import React, { FC, useState, MouseEvent } from "react";
import Card from "../../atoms/Card/Card";
import FilterContent from "./FilterContent";

const Filters: FC = () => {
    const filterCompInitialState = {
        todoName: "",
        completedTodo: false,
    };

    const [filterCompState, setFilterCompState] = useState(filterCompInitialState);

    const filterTextChange = (txtVal: string) => {
        // setFilterCompState({ ...completedTodo, {todoName: txtVal} });
    };

    const filterOnlyCompletedOnes = (checkVal: boolean) => {
        // setFilterCompState(checkVal);
    };

    const clickClearHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setFilterCompState({ ...filterCompInitialState });
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
