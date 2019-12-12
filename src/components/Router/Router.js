import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import { history } from '../../redux/store';

export default class Router extends React.PureComponent {

    static propTypes = {
        wrapperView: PropTypes.elementType,
        routes: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.arrayOf(PropTypes.shape({
                path: PropTypes.string,
                component: PropTypes.elementType,
            })),
        ]),
    };

    render() {
        return (
            <ConnectedRouter history={history}>
                {this.renderContent()}
            </ConnectedRouter>
        );
    }

    renderContent() {
        const WrapperComponent = this.props.wrapperView;
        const routes = (
            <Switch>
                {this.props.routes.map((route, index) => (
                    <Route
                        key={route.id + index}
                        render={props => this._renderItem(route, props)}
                        {...route}
                        component={null}
                    />
                ))}
                {this.props.children}
            </Switch>
        );

        if (WrapperComponent) {
            return (
                <WrapperComponent>
                    {routes}
                </WrapperComponent>
            );
        }

        return routes;
    }

    _renderItem(route, props) {
        let Component = route.component;

        return (
            <Component {...props}/>
        );
    }
}