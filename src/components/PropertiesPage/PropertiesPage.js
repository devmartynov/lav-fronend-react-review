import React from 'react';
import './PropertiesPage.css';

const PropertiesPage = () => {
    return (
        <div>
            <h1 className="input-form__title input-form__title-profile_big">Properties</h1>
            <div id="todo-form" className="header">
                <input id="add-input" type="text" />
                <button id="add-button" type="submit">Add</button>
            </div>
            <ul id="todo-list">
            </ul>
        </div>
    )
}

export default PropertiesPage;