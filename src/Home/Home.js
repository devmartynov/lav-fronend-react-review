import React, { Component } from 'react';
import { HashRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './Home.css';
import { Auth } from '../LoginPage/LoginPage';

const routes = [
    {
        path: "/properties",
        main: () => properties()
    },
    {
        path: "/profile",
        main: () => profile()
    }
]

function profile() {
    return <h2>This is profile page</h2>
}

function properties() {
    return <h2>This is properties page</h2>
}

function logout() {
    Auth.signout();
}

const Home = () => (
    <Router>
    <div className="mainStyle">
        <div className="mainStyle__header">
            <div className="header__title_middle">My Awesome Webservices</div>
            <div className="header__title_logout"><Link to="/login" onClick={logout}>logout</Link></div>
        </div>

        <div className="mainStyle__container">
            <div className="column-left">
              <div className="column-left__menuBar ">

                <div className="menuBar__welcomeText_black">
                  <div>Welcome,<br />
                    <p className="menuBar__welcomeText_red"></p>
                  </div>
                </div>
                
                <div className="menuBar__options">
                  <div className="menuBar__options-content">
                    <p><Link to="/profile">Profile</Link></p>
                    <p><Link to="/properties">Properties</Link></p>
                  </div>
                </div>

              </div>
            </div>

            <div className="column-right__profile">
              <div className="column-right__content">
                <div className="input-form__profile">
                  <h1 className="input-form__title input-form__title-profile_big">Profile</h1>
                  <div>
                      <Switch>
                          {routes.map( (route, index) =>(
                              <Route key={index}
                                     path={route.path}
                                     children={<route.main />}
                                />
                          )) }
                      </Switch>
                  </div>
                </div>
              </div>
            </div>

        </div>
    </div>
    </Router>
)
        
        
export default Home;