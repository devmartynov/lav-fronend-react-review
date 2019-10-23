import React, { Component } from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import InputComponent from '../../src/InputComponent/InputComponent';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
            repeatPassword: '',
            name: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name , value } = e.target;
        this.setState ({
           [name]: value
        })
    }

    register = (e) => {
        console.log('User registering ... ')
    }
    render() {
        return (
          <div className="main-page-container">
          <form className="input-form">
            <h1 className="input-form__title input-form__title_big">Register Form</h1>
            <div className="input-form__error-message"></div>

            {/* <label className="input-form__field">
            <span className="input-form__text-label">login</span>
            <input className="input-form__text-input" 
                   type="text" 
                   name="login" 
                   autoComplete="on" 
                   required />
            </label> */}

            <InputComponent name="login"/>

            <label className="input-form__field">
            <span className="input-form__text-label">password</span>
            <input className="input-form__text-input" 
                   type="password" 
                   name="password" 
                   autoComplete="on" 
                   required />
            </label>

            <label className="input-form__field">
              <span className="input-form__text-label">repeat password</span>
              <input className="input-form__text-input" 
                     type="password" 
                     name="passwordRepeat" 
                     autoComplete="on" 
                     required />
            </label>

            <label className="input-form__field">
              <span className="input-form__text-label">name</span>
              <input className="input-form__text-input" 
                     type="text" 
                     name="name" 
                     autoComplete="on" 
                     required />
            </label>

            <div className="input-form__field">
              <button className="input-form__button input-form__button_orange" 
                      type="button" 
                      onClick={this.register}>Register</button>
            </div>

            <div className="input-form__field">  
               <p className="input-form__fieldText">Have an account? 
                <Link to="/login" 
                  className="input-form__link input-form__link_underlined" >Login
                </Link></p>
            </div>
           </form>
           </div>
        )
    }
}

export default RegisterPage;