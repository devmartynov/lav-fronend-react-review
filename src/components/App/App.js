import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage, { PrivateRoute } from "../LoginPage/LoginPage";
import Home from "../Home/Home";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    console.log('creating ...');
  }

  render() {
    return (
      <React.Fragment >
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
            <Route path="/register" component={RegisterPage} ></Route>
            <Route path="/login" component={LoginPage} ></Route>
            <Route path="/home" component={Home} ></Route>
            {/* <PrivateRoute path="/home" ><Home /></PrivateRoute> */}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
