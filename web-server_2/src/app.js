const path = require('path')
const express = require('express');
const request = require('request');
const hbs = require('hbs');

// The code snippet below demonstrates how to require a function definition from the utils folder
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();

//Define path for express config
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')


//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Uchiha Itachi'
    });
});

//about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Uchiha Itachi'
    });
});

//help page
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        helpText: 'This is some helpfull page',
        name: 'Uchiha Itachi'
    })
})
//weather page
app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Please provide a search address'
        })        
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error});
        }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return res.send({error});
        }
        res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })
    });
});
});


//Sample for a query string
app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products: [],
    })
})

//error 404 handling page
app.get('/help/*', (req, res) => {
    res.render('404', { 
        title: '404',
        name: 'Uchiha Itachi',
        errorText: 'Help article not found' 
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Uchiha Itachi',
        errorText: 'Page not found'
    });
});

//start the server up
app.listen(8080, () => {
    console.log('Server is up on port 8080.');
});