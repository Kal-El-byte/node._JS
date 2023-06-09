const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=' + latitude + ', ' + longitude + '&units=f';

    request( {url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to connect to weather service', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. ' + 'There is a ' + body.current.precip + '% chance of rain')
        }
    })
}


module.exports = forecast;