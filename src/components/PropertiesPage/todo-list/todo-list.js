import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = (props) => {

    const elements = props.items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="todo-item">
                <TodoListItem {...itemProps} 
                              onDelete={ () => props.onDelete(id)} />
            </li>
        )
    });

    return (<ul className="todo-list">{elements}</ul>)
}

export default TodoList;