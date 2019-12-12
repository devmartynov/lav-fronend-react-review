import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Button';

import './TodoForm.scss';

export default class TodoForm extends Component {

    static propTypes = {
        addItem: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.changeTodoLabel = this.changeTodoLabel.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
        this.keyDown = this.keyDown.bind(this);

        this.state = {
            label: '',
        };
    }

    render() {
        return (
            <div>
                <div
                    id='todo-form'
                    className='header'
                >
                    <input
                        id='add-input'
                        type='text'
                        value={this.state.label}
                        onChange={this.changeTodoLabel}
                        onKeyDown={this.keyDown}
                    />
                    <Button
                        id='add-button'
                        type='button'
                        onClick={this.addTodoItem}
                        label='Add'
                    />
                </div>
            </div>
        );
    }

    keyDown(e) {
        if (e.which === 13) {
            this.addTodoItem(e);
        }
    }

    changeTodoLabel(e) {
        this.setState({label: e.target.value});
    };

    addTodoItem(e) {
        e.preventDefault();
        const {label} = this.state;
        if (label !== '') {
            this.props.addItem(label);
            this.setState({label: ''});
        }
    };
}