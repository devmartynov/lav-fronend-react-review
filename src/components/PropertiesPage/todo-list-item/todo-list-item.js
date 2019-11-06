import './todo-list-item.css';
import React from 'react';

const TodoListItem = (props) => {
    return (
        <div className="title">
            <label className="title">{props.label}</label>
            <input type="text"
                className="textField" />
            <button className="edit" >Edit</button>
            <button className="delete" 
                    onClick={props.onDelete}>Delete</button>
        </div>
    )
}

export default TodoListItem;