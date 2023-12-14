import {
    LOAD_COURSES_SUCCESS,
    LOAD_COURSES_FAIL
} from "../actions/types"

const initialState = {
    courses: []
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type) {
        case LOAD_COURSES_SUCCESS:
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
