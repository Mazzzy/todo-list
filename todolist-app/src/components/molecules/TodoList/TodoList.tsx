import React, { FC, useState, MouseEvent } from "react";
import { Todo } from "../../../store/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todosData: any;
}

const TodoList: FC<TodoListProps> = ({ todosData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 10;

    // for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todosData.slice(indexOfFirstTodo, indexOfLastTodo);

    // for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todosData.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((pgNumber) => {
        return (
            <li
                key={pgNumber}
                onClick={(e: MouseEvent<HTMLElement>) => {
                    setCurrentPage(pgNumber);
                }}
                className={currentPage === pgNumber ? "active-page" : ""}
            >
                {pgNumber}
            </li>
        );
    });

    const todosCollection = currentTodos.map((todoItem: Todo) => [<TodoItem key={todoItem?.id} item={todoItem} />]);

    return (
        <section>
            {todosCollection.length === 0 ? "No todos available" : todosCollection}
            {todosCollection.length === 0 ? "" : <ul className="page-numbers">{renderPageNumbers}</ul>}
        </section>
    );
};

export default TodoList;
