import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login-reducer';
import signup from './signup-reducer';
import tokens from './token-reducer'

export default combineReducers({
    login,
    signup,
    tokens,
    router: routerReducer
})
