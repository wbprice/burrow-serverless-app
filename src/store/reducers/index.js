import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import login from './login-reducer';
import signup from './signup-reducer';
import tokens from './token-reducer'
import user from './user-reducer';
import dashboard from './dashboard-reducer';

export default combineReducers({
    login,
    signup,
    tokens,
    user,
    dashboard,
    router: routerReducer
})
