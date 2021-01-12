import React, { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { setTodoToSelected, removeTodoFromSelected, setTodoToConfirm } from "../../../store/actions";

import Modal from "../Modal/Modal";
import HeadingText from "../../atoms/Heading/Heading";

interface ConfirmTodoMyListModalProps {
    todoId: string;
}

const ConfirmTodoMyListModal: FC<ConfirmTodoMyListModalProps> = ({ todoId }) => {
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todos.todoById);
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    const confirmTodoHandler = (e: MouseEvent<HTMLAnchorElement>): void => {
        if (activeTab === "all") {
            dispatch(setTodoToSelected(todoId));
        } else {
            dispatch(removeTodoFromSelected(todoId));
        }
        if (todo) {
            console.log(`Todo "${todo.title}" moved to -- "${activeTab}" list!`);
        }
    };

    const hideModalHandler = (e: MouseEvent<HTMLAnchorElement>): void => {
        dispatch(setTodoToConfirm(""));
    };

    return (
        <div>
            <Modal
                title={`Are you sure you want to add this todo to "${activeTab}" list?`}
                okClick={confirmTodoHandler}
                cancelClick={hideModalHandler}
                okBtnCaption={"Move"}
                cancelBtnCaption={"Cancel"}
                okBtnClass="success"
            >
                <div>
                    <HeadingText title="It will be present in both list" />
                </div>
            </Modal>
        </div>
    );
};

export default ConfirmTodoMyListModal;
