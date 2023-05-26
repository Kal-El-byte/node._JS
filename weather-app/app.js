 const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Boston', (err, data) => {
    if(err){
        return console.log('Unale to connect');
    }
    forecast(data.latitude, data.longitude, (err, forecastData) => {
        if(err){
            return console.log(err);
        }
        console.log(data.location);
        console.log(forecastData);
      });  
})