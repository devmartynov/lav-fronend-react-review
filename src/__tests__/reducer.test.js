import reducer from '../reducers/reducerCalc';
import store from '../redux/store';
import {
    updateCurrencyBase,
    updateCurrencyTarget,
    updateCurrencyAmount
} from '../actions/actionCalcCurr';


describe('reducer testing', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                currencyBase: 'USD',
                currencyTo: 'GBP',
                currencyList: [],
                currencyAmount: 1,
                finalResult: 0
            }
        )
    })
});

describe('Base currency action test', () => {

    beforeAll(() => {
        store.dispatch(updateCurrencyBase("EUR"));
    });

    it('base currency changing', () => {
        const state = store.getState();
        expect(state.reducerCalc.currencyBase).toBe('EUR');
    });
})

describe('Target currency action test', () => {
    beforeAll(() => {
        store.dispatch(updateCurrencyTarget("USD"));
    });

    it('target currency changing', () => {
        const state = store.getState();
        expect(state.reducerCalc.currencyTo).toBe('USD');
    });
})

describe('Amount currency action test', () => {
    beforeAll(() => {
        store.dispatch(updateCurrencyAmount(123));
    });

    it('Amount currency changing', () => {
        const state = store.getState();
        expect(state.reducerCalc.currencyAmount).toBe(123);
    });
})
