import React from 'react';

import Layout from '../Layout';
import Router from '../Router';
import routes from '../../routes/index';

import './App.css';

export default class App extends React.PureComponent {
    render() {
        return (
            <Router
                wrapperView={Layout}
                routes={routes}
            />
        );
    }
}
