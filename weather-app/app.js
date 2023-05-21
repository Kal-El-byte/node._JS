 const request = require ('request');
 
//  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=ae2ff341e632e43b0f6a76704462e449';

//  request( {url : url, json : true}, (err, res) => {

//     if(err){
//         console.log('unable to connect to the internet')
//     }else{
//         console.log('It is currently ' + res.body.main.temp + ' degrees out. There is a 0% chance of rain.');
//     }
    
//  });

//  Geocoding
//  const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadephia.json?access_token=pk.eyJ1IjoiZGFuaXZldCIsImEiOiJjbGgxMjV1OHAwZmliM2VvaDdzOW0yeHByIn0.l_G-81CNE38lrbaeJQCpGw&limit=1';
//  request( { url : geocodingURL, json : true }, (err, res) => {
//  if(err){
//     console.log('unable to connect');
//  } else{
//     const longitude = res.body.features[0].center[0];
//     const latitude = res.body.features[0].center[1];
//     console.log(longitude, latitude);
//  };
//  });



geocode('Philadelphia', (err, data) => {
    console.log('err', err);
    console.log('data', data);
})