const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

// define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath)
//configure the partialsPath
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

 app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Daniel King'
    });
 });

 app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Daniel King'
    });
 });

 app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        description: 'How can we help you',
        name: 'Daniel King'
    });
 });

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Could not connect to the server, Check your internet connection'
        });
    };

    geocode(req.query.address, (err, { latitude, longitude, location }  = {}) => {
        if(err){
            return res.send({ err });
        }
        forecast(latitude, longitude, (err, forecastData) => {
            if(err){
                return res.send(err);
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });
          });  
    });
    // res.send({
    //     forecast: 'It is sunny',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // });
    console.log(req.query)
});

app.get('/products', (req, res) => {
    if (!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        description: 'Help article not found',
        name: 'Daniel King'
    })
})
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        description: 'error loading page',
        name: 'Daniel King'
    })
})
//start the server up using app.listen()
app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});