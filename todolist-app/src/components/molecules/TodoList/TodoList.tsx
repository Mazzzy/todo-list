import React, { FC, useState, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

import { Todo } from "../../../store/types";
import { getFilteredTodos } from "../../../utils/utils";

import TodoItem from "./TodoItem";

import "./TodoList.css";
interface TodoListProps {
    todosData: any;
}

const TodoList: FC<TodoListProps> = ({ todosData }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const filtersData = useSelector((state: RootState) => state.filters);
    const activeTab = useSelector((state: RootState) => state.tabs?.activeName);

    const filteredTodos = getFilteredTodos(todosData, filtersData, activeTab);
    const todosPerPage = 5;

    // for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

    // for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredTodos.length / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    // render pagination
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

    // render todo list
    const todosCollection = currentTodos.map((todoItem: Todo) => [<TodoItem key={todoItem?.id} item={todoItem} />]);

    return (
        <section>
            {todosCollection.length === 0 ? "No todos available" : todosCollection}
            {todosCollection.length === 0 ? "" : <ul className="page-numbers">{renderPageNumbers}</ul>}
        </section>
    );
};

export default TodoList;
