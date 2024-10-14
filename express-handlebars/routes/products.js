const router = require('express').Router()

router.get('/', (req, res)=>{
    res.render('home', {docTitle:'Home Page'})
})

router.get('/login', (req, res)=>{
    res.render('auth/login', {docTitle: 'Login'})
})

router.get('/register', (req, res)=>{
    res.render('auth/register', {docTitle:'Sign Up'})
})



module.exports = router;