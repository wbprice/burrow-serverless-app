const {
    REACT_APP_AWS_REGION,
    NODE_ENV,
    REACT_APP_REMOTE_HASH
} = process.env;

const STAGE = NODE_ENV === 'development' ? 'dev' : 'prod';
const baseUrl = `https://${REACT_APP_REMOTE_HASH}.execute-api.${REACT_APP_AWS_REGION}.amazonaws.com/${STAGE}/`; 

module.exports = [
    'remotes'
].reduce((memo, value) => {
    memo[value] = baseUrl + value;
    return memo;
}, {});