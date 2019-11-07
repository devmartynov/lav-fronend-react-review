import './todo-list-item.css';
import React from 'react';

const TodoListItem = (props) => {
    return (
        <React.Fragment>
            <label className="title">{props.label}</label>
            <input type="text"
                className="textField" />
            <button className="edit" >Edit</button>
            <button className="delete" 
                    onClick={props.onDelete}>Delete</button>
        </React.Fragment>
    )
}

export default TodoListItem;