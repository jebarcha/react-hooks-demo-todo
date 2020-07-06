import React from 'react';
import { TodoListItem } from './TodoListItem';
import './styles.css';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    <TodoListItem
                        key={todo.id}
                        i={i}
                        todo={todo}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
