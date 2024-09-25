const express = require('express');
const fs = require('fs');
const app = express()

const PORT = 8080;


// app.use((req, res, next)=>{
//     req.userId='1234'
//     console.log('First Middleware')
// res.end('Express App')
// })


// app.use((req, res, next)=>{
//     console.log('Second Middleware')
//     next()
// })


// app.use((req, res, next)=>{
//     console.log('Final Middleware')
//     console.log(req.userId)
//     res.end('Express app')
// })


// app.use('/json', (req, res)=>{
//     res.send({name:'John Doe', age:26})
// })

// app.use('/', (req, res)=>{
//     res.send(`<h1> Express App </h1>`)
// })




app.use(express.urlencoded({extended:false}))
app.get('/' , (req, res)=>{
res.send(`
      <form method="post" action="/message">
              <input placeholder="Enter a note" name="message"/><br/>
              <button type="submit">ADD</button>
              </form>

    `)
})

app.post('/message', (req, res)=>{
    fs.writeFileSync('./message', req.body.message)
    res.redirect('/')

})


app.listen(PORT, console.log(`Server is running ...`))