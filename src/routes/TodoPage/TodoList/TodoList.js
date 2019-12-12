import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.scss';

export default class TodoList extends React.PureComponent {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
        })),
        onDelete: PropTypes.func,
    };

    render() {
        if (!this.props.items.length) {
            return 'Список пуст';
        }

        return (
            <ul className='TodoList'>
                {this.props.items.map(item => (
                    <li
                        className='TodoList__item'
                        key={item.id}
                    >
                        <TodoListItem
                            {...item}
                            onDelete={this.props.onDelete}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}