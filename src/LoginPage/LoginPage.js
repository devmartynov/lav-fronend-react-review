import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import InputComponent from '../../src/InputComponent/InputComponent';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../redux/reducer';

export const Auth = {
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
                Auth.isAuth ? (children) : (<Redirect to={{ pathname: "/login" }} />)}
        />)
}

const initialState = {
    username: '',
    password: ''
}

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    _submit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        console.log('login process with ' + username + ' and ' + password);
        Auth.isAuth = true;
        this.props.login(username, password);
        this.setState(initialState,
            () => { console.log('resetted state = ', this.state) });
    }

    render() {
        const { username, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <div className="main-page-container">
                <form className="input-form">

                    <h1 className="input-form__title input-form__title_big">Welcome</h1>
                    <div className="input-form__error-message">
                        {isLoginPending && <div>Please wait...</div>}
                        {isLoginSuccess && <div>Success.</div>}
                        {loginError && <div>{loginError.message}</div>}
                    </div>

                    <InputComponent value={username} 
                                    name="username" 
                                    type="text" 
                                    onChange={this.handleChange} />
                    <InputComponent value={password} 
                                    name="password" 
                                    type="password" 
                                    onChange={this.handleChange} />

                    <div className="input-form__field">
                        <button className="input-form__button input-form__button_orange"
                            type="button"
                            onClick={this._submit}>Login
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

const mapStateToProps = (state) => {
    console.log('state.isLoginPending', state.isLoginPending);
    console.log('state.isLoginSuccess', state.isLoginSuccess);
    console.log('state.loginError', state.loginError);
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(login(username, password))
    };
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);

