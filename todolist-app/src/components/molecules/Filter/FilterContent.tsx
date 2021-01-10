import React, { FC, FormEvent, MouseEvent } from "react";

import TextField from "../../atoms/TextField/TextField";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Badge from "../../atoms/Badge/Badge";
import Button from "../../atoms/Button/Button";

interface FilterContentProps {
    filterCompState: any;
    setFilterCompState: any;
    filterTextChange: (txtVal: string) => void;
    filterOnlyActiveOnes: (checkVal: boolean) => void;
    clickClearHandler?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const FilterContent: FC<FilterContentProps> = ({
    filterCompState,
    setFilterCompState,
    filterTextChange,
    filterOnlyActiveOnes,
    clickClearHandler,
}) => {
    const { todoName, activeTodo } = filterCompState;

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: value }));
        // trigger to update store
        filterTextChange(value);
    };

    const onlyActiveChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, checked } = e.currentTarget;
        setFilterCompState((prevState: object) => ({ ...prevState, [name]: checked }));
        // trigger to update store
        filterOnlyActiveOnes(checked);
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
                <div className="field active-check-container">
                    <label className="checkbox">
                        <Checkbox name="activeTodo" checked={activeTodo} onChange={onlyActiveChangeHandler} /> Only{" "}
                        <Badge title="Active" />
                    </label>
                </div>
                <Button title="Clear All" onClick={clickClearHandler} />
            </form>
        </div>
    );
};

export default FilterContent;
