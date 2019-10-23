import React from 'react';

import './InputComponent.css';

const InputComponent = (props) => (
    <div>
        <label className="input-form__field">
            <span className="input-form__text-label">{props.name}</span>
            <input className="input-form__text-input"
                type={props.text}
                name={props.name}
                autoComplete="on"
                onChange={props.onChange}
                required />
        </label>

    </div>
)

export default InputComponent;