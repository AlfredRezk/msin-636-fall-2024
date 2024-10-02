const express = require("express");
require('colors');
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config({path:'./config/app.env'});
const {v4:uuid} = require('uuid');

// Import routes 
const adminRoutes = require('./routes/admin');
const productsRoutes = require('./routes/products');

const app = express();

// Configurations
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
const MODE = process.env.MODE || "development";


// ------------------------------------------------------

const products = [];

// Middleware

// Parse form data and attach it to req.body
app.use(express.urlencoded({extended:false}))

app.use(productsRoutes)
app.use(adminRoutes)



// -----------------------------------------------------

// Listen to incoming requests
app.listen(
  PORT,
  HOST,
  console.log(`Server running on ${MODE} mode at http://${HOST}:${PORT}`.green.inverse),
);


module.exports = products