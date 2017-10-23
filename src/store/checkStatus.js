export default function checkStatus(response) {
    if ( (response.status || response.statusCode) >= 200 && (response.status || response.statusCode) < 300) {
        return response
    }
    else {
        throw new Error(response)
    }
}