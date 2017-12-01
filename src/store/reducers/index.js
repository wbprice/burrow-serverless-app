import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login-reducer';
import signup from './signup-reducer';
import tokens from './token-reducer'
import user from './user-reducer';

export default combineReducers({
    login,
    signup,
    tokens,
    user,
    router: routerReducer
})
