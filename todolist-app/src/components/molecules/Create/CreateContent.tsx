import React, { FC, FormEvent } from "react";

import TextField from "../../atoms/TextField/TextField";

interface CreateContentProps {
    createCompState: any;
    setCreateCompState: any;
    createTextChange: (txtVal: string) => void;
}

const CreateContent: FC<CreateContentProps> = ({ createCompState, setCreateCompState, createTextChange }) => {
    const { todoName } = createCompState;

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setCreateCompState((prevState: object) => ({ ...prevState, [name]: value }));
        // trigger to update store
        createTextChange(value);
    };

    return (
        <div>
            <form>
                <div className="field">
                    <TextField
                        name="todoName"
                        placeholder="Todo Name"
                        value={todoName}
                        onChange={nameInputChangeHandler}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateContent;
