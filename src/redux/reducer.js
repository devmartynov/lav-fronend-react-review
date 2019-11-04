import { handleErrors, make_base_auth } from './loginFunctions';
import { history } from '../App';

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
const initialState = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}

export function login(username, password) {
    return (dispatch) => {
        dispatch(setLoginPending(true));

        const backendURL = "https://e-services-backend.herokuapp.com/v1/";
        const url = backendURL + "me";
        const headers = new Headers();
        console.log(username, password)
        headers.append("Authorization", make_base_auth(username, password));
        headers.append("Content-Type", "application/json");

        fetch(url, {
            method: "GET",
            headers: headers,
        }).then(handleErrors)
            .then(response => {
                console.log("ok");
                return response.json()
            }).then((data) => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(false));
                dispatch(setLoginSuccess(true));

                history.push('/home');
            })
            .catch(error => {
                console.log(error);
                dispatch(setLoginSuccess(false));
                dispatch(setLoginPending(false));
                dispatch(setLoginError(error));
            })
    }

}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return { ...state, ...{ isLoginPending: action.isLoginPending } }

        case SET_LOGIN_SUCCESS:
            return { ...state, ...{ isLoginSuccess: action.isLoginSuccess } }

        case SET_LOGIN_ERROR:
            return { ...state, ...{ loginError: action.loginError } }

        default:
            return state;
    }
}
