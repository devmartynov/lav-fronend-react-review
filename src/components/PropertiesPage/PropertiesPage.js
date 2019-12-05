import React, { Component } from 'react';
import './PropertiesPage.css';
import AppHeader from './AppHeader/AppHeader';
import ItemAddForm from './ItemAddForm/ItemAddForm';
import TodoList from './TodoList/TodoList';

class PropertiesPage extends Component {

    genId = 50;

    state = {
        items: [
            { id: 1, label: 'Turgeneva 212' },
            { id: 2, label: 'Merkela 55' },
            { id: 3, label: 'Lacplesa 42' }]
    }

    onItemAdded = (label) => {
        this.setState((state) => {
            const item = this.createItem(label);
            return { items: [...state.items, item] }
        })
    }

    createItem = (label) => {
        return {
            id: this.genId++,
            label: label
        }
    }

    deleteItem = (index) => {
        const { items } = this.state;
        this.setState({
            items: items.filter((item) => {
                return item.id !== index
            }),
        });
    }

    render() {
        const { items } = this.state;

        return (
            <div className="App">
                <AppHeader />
                <ItemAddForm onItemAdded={this.onItemAdded} />
                <TodoList items={items} onDelete={this.deleteItem} />
            </div>
        )
    }
}

export default PropertiesPage;
