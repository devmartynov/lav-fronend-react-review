import React, { Component } from 'react';
import './LoginPage.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import InputComponent from '../../src/InputComponent/InputComponent';
import { withRouter, Route, Redirect } from 'react-router';

const Auth = {
    isAuth: false,
    authentication() {
        this.isAuth = true;
    },
    signout() {
        this.isAuth = false;
    }
}

export function PrivateRoute({ children, ...rest }) {
    console.log(Auth.isAuth);
    return (
        <Route 
          {...rest}
          render={() =>
            Auth.isAuth ? ( children) : (<Redirect to ={{ pathname: "/login" }} />)}
    /> )
}

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name , value } = e.target;
        console.log(e.target);
        this.setState ({
           [name]: value
        })
    }

    login = (e) => {
        e.preventDefault();
        this.setState ({
            submitted: true
        })
        const { username, password } = this.state;
        console.log('login process with ' + username + ' and ' + password);
        Auth.isAuth = true;
        console.log(Auth.isAuth);
        
        this.props.history.push('/home'); //using props from withRouter
    }

    render() {
        //  const { username, password, submitted } = this.state;
        return (
          <div className="main-page-container">
          <form className="input-form">

            <h1 className="input-form__title input-form__title_big">Welcome</h1>
            <div className="input-form__error-message"></div>

            <InputComponent name="username" type="text" onChange={this.handleChange} />

            <InputComponent name="password" type="password" onChange={this.handleChange} />

            <div className="input-form__field">
                <button className="input-form__button input-form__button_orange" 
                        type="button" 
                        onClick={this.login}>Login
                </button>
            </div>

            <div className="input-form__field">
                <Link to="/register" 
                   className="input-form__link input-form__link_underlined">Register
                </Link>
            </div>

           </form>
           </div>
                    )
                }
            }
            
export default withRouter(LoginPage);