const http = require('http')

// http methods:GET-POST-PUT-DELETE


const server=http.createServer((req,res)=>{
    if(req.method==='GET'){
        if(req.url==='/'){
            res.write('this is a homepage.....')
        }else if(req.url==='/contact'){
            res.write('this is a Contact page')
        }else (res.write('404 Nor Found Page...'))
    }
   res.end()
});

server.listen('3000')