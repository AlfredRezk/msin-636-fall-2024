const router = require('express').Router()
const products = require('../app')

// List all products
router.get('/', (req, res)=>{
    res.send(products)
  });
  
  
  // Fetch a single product
router.get('/products', (req, res)=>{});
  

module.exports = router