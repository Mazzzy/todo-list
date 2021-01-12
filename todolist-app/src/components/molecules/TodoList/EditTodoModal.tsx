import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Todo } from "../../../store/types";
import { setTodoToEdit, updateTodo } from "../../../store/actions";

import Modal from "../Modal/Modal";
import Label from "../../atoms/Label/Label";
import TextField from "../../atoms/TextField/TextField";
import Checkbox from "../../atoms/Checkbox/Checkbox";

interface EditTodoModalProps {
    todo: Todo;
}

const EditTodoModal: FC<EditTodoModalProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState(todo.title);
    const [todoCompleteState, setTodoCompleteState] = useState(todo.completed);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (todoTitle.trim() === "") {
            return alert("Todo name is required!");
        }

        if (todoTitle.trim() === todo.title) {
            return alert("Todo name is the same as before!");
        }

        dispatch(updateTodo(todo.id, todoTitle.trim(), todoCompleteState));
    };

    const inputTitleChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTodoTitle(e.currentTarget.value);
    };

    const checkCompleteChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTodoCompleteState(e.currentTarget.checked);
    };

    const hideModalHandler = () => {
        dispatch(setTodoToEdit(""));
    };

    return (
        <div>
            <Modal
                title="Edit todo item"
                okClick={submitHandler}
                cancelClick={hideModalHandler}
                okBtnCaption={"Save changes"}
                cancelBtnCaption={"Cancel"}
                okBtnClass="success"
            >
                <form>
                    {/* <Label>Title</Label>
                    <TextField name="todoTitle" placeholder="Todo Name" value={todoName} onChange={inputTitleChangeHandler} /> */}
                    <div className="field">
                        <Label>Title: </Label>
                        <TextField
                            name="todoTitle"
                            placeholder="Todo title"
                            value={todoTitle}
                            onChange={inputTitleChangeHandler}
                        />
                    </div>
                    <div className="field">
                        <Label>Complete it? </Label>
                        <Checkbox
                            name="completedTodo"
                            checked={todoCompleteState}
                            onChange={checkCompleteChangeHandler}
                        />{" "}
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default EditTodoModal;
