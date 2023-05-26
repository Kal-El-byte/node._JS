const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(lat) + '&lon='+ encodeURIComponent(lon) + '&appid=3a781382420c8872d34bdb286857f5e4&units=imperial';
    request( {url: url, json: true}, (err, res) => {
        if(err){
            callback('Unable to connect', undefined);
        }else{
            callback(undefined, res.body.main.temp + ' degrees ' + res.body.weather[0].description);
        }
    });
};

module.exports = forecast;