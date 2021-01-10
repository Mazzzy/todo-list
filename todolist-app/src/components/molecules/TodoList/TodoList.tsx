import React, { FC } from "react";

import TodoItem from "./TodoItem";

interface TodoListProps {
    data: any;
}

const TodoList: FC<TodoListProps> = ({ data }) => {
    const { todos } = data;
    const todosCollection = todos.map((todoItem: any, index: number) => [
        <TodoItem key={todoItem?.id} item={todoItem} />,
    ]);

    return <section>{todosCollection.length === 0 ? "No todos available" : todosCollection}</section>;
};

export default TodoList;
