import axios from 'axios'
import REACT_APP_API_URL from '../../consts'
import {
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,

    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,

    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,

    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL
} from "./types"

import { TryHideWarning } from '../components/Warnings/Warning';

export const is_password_valid = (password) => {
    let regularExpression = /^(?=.*[0-9])(?=.*[~`!@#$%^&*()-_+={};:"<>,./?])[a-zA-Z0-9!~`!@#$%^&*()-_+={};:"<>,./?]{8,16}$/;
    return regularExpression.test(password)
}

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }; 

        const body = JSON.stringify({ token: localStorage.getItem('access') });

        try {
            const res = await axios.post(`${REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
        
            if (res.data.code !== "token_not_valid"){

                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            }
            else{
                dispatch({
                    type: AUTHENTICATED_FAIL
                })
            }
        }
        catch (err){
            dispatch({ 
                type: AUTHENTICATED_FAIL
            })
        }
    }
    else{
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try {
            const res = await axios.get(`${REACT_APP_API_URL}/auth/users/`, config)
        
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        }
        catch (err){
            console.log(err)
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    }
    else{
        console.log("err")
        dispatch({
            type: USER_LOADED_FAIL
        })
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    let hasNoWarning = true
    let condition = true
    try {
        const res = await axios.post(`${REACT_APP_API_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        condition = false
        dispatch(load_user());
    } catch (err) {
        condition = true
        dispatch({
            type: LOGIN_FAIL
        })
    }
    TryHideWarning(condition, "login-error-container", hasNoWarning)
}
export const signup = (first_name, last_name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ first_name, last_name, email, password, re_password });
    
    let hasNoWarning = true
    let condition = true
    
    try {
        const res = await axios.post(`${REACT_APP_API_URL}/auth/users/`, body, config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        condition = false
        dispatch(load_user());
        // .catch(function (error) 
        // {
        //     console.log("hadle error")
        //     if (error.response) {
        //         console.log("hadle error.response")
        //         console.log('Error', error.message);
        //         // The request was made and the server responded with a status code
        //         // that falls out of the range of 2xx
        //         console.log(error.response.data);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     } else if (error.request) {
        //         console.log("hadle error.request")
        //         // The request was made but no response was received
        //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //         // http.ClientRequest in node.js
        //         console.log(error.request);
        //     } else {
        //         console.log("hadle error.message")
        //         // Something happened in setting up the request that triggered an Error
        //         console.log('Error', error.message);
        //     }
        //     console.log(error.config);
        //     condition = true
        //     dispatch({
        //         type: SIGNUP_FAIL
        //     })
        // });
    } catch (err) 
    {
        condition = true
        dispatch({
            type: SIGNUP_FAIL
        })
    }
    TryHideWarning(condition, "sign-error-container", hasNoWarning)

    return !condition
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    const body = JSON.stringify({ email });

    try {
        const res = await axios.post(`${REACT_APP_API_URL}/auth/users/reset_password/`, body, config);

        dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PASSWORD_RESET_FAIL
        })
    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    let hasNoWarning = true
    let condition = true
    try {
        await axios.post(`${REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config);

        condition = false
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        });
    } catch (err) {
        condition = true
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });
    }
    TryHideWarning(condition, "password-reset-confirm-error-container", hasNoWarning)

    return !condition
}

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }


    const body = JSON.stringify({ uid, token });

    try {
        await axios.post(`${REACT_APP_API_URL}/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
}
