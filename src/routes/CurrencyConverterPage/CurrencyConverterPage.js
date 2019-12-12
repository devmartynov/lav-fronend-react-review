import React from 'react';

import CurrencyConverter from './CurrencyConverter/CurrencyConverter';

import './CurrencyConverterPage.scss';

export default class CurrencyConverterPage extends React.PureComponent {

    render() {
        return (
            <div className='CurrencyConverterPage'>
                <CurrencyConverter/>
            </div>
        );
    }
}