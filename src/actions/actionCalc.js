import { CALCULATOR_URL_API } from "./actionTypes";
import store from '../redux/store';

export function fetchCurrencies() {
    return dispatch => {
        dispatch(getCurrenciesList());
    }
}
export function updateCurrencyBase(currency) {
    return dispatch => {
        dispatch(updateCurBase(currency))
    }
}
export function updateCurrencyTarget(currency) {
    return dispatch => {
        dispatch(updateCurTarget(currency))
    }
}
export function updateCurrencyAmount(value) {
    return dispatch => {
        dispatch(updateCurAmount(value))
    }
}
export function calculateResult(result) {
    return dispatch => {
        dispatch(calculateResultAmount(result))
    }
}
export function calculateResultAmount(result) {
    return { type: 'CALCULATE_TOTAL_AMOUNT', result }
}

export function updateCurAmount(value) {
    return { type: 'UPDATE_CURRENCY_AMOUNT', value }
}

export function updateCurTarget(currency) {
    return { type: 'UPDATE_CURRENCY_TARGET', currency }
}

export function updateCurBase(currency) {
    return { type: 'UPDATE_CURRENCY_BASE', currency }
}

export function getCurrenciesList() {
    return dispatch => {
        fetch(CALCULATOR_URL_API)
            .then((res) => { return res.json() })
            .then((result) => {
                const currencyAr = ["EUR"];
                for (let key in result.rates) {
                    currencyAr.push(key);
                }
                dispatch(setCurrencies(currencyAr))
                console.log('currencyList ', store.getState().reducerCalc.currencyList)
            })
            .catch((err) => {
                console.log('Error = ', err);
            })
    }
}

export function setCurrencies(currencyAr) {
    return { type: "SET_CURRENCIES", currencyAr }
}