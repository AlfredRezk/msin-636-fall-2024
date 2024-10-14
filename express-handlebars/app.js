const express = require('express')
const app = express();
const { engine}= require('express-handlebars')
require('colors')
require('dotenv').config();
const path = require('path');


// Import routes 
const prodRoutes = require('./routes/products');

// Configuration 
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const MODE = process.env.MODE || 'production';

// Configure the template engine
app.engine('hbs', engine({
    extname:'.hbs', 
    layoutsDir:'views/layouts',
    defaultLayout:'main.hbs',
    partialsDir:path.join(__dirname, 'views/partials')
}))
// Express settings
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'));
// Middlewares
app.use('/', prodRoutes);


app.listen(PORT, HOST, console.log(`Server running at ${MODE} mode - http://${HOST}:${PORT}`.green))
