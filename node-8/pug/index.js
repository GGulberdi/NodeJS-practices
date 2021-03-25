const express = require('express')
const app = express()
const port = 3000

app.set('view engine','pug')

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/', (req, res) => res.render('index.pug',{name:'Cortney', phone:'1-570-665-7364 x66846'}))
app.get('/', (req, res) => res.render('index',{name:'Cortney', phone:'1-570-665-7364 x66846'}))
app.get('/home', (req, res) => {res.render('home.pug')})
app.get('/contact', (req, res) => {res.render('contact.pug')})

app.listen(port, () => console.log(`Example app listening on port port!`))