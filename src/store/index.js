import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose} from 'redux'; 
import persistState from 'redux-localstorage';
import reducer from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process && process.env.NODE_ENV !== 'production') {
    middleware.push(logger);
}

export default createStore(reducer, compose(
    applyMiddleware(...middleware),
    persistState('user', {key: 'user'})
));