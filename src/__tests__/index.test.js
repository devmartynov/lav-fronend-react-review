import * as actions from '../actions/calculateCurrency';

describe('actions', () => {
    it('should create an action', () => {
        const result = 123;
        const expectedAction = {
            type: 'CALCULATE_TOTAL_AMOUNT',
            result
        }
        expect(actions.calculateResultAmount(result)).toEqual(expectedAction)
    })
})

