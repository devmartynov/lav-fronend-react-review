import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import RegisterPage from "../src/RegisterPage/RegisterPage";
import LoginPage from "../src/LoginPage/LoginPage";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('creating ...');
  }

  render() {
    return (
      <React.Fragment >
        <Router>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
            <Route path="/register" component={RegisterPage} ></Route>
            <Route path="/login" component={LoginPage} ></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
