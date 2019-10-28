import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import RegisterPage from "../src/RegisterPage/RegisterPage";
import LoginPage, { PrivateRoute } from "../src/LoginPage/LoginPage";
import Home from "../src/Home/Home";

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
            <PrivateRoute path="/home"><Home/></PrivateRoute>
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
