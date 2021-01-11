import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { Todo } from "../../../store/types";
import { addTodo } from "../../../store/actions";

import Card from "../../atoms/Card/Card";
import CreateContent from "./CreateContent";

const Create: FC = () => {
    const dispatch = useDispatch();
    const createCompInitialState = {
        todoName: "",
    };

    const [createCompState, setCreateCompState] = useState(createCompInitialState);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { todoName } = createCompState;
        if (todoName.trim() === "") {
            return alert("Todo name is required!");
        }

        const newTodo: Todo = {
            id: new Date().getTime(),
            title: todoName,
            creationDate: `${new Date().getTime()}`,
            completed: false,
        };

        dispatch(addTodo(newTodo));
        setCreateCompState(createCompInitialState);
    };

    return (
        <Card title="Create Todo Items">
            <CreateContent
                createCompState={createCompState}
                setCreateCompState={setCreateCompState}
                submitHandler={submitHandler}
            />
        </Card>
    );
};

export default Create;
