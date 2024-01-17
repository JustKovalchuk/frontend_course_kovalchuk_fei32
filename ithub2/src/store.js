import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers"


const initialState = {}

const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ 
    trace: true, 
    traceLimit: 100
}) || compose; 
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)
export default store