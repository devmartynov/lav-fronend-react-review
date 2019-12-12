import React, { Component } from 'react';

import { CURRENCY_CONVERTER_URL_API } from '../../../actions/actionTypes';
import Button from '../../../components/Button';

import './CurrencyConverter.scss';

const DEFAULT_CURRENCY = 'EUR';

export default class CurrencyConverter extends Component {

    constructor(props) {
        super(props);

        this.changeCurrency = this.changeCurrency.bind(this);
        this.fetchCurrencies = this.fetchCurrencies.bind(this);
        this.convert = this.convert.bind(this);
        this.changeAmount = this.changeAmount.bind(this);

        this.state = {
            currencyFrom: DEFAULT_CURRENCY,
            currencyTo: DEFAULT_CURRENCY,
            amount: '',
            currencies: [],
            isCurrenciesLoading: true,
            loadingError: null,
            rate: null,
        };
    }

    componentDidMount() {
        this.fetchCurrencies();
    }

    render() {
        return (
            <div className='CurrencyConverter'>
                <h2 className='CurrencyConverter__header'>Currency Converter</h2>
                <div className='CurrencyConverter__row'>
                    <p>
                        Currency I have
                        <input
                            className='CurrencyConverter__input-text'
                            type='text'
                            name='currencyAmount'
                            pattern='[0-9]*'
                            value={this.state.amount}
                            onChange={this.changeAmount}
                        />
                        {this.renderCurrencySelect()}
                    </p>
                    <p>
                        Currency I want
                        {this.renderCurrencySelect(true)}
                    </p>
                </div>
                <div className='CurrencyConverter__button'>
                    <Button
                        className='CurrencyConverter__button-currency-orange'
                        onClick={this.convert}
                        label={this.state.isCurrenciesLoading ? 'Wait, fetching currencies...' : 'Convert'}
                        disabled={this.state.isCurrenciesLoading}
                    />
                </div>
                <div className='CurrencyConverter__result'>
                    {this.state.result}
                </div>
                {this.state.loadingError && (
                    <div className='CurrencyConverter__warning'>
                        <p style={{color: 'red', fontWeight: 'bold'}}>
                            {'При загрузке данных произошла ошибка. Пожалуйста, повторите попытку.'}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    renderCurrencySelect(isTargetCurrencyList) {
        return (
            <select
                name={isTargetCurrencyList ? 'to' : 'from'}
                className='CurrencyConverter__input-text'
                onChange={this.changeCurrency}
                value={isTargetCurrencyList
                    ? (this.state.currencyTo || DEFAULT_CURRENCY)
                    : (this.state.currencyFrom || DEFAULT_CURRENCY)
                }
            >
                {this.state.currencies.map(currency => (
                    <option key={currency}>{currency}</option>
                ))}
            </select>
        );
    }

    fetchCurrencies() {
        this.setState({isCurrenciesLoading: true}, () => {
            fetch(CURRENCY_CONVERTER_URL_API)
                .then(response => response.json())
                .then(result => {
                    const currencies = ['EUR'];
                    for (let key in result.rates) {
                        currencies.push(key);
                    }
                    this.setState({
                        currencies: currencies,
                        isCurrenciesLoading: false,
                        loadingError: result.error,
                    });
                })
                .catch(error => this.setState({
                    loadingError: error,
                    isCurrenciesLoading: false,
                }));
        });
    }

    changeAmount(e) {
        // TODO: check if value from input is valid. If it isn't, show error
        this.setState({amount: e.target.value});
    };

    changeCurrency(e) {
        const key = e.target.name === 'from' ? 'currencyFrom' : 'currencyTo';
        this.setState({[key]: e.target.value});
    };

    convert(e) {
        e.preventDefault();

        if (this.state.isCurrenciesLoading) {
            return null;
        }

        this.setState({isCurrenciesLoading: true}, () => {
            fetch(`${CURRENCY_CONVERTER_URL_API}?symbols=${this.state.currencyFrom + ',' + this.state.currencyTo}`)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    this.setState({
                        result: result.rates[this.state.currencyTo] * this.state.amount,
                        isCurrenciesLoading: false,
                        loadingError: result.error,
                    });
                })
                .catch(error => this.setState({
                    loadingError: error,
                    isCurrenciesLoading: false,
                }));
        });
    };
}
