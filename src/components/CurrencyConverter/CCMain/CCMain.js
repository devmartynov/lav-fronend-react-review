import React, { Component } from 'react';
import './CCMain.css';

const initiateState = {
    currencyBase: 'USD',
    currencyTo: 'GBP',
    currencyList: [],
    currencyAmount: 1,
    finalResult: 0
};

class CCMain extends Component {
    constructor(props) {
        super(props);
        this.state = initiateState;
    }
    componentDidMount() {
        fetch("https://api.exchangeratesapi.io/latest")
            .then((res) => { return res.json() })
            .then((result) => {
                const currencyAr = ["EUR"];
                for (let key in result.rates) {
                    currencyAr.push(key);
                }
                //console.log(currencyAr);
                this.setState({
                    currencyList: currencyAr
                }, () => console.log(this.state.currencyList))
            })
            .catch((err) => {
                console.log('Error = ', err);
            })
    }
    onChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        this.setState({
            currencyAmount: value
        })
    }

    change = (event) => {
        event.preventDefault();
        if (event.target.name === "from") {
            this.setState({
                currencyBase: event.target.value
            }, () => console.log(this.state.currencyBase))
        } else if (event.target.name === "to") {
            this.setState({
                currencyTo: event.target.value
            }, () => console.log(this.state.currencyTo))
        }
    }

    convert = (e) => {
        e.preventDefault();
        console.log('converting ...');
        fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.currencyBase}&symbols=${this.state.currencyTo}`)
            .then((res) => { return res.json() })
            .then((result) => {
                console.log(result.rates);
                this.setState({
                    finalResult: result.rates[this.state.currencyTo] * this.state.currencyAmount
                }, () => { console.log('result = ', this.state.finalResult) })
            })
            .catch(err => {
                console.log('Error = ', err);
            });
    }
    render() {
        return (
            <div>
                <input type="text"
                    name="currencyAmount"
                    value={this.state.currencyAmount}
                    onChange={this.onChange} />
                <select name="from"
                    onChange={this.change}
                    value={this.state.currencyBase}>
                    {this.state.currencyList.map((item, key) =>
                        <option key={key}>{item}</option>)}
                </select>
                <select name="to"
                    onChange={this.change}
                    value={this.state.currencyTo}>
                    {this.state.currencyList.map((item, key) =>
                        <option key={key}>{item}</option>)}
                </select>
                <button className="button-currency__orange"
                    onClick={this.convert}>Convert</button>
                <div>Result : {this.state.finalResult}</div>
            </div>

        )
    }

}

export default CCMain;