import React, { FC } from "react";
import TodoList from "../molecules/TodoList/TodoList";

const MainContent: FC = () => {
    const todosData = { todos: [{ id: 1, name: "One" }] };

    return (
        <div className="main-contents">
            <TodoList data={todosData} />
        </div>
    );
};

export default MainContent;
