const { AsyncResource } = require('async_hooks')
const express = require('express')
const app = express()
const port = 3000

// GET POST PUT DELETE------------> ALL
// app.get('/', (req, res) => res.send('Hello World!'))
app.set('view engine', 'pug')


//Optionak
// app.get('/Cont?act', (req, res) => res.send('Contact World!'))

// app.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))

// app.get('/Co?nta?ct', (req, res) => res.send('Contact World!'))

// ANY TEXT *
// app.get('/Con*tact', (req, res) => res.send('Contact World!'))

// PLUS => + (we ca right any quantity of previous letter before +)
// app.get('/Conta+ct', (req, res) => res.send('Contact World!'))

// ALL together + ? *
app.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))




// app.get('/About', (req , res)=>res.send('Hello World from get'))
// app.post('/About', (req , res)=>res.send('Hello World from post'))
// app.delete('/About', (req , res)=>res.send('Hello World from delete'))
// app.put('/About', (req , res)=>res.send('Hello World from put'))
// app.all('/About', (req , res)=>res.send('Hello World from all'))

// app.get('/User/:id', (req,res)=>{res.send(req.params)})
// app.get('/User/:id/:jobId', (req,res)=>{res.end('Id='+req.params.id+' JobId='+req.params.jobId)})

// apply for all
app.use((req,middleRes,next)=>{
    const isAuthorized = true;
    if(isAuthorized){
        next()
    }else{
         middleRes.send('You have no authotiry. Please login...')   
    }
})

// apply only for '/about
// app.use('/about',(req,middleRes,next)=>{
//     const isAuthorized = false;
//     if(isAuthorized){
//         next()
//     }else{
//          middleRes.send('You have no authotiry. Please login...')   
//     }
// })

// or import from another file 
// const isAuth = require('./helpers/isAuth')
// app.use('/about', isAuth)

const contact = require('./routers/Contact')
app.use('/api/',contact)

const about = require('./routers/About')
app.use('/',about)

const user = require('./routers/User')
app.use('/',user)

app.use((error,req,errMidRes,next)=>{
    errMidRes.status(error.status);
    errMidRes.render('error.pug',{message:error.message, status:error.status})
    })

app.listen(port, () => console.log(`Example app listening on port port!`))