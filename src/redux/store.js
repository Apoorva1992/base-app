import {combineReducer, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { counterReducer } from './reducers/counter.reducer'


const rootReducer = combineReducers({
    counter: counterReducer
    //auth:authenticator
});

const store = createStore(
    rootReducer, {}, composeWithDevTools()
)

export default store