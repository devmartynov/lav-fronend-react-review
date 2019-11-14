import React, { Component } from 'react';
import './Calculator.css';
import Button from './Button/Button';

class Calculator extends Component {
    render() {
        return (
            <div>
                <Button value="1" buttonClass="btn btn-orange"/>
            </div>
        )
    }
}

export default Calculator;