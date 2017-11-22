export default function checkStatus(response) {
    if ( (response.status || response.statusCode) >= 200 && (response.status || response.statusCode) < 300) {
        return response
    }
    else {
        return response.json().then(error => {
            throw new Error(JSON.stringify(error));
        })
    }
}