import { combineReducers } from "redux";
import auth from './auth'
import courses from './courses'

export default combineReducers({
    auth, courses
})