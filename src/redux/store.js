import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducerAuth from './../reducers/reducerAuth';
import reducerCalc from './../reducers/reducerCalc';
import { connectRouter } from "connected-react-router";

const history = createBrowserHistory();

const rootReducer = combineReducers({
    reducerAuth,
    reducerCalc,
    router: connectRouter(history),
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export { store, history };