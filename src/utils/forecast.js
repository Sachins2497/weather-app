const request = require('postman-request');

const forecast = (latitude, longitude, callback) =>{
    const url = 'https:weatherforecast.com/' + latitude + longitude;
    request({url, json:true}, (error, { body } = {}) => {
        if(error){
            callback('unable to get', undefined)
        } else if(body.error){
            callback('Retry search', undefined);
        } else {
            callback(undefined, body.temperature);
        }
    })
}

module.exports = forecast;