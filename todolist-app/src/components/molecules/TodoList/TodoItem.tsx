import React, { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { setTodoToEdit, setTodoIdToDelete, setTodoToConfirm } from "../../../store/actions";
import { hoursFormat } from "../../../utils/utils";

import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";
import Badge from "../../atoms/Badge/Badge";

import "./TodoItem.css";

interface TodoItemProps {
    item: any;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);
    const { id, title, userId, creationDate } = item;

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
                        {item?.completed ? <Badge title="Completed" /> : " "}
                        <Label className="box-item-head">{title}</Label>
                    </p>
                    <div className="action-btn-container">
                        <Button
                            className={`action-btn ${addToBtnClassName}`}
                            title={addToListBtnTitle}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoToConfirmHandler(id);
                            }}
                        />
                        <Button
                            className="action-btn success"
                            title={"Edit"}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoToEditHandler(id);
                            }}
                        />
                        <Button
                            className="action-btn danger"
                            title={"Delete"}
                            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                                setTodoIdToDeleteHandler(id);
                            }}
                        />
                    </div>
                </div>
                <div className="box-item">
                    <p>
                        Id:
                        <Label>{id}</Label>
                    </p>
                    <p>
                        User ID:
                        <Label>{userId}</Label>
                    </p>
                    <p>
                        Creation Time:
                        <Label>{creationDate ? hoursFormat(new Date(Number(creationDate))) : ""} </Label>
                        {/* <Label>{new Date(item?.creationDate) || ""}</Label> */}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default TodoItem;
