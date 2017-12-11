export default function getErrorMessage(error) {
    switch(error.code) {
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
