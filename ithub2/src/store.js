import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import * as actionCreators from "./actions/index";
import thunk from 'redux-thunk'
import rootReducer from "./reducers"


const initialState = {}

const middleware = [thunk]
// const composeEnhancers = composeWithDevTools({ 
//     actionCreators, 
//     trace: true, 
//     traceLimit: 25 
// }); 
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