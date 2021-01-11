import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Todo } from "../../../store/types";
import { setTodoToEdit, updateTodo } from "../../../store/actions";

import Modal from "../Modal/Modal";
import Label from "../../atoms/Label/Label";
import TextField from "../../atoms/TextField/TextField";

interface EditTodoModalProps {
    todo: Todo;
}

const EditTodoModal: FC<EditTodoModalProps> = ({ todo }) => {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState(todo.title);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (todoName.trim() === "") {
            return alert("Todo name is required!");
        }

        if (todoName.trim() === todo.title) {
            return alert("Todo name is the same as before!");
        }

        dispatch(updateTodo(todo.id, todoName.trim()));
    };

    const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        setTodoName(e.currentTarget.value);
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
                    <Label>Todo item title</Label>
                    <TextField name="todoName" placeholder="Todo Name" value={todoName} onChange={inputChangeHandler} />
                </form>
            </Modal>
        </div>
    );
};

export default EditTodoModal;
