export const SET_TOKENS = 'SET_TOKENS';
export const UNSET_TOKENS = 'UNSET_TOKENS';

export function setTokens(tokens) {
    return {
        type: SET_TOKENS,
        tokens
    }
}

export function unsetTokens() {
    return {
        type: UNSET_TOKENS
    }
}