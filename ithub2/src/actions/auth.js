import axios from 'axios'
import REACT_APP_API_URL from '../../consts'
import {
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL
} from "./types"

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
            const res = await axios.post(`${REACT_APP_API_URL}/auth/users/me/`, bode, config)
        
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        }
        catch (err){
            dispatch({
                type: USER_LOADED_FAIL
            })
        }
    }
    else{
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

    try {
        console.log(`${REACT_APP_API_URL}/auth/jwt/create/`)
        const res = await axios.post(`${REACT_APP_API_URL}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(load_user());
    } catch (err) {
        console.log(err)
        dispatch({
            type: LOGIN_FAIL
        })
    }
};