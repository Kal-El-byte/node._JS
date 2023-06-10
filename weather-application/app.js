const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=9863ad178291d21b0085414c8bc0fec7&query=39.95,-75.16&units=f';

// request({ url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect weather service');
//     }else if (response.body.error){
//         console.log('Unable to find location');
//     }else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. ' + 'There is a ' + response.body.current.precip + '% chance of rain');
//     }
// });

//Geocoding

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';
//  request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to server');
//     }else if (response.body.features.length === 0){
//         console.log('Unable to fetch location');
//     }else{
//         const latitude = response.body.features[0].center[1];  //latitude
//         const longitude = response.body.features[0].center[0];  //longitude
//         console.log(latitude, longitude);
//     };
//  });

//geocode


const address = process.argv[2]
if(!address){
    return console.log('Please provide an address')
}
geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
       return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log(error);
        }
        console.log(location);
        console.log(forecastData);
    });
});