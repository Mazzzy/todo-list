import React, { FC, FormEvent, useRef } from "react";
import Button from "../../atoms/Button/Button";

import TextField from "../../atoms/TextField/TextField";

interface CreateContentProps {
    createCompState: any;
    setCreateCompState: any;
    submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateContent: FC<CreateContentProps> = ({ createCompState, setCreateCompState, submitHandler }) => {
    const { todoName } = createCompState;

    const nameInputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setCreateCompState((prevState: object) => ({ ...prevState, [name]: value }));
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
                <div className="field">
                    <Button title={"Save"} onClick={submitHandler} />
                </div>
            </form>
        </div>
    );
};

export default CreateContent;
