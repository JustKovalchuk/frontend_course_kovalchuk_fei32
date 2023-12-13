import {
    LOAD_COURSES_SUCCESS,
    LOAD_COURSES_FAIL
} from "../actions/types"

const initialState = {
    courses: []
}

export default function(state = initialState, action) {
    const { type, payload } = action

    console.log("reducer courses")
    switch(type) {
        case LOAD_COURSES_SUCCESS:
            console.log("payload", payload)
            return {
                ...state,
                courses: payload,
            }
        case LOAD_COURSES_FAIL:
            return {
                ...state,
                courses: [],
            }
        default: 
            return state
    }
}
