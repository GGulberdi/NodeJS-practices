const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello world from express js')
})

app.get('/About',(req,res)=>{
    res.send('Hello world from About Page')
})

app.get('/home', (req,res)=>{res.render('home.pug')})
app.get('/contact', (req,res)=>{res.render('contact.pug')})


app.listen(3005)

