const path = require('path')
const express = require('express');
const hbs = require('hbs');

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
        helpText: 'This is some helpfull page'
    })
})
//weather page
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Partly Sunny',
        location: 'Philadelphia'
    });
})

//start the server up
app.listen(3000, ()=> {
    console.log('Server is up on port 3000.')
})