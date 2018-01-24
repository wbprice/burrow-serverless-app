const passwordError = 'Password did not conform with policy: '

export default function getErrorMessage(error) {
    switch(error.code) {
        case 'InvalidParameterException':
            return {
                message: 'Check that your inputs match the policy',
                level: 'danger'
            };
        case 'InvalidPasswordException':
            return {
                message: error.message.replace(passwordError, ''),
                level: 'danger'
            };
        case 'UsernameExistsException':
            return {
                key: 'username',
                message: 'A user with that email already exists',
                level: 'danger'
            };
        case 'UserNotFoundException':
        case 'NotAuthorizedException':
            return { 
                key: 'emailAddress',
                message: 'That username/password doesn\'t work',
                level: 'danger'
            };
        default:
            return { 
                key: 'emailAddress',
                message: 'Something went wrong',
                level: 'warning'
            }
    }
}
