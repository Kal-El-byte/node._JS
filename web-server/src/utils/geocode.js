const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';

    request({ url, json: true }, (err, {body} = {}) => {
        if (err) {
            callback('Unable to connect to location services!', undefined);
        }else if(body.features.length === 0) {
            callback('Unable to find location, find another search');
        } else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            });
        };
    });
};

module.exports = geocode;