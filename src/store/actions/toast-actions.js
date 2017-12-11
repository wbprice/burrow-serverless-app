export const SET_TOAST_ALERT = 'SET_TOAST_ALERT';
export const DISMISS_TOAST_ALERT = 'DISMISS_TOAST_ALERT';

export function setToastAlert(message, level) {
    return {
        type: SET_TOAST_ALERT,
        message,
        level
    }
}

export function dismissToastAlert() {
    return {
        type: DISMISS_TOAST_ALERT
    }
}

export function setTimedToastAlert(message, level) {
    return dispatch => {
        dispatch(setToastAlert(message, level));
        setTimeout(() => {
            dispatch(dismissToastAlert())
        }, 3000)
    }
}
