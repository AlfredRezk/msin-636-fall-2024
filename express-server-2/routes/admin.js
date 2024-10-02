const router = require('express').Router()
const products = require('../app')
// Render the add page
router.get('/add-product', (req, res)=>{
    res.send(`
      <form method="POST" action="/add-product">
        <input type="text" name="title" placeholder="Product Title"/> <br/>
        <input type="text" name="price" placeholder="Product Price"/> <br/>
        <input type="text" name="image" placeholder="Product Image"/> <br/>
        <label>Product Description</label> <br/>
        <textarea></textarea><br/>
        <button type="submit">ADD</button>
      </form>
      `)
  })
  // create product
  router.post('/add-product', (req, res)=>{
    req.body.id = uuid();
    products.push(req.body)
    res.redirect('/');
  });
 
  // Edit product 
  router.put('/products/', (req, res)=>{});
 
  // delet product 
  router.delete('/products', (req, res)=>{});


  module.exports = router;