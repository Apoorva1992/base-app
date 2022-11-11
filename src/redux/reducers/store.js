import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { newsReducer} from './news.reducer'

const rootReducer = combineReducers({
    news: newsReducer
});

const store = createStore(
    rootReducer,{}, composeWithDevTools(applyMiddleware(thunk))
)

export default store;