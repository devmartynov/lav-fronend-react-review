import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Button';

import './TodoListItem.scss';

export default class TodoListItem extends React.PureComponent {

    static propTypes = {
        id: PropTypes.number,
        label: PropTypes.string,
        onDelete: PropTypes.func,
    };

    render() {
        return (
            <>
                <label className='title'>
                    {this.props.label}
                </label>
                <input
                    className='textField'
                    type='text'
                />
                <Button
                    className='delete'
                    onClick={() => this.props.onDelete(this.props.id)}
                    label='Delete'
                >
                </Button>
            </>
        );
    }
}