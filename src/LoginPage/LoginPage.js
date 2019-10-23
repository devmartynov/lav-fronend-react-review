import React, { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import InputComponent from '../../src/InputComponent/InputComponent';

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
    }

    render() {
        //  const { username, password, submitted } = this.state;
        return (
          <div className="main-page-container">
          <form className="input-form">

            <h1 className="input-form__title input-form__title_big">Welcome</h1>
            <div className="input-form__error-message"></div>

            {/* <label className="input-form__field">
              <span className="input-form__text-label">username</span>
              <input className="input-form__text-input" 
                     type="text" 
                     name="username" 
                     autoComplete="on" 
                     onChange={this.handleChange}
                     required />
            </label> */}
            <InputComponent name="username" type="text" onChange={this.handleChange} />

            {/* <label className="input-form__field">
              <span className="input-form__text-label">password</span>
              <input className="input-form__text-input" 
                     type="password" 
                     name="password" 
                     autoComplete="on" 
                     onChange={this.handleChange}
                     required />
            </label> */}
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
            
export default LoginPage;