import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { 
    createStore, 
    applyMiddleware 
} from 'redux';

import reducer from './reducers';

const middleware = [
    thunk
]

if (process && process.env.NODE_ENV === 'developer') {
    middleware.push(logger);
}

export default createStore(reducer, applyMiddleware(...middleware));