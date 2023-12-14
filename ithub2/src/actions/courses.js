import {
    LOAD_COURSES_SUCCESS,
    LOAD_COURSES_FAIL
} from "./types"
import REACT_APP_API_URL from '../../consts'
import axios from 'axios'

export const get_random_course = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    let result = null
    try {
        const res = await axios.get(`${REACT_APP_API_URL}/courses/random_course/`, config)

        result = res
        dispatch({
            type: LOAD_COURSES_SUCCESS,
            payload: res.data
        })
    }
    catch (err)
    {
        dispatch({
            type: LOAD_COURSES_FAIL
        })
    }
    return res.data
}


export const get_all_courses = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    console.log("working")
    try {
        let res = axios.get(`${REACT_APP_API_URL}/courses/all_courses/`, config).then(function (value) {
                console.log(value.data)
                dispatch({
                    type: LOAD_COURSES_SUCCESS,
                    payload: value.data
                })
            }).catch((e) => {
                dispatch({
                    type: LOAD_COURSES_FAIL
                })
              })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: LOAD_COURSES_FAIL
        })
    }
}
