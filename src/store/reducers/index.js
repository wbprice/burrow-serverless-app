import { combineReducers } from 'redux';

import login from './login-reducer';
import signup from './signup-reducer';

export default combineReducers({
    login,
    signup
})
