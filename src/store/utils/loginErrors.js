'use strict';

export default function handleError(error) {
    switch(error.type) {
        default:
            return { status: 500, message: 'Something went wrong.'};
    }
}