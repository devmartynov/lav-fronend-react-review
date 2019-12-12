import React from 'react';

import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import './TodoPage.scss';

export default class TodoPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.genId = 50;

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            items: [
                {id: 1, label: 'Turgeneva 212'},
                {id: 2, label: 'Merkela 55'},
                {id: 3, label: 'Lacplesa 42'},
            ],
        };
    }

    render() {
        return (
            <div className='TodoPage'>
                <h1 className="TodoPage__title input-form__title-profile_big">To Do List </h1>
                <TodoForm addItem={this.addItem}/>
                <TodoList
                    items={this.state.items}
                    onDelete={this.deleteItem}
                />
            </div>
        );
    }

    addItem(label) {
        this.setState({items: [...this.state.items, this.createItem(label)]});
    };

    createItem(label) {
        return {
            id: this.genId++,
            label: label,
        };
    };

    deleteItem(id) {
        this.setState({items: this.state.items.filter(item => item.id !== id)});
    };
}