import React, { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setTodoToEdit, setTodoIdToDelete, setTodoToConfirm } from "../../../store/actions";

import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

import "./TodoItem.css";

interface TodoItemProps {
    item: any;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    let addToListBtnTitle = "Add to my list";
    let addToBtnClassName = "";
    if (activeTab !== "all") {
        addToListBtnTitle = "Remove from my list";
        addToBtnClassName = "danger";
    }

    const setTodoToConfirmHandler = (id: string) => {
        dispatch(setTodoToConfirm(id));
    };

    const setTodoToEditHandler = (id: string) => {
        dispatch(setTodoToEdit(id));
    };

    const setTodoIdToDeleteHandler = (id: string) => {
        dispatch(setTodoIdToDelete(id));
    };

    return (
        <Card>
            <div className="box">
                <div className="box-item">
                    <p>
                        <Label className="box-item-head">{item?.title}</Label>
                    </p>
                    <div>
                        <Button
                            className={`action-btn ${addToBtnClassName}`}
                            title={addToListBtnTitle}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoToConfirmHandler(item?.id);
                            }}
                        />
                        <Button
                            className="action-btn success"
                            title={"Edit"}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoToEditHandler(item?.id);
                            }}
                        />
                        <Button
                            className="action-btn danger"
                            title={"Delete"}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoIdToDeleteHandler(item?.id);
                            }}
                        />
                    </div>
                </div>
                <div className="box-item">
                    <p>
                        Todo ID:
                        <Label>{item?.id}</Label>
                    </p>
                    <p>
                        User ID:
                        <Label>{item?.userId}</Label>
                    </p>
                    <p>
                        Completed:
                        <Label>{item?.completed}</Label>
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default TodoItem;
