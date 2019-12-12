import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default class Button extends React.PureComponent {

    static propTypes = {
        className: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    render() {
        return (
            <button
                className={'Button' + (this.props.className ? ` ${this.props.className}` : '')}
                onClick={this._onClick}
            >
                {this.props.label}
            </button>
        );
    }

    _onClick(e) {
        e.preventDefault();

        if (this.props.onClick) {
            return this.props.onClick(e);
        }

        return null;
    }
}