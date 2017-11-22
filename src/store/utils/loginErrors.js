'use strict';

export default function handleError(error) {
    debugger;
    switch(error.code) {
        case 'UserNotFoundException':
        case 'NotAuthorizedException':
            return { 
                emailAddress: {
                    error: 'That username/password doesn\'t work'
                }
            };
        default:
            return { 
                emailAddress: {
                    error: 'Something went wrong'
                }
            }
    }
}