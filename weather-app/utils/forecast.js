const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(lat) + '&lon='+ encodeURIComponent(lon) + '&appid=3a781382420c8872d34bdb286857f5e4&units=metric';
    request( {url, json: true}, (err, {body} = {}) => {
        if(err){
            callback('Unable to connect', undefined);
        }else{
            callback(undefined,  body.weather[0].description + ', it is currently ' + body.main.temp + ' degrees ');
        }
    });
};

module.exports = forecast;