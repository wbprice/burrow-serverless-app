import {
    SET_TOAST_ALERT,
    DISMISS_TOAST_ALERT
} from './../actions/toast-actions'

const initialState = {
    message: '',
    level: ''
};

export default function toastReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOAST_ALERT:
            return {
                message: action.message,
                level: action.level
            }
         
        case DISMISS_TOAST_ALERT:
            return initialState;

        default:
            return state
    }
}
