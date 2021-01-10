import React, { FC, FormEvent } from "react";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

import "./TodoItem.css";

interface TodoItemProps {
    item: any;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
    return (
        <Card>
            <div className="box">
                <div className="box-item">
                    <p>
                        <Label className="box-item-head">{item?.name}</Label>
                    </p>
                    <Button
                        title={"Select it"}
                        onClick={(e: FormEvent<HTMLAnchorElement>) => {
                            console.log("clicked to select");
                        }}
                    />
                </div>
                <div className="box-item">
                    <p> Other details</p>
                </div>
            </div>
        </Card>
    );
};

export default TodoItem;
