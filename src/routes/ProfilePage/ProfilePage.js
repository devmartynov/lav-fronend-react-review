import React from 'react';

import './ProfilePage.css';

export default class ProfilePage extends React.PureComponent {

    render() {
        return (
            <div className="column-right__profile">
                <h1 className="input-form__title input-form__title-profile_big">Profile</h1>
                <label className="input-form__field_profile">
                    <span className="input-form__text-label-profile">E-mail</span>
                    <input
                        className="input-form__text-input"
                        type="text"
                        name="email"
                        autoComplete="on"
                        required
                        readOnly
                    />
                </label>

                <label className="input-form__field_profile">
                    <span className="input-form__text-label-profile">Name</span>
                    <input
                        className="input-form__text-input"
                        type="text"
                        name="name"
                        autoComplete="on"
                        required
                        readOnly
                    />
                </label>

                <label className="input-form__field_profile">
                    <span className="input-form__text-label-profile">Password</span>
                    <input
                        className="input-form__text-input"
                        type="password"
                        name="password"
                        autoComplete="on"
                        required
                        readOnly
                    />
                </label>
                <div className="input-form__field_profile">
                    <button
                        className="input-form__button input-form__button_orange-profile"
                        type="button"
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}