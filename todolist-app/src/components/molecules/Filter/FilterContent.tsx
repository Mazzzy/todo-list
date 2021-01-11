import React, { FC, FormEvent, MouseEvent } from "react";

import TextField from "../../atoms/TextField/TextField";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";

interface FilterContentProps {
    filterCompState: any;
    setFilterCompState: any;
    filterTextChange: (txtVal: string) => void;
    filterOnlyCompletedOnes: (checkVal: boolean) => void;
    clickClearHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const FilterContent: FC<FilterContentProps> = ({
    filterCompState,
    setFilterCompState,
    filterTextChange,
    filterOnlyCompletedOnes,
    clickClearHandler,
}) => {
    const { todoName, completedTodo } = filterCompState;

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: value }));
        // trigger to update store
        filterTextChange(value);
    };

    const onlyCompletedChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: checked }));
        // trigger to update store
        filterOnlyCompletedOnes(checked);
    };

    return (
        <div>
            <form>
                <div className="field">
                    <TextField
                        name="todoName"
                        placeholder="Todo Item Name to filter"
                        value={todoName}
                        onChange={nameInputChangeHandler}
                    />
                </div>
                <div className="field completed-check-container">
                    <label className="checkbox">
                        <Checkbox name="completedTodo" checked={completedTodo} onChange={onlyCompletedChangeHandler} />{" "}
                        Only <Badge title="Completed" />
                    </label>
                </div>
                <Button title="Clear All" onClick={clickClearHandler} />
            </form>
        </div>
    );
};

export default FilterContent;
