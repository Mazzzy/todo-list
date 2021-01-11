import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getTodos, setLoading } from "../../store/actions";

import EditTodoModal from "../molecules/TodoList/EditTodoModal";
import DeleteTodoModal from "../molecules/TodoList/DeleteTodoModal";

import TodoList from "../molecules/TodoList/TodoList";
import Heading from "../atoms/Heading/Heading";

const MainContent: FC = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state: RootState) => state.todos?.loading);
    const todosData = useSelector((state: RootState) => state.todos?.data);
    const error = useSelector((state: RootState) => state.todos?.error);
    const todoToEdit = useSelector((state: RootState) => state.todos?.todoToEdit);
    const todoIdToDelete = useSelector((state: RootState) => state.todos?.todoIdToDelete);

    useEffect(() => {
        dispatch(setLoading());
        dispatch(getTodos());
        //dispatch(getTodos([{ id: 1, name: "One", creationDate: "June 2020", completed: false }]));
    }, [dispatch]);

    return (
        <div className="main-contents">
            {loading ? <Heading title="Loading todos..." /> : todosData && <TodoList todosData={todosData} />}
            {error && <Heading title={error} />}
            {todoToEdit && <EditTodoModal todo={todoToEdit} />}
            {todoIdToDelete && <DeleteTodoModal todoId={todoIdToDelete} />}
        </div>
    );
};

export default MainContent;
