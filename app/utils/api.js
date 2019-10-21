
export const domain = "https://drive.google.com/open?id=1QHiLM0oX9c4vW-DpAeJ2tEaW9q7FPDvp";

const timeout = 6000;
const networkErrorMsg = 'Please check your internet connection and try again.';
const method = 'get';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}
export var api = {
    
    browseDetails() {
        var option = {
            method,
            headers
        }
        return fetch(domain, option).then((res) => {
            return res.blob().then(res => res.data);
        })
    }
}