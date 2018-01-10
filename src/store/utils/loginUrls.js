const {
    REACT_APP_AWS_REGION,
    NODE_ENV,
    REACT_APP_LOGIN_HASH
} = process.env;

const STAGE = NODE_ENV === 'development' ? 'dev' : 'prod';
const baseUrl = `https://${REACT_APP_LOGIN_HASH}.execute-api.${REACT_APP_AWS_REGION}.amazonaws.com/${STAGE}/`; 

module.exports = [
    'signup',
    'confirm-account',
    'login',
    'logout',
    'user'
].reduce((memo, value) => {
    memo[value] = baseUrl + value;
    return memo;
}, {});