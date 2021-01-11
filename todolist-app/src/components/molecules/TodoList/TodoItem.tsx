import React, { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { setTodoToEdit, setTodoIdToDelete } from "../../../store/actions";

import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

import "./TodoItem.css";

interface TodoItemProps {
    item: any;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
    const dispatch = useDispatch();
    const setListToEditHandler = (id: string) => {
        dispatch(setTodoToEdit(id));
    };

    const setListIdToDeleteHandler = (id: string) => {
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
                            className="action-btn"
                            title={"Select it"}
                            onClick={(e: FormEvent<HTMLAnchorElement>) => {
                                console.log("clicked to select");
                            }}
                        />
                        <Button
                            className="action-btn"
                            title={"Edit"}
                            onClick={(e: FormEvent<HTMLAnchorElement>) => {
                                setListToEditHandler(item?.id);
                            }}
                        />
                        <Button
                            className="action-btn"
                            title={"Delete"}
                            onClick={(e: FormEvent<HTMLAnchorElement>) => {
                                setListIdToDeleteHandler(item?.id);
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
