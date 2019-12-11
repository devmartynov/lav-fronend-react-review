import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Layout.css';

export default class Layout extends React.PureComponent {

    static propTypes = {
        children: PropTypes.func,
    };

    render() {
        return (
            <div className="mainStyle">
                <div className="mainStyle__header">
                    <div className="header__title_middle">Apps on <span
                        className="header__title_middle-bold">React+Redux</span></div>
                </div>
                <div className="mainStyle__container">
                    <div className="column-left">
                        <div className="column-left__menuBar ">
                            <div className="menuBar__options">
                                <div className="menuBar__options-content">
                                    <p><Link className="menuBar__options-content-link-first" to="/home">Home</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/properties">ToDoList</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/weather">Weather</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/properties">Movie</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/currencyConverter">Currency Converter</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/calculator">Calculator</Link></p>
                                    <p><Link className="menuBar__options-content-link" to="/profile">Social Card</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-right__profile">
                        <div className="column-right__content">
                            <div className="input-form__profile">
                                <form className="input-form__profile">
                                    {this.props.children}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}