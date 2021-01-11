import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { getTodoById, deleteTodo, setTodoIdToDelete } from "../../../store/actions";

import Modal from "../Modal/Modal";
import HeadingText from "../../atoms/Heading/Heading";

interface DeleteTodoModalProps {
    todoId: string;
}

const DeleteTodoModal: FC<DeleteTodoModalProps> = ({ todoId }) => {
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todos.todoById);

    useEffect(() => {
        dispatch(getTodoById(todoId));
    }, [dispatch, todoId]);

    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todoId));
        if (todo) {
            console.log(`Todo "${todo.title}" deleted!`);
        }
    };

    const hideModalHandler = () => {
        dispatch(setTodoIdToDelete(""));
    };

    return (
        <div>
            <Modal
                title="Are you sure you want to delete this todo ?"
                okClick={deleteTodoHandler}
                cancelClick={hideModalHandler}
                okBtnCaption={"Delete"}
                cancelBtnCaption={"Cancel"}
                okBtnClass="danger"
            >
                <div>
                    <HeadingText title="All info will be deleted" />
                </div>
            </Modal>
        </div>
    );
};

export default DeleteTodoModal;
