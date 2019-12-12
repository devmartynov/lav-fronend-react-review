import React from 'react';

import Button from '../../components/Button';

import './CalculatorPage.scss';

export default class CalculatorPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            result: '0',
        };
    }

    render() {
        return (
            <section className='CalculatorPage'>
                <h1>Calculator</h1>
                <div>
                    <Button label={this.state.result} className='Button_input'/>
                    {this.renderRow(['c', '+/-', '%', '/'])}
                    {this.renderRow(['7', '8', '9', '*'])}
                    {this.renderRow(['4', '5', '6', '-'])}
                    {this.renderRow(['1', '2', '3', '+'])}
                    {this.renderRow(['0', '00', '.', '='])}
                </div>
            </section>
        );
    }

    renderRow(buttonsValues = []) {
        if (!buttonsValues.length) {
            return null;
        }

        return (
            <div className='CalculatorPage__row'>
                {buttonsValues.map(value => (
                    <Button
                        className='CalculatorPage__button'
                        key={value}
                        label={value}
                        onClick={() => value === '=' ? this.calculate() : this.clickHandler(value)}
                    />
                ))}
            </div>
        );
    }

    clickHandler(key) {
        if (this.state.result === '0' && key !== 'c') {
            this.setState({
                result: key,
            });
        } else {
            switch (key) {
                case '%':
                case '.':
                case '-':
                case '+':
                case '*':
                case '/':
                    this.setState({result: this.state.result + key});
                    break;
                case '+/-':
                    if (this.state.result > 0) {
                        this.setState({result: '-' + this.state.result});
                    } else {
                        this.setState({result: this.state.result.substring(1)});
                    }
                    break;
                case 'c':
                    this.setState({result: '0'});
                    break;
                default:
                    this.setState({result: this.state.result + key});
            }
        }
    };

    calculate() {
        this.setState({result: eval(this.state.result)});
    };
}