const http=require('http')


const myServer=http.createServer((request,response)=>{
    console.log("A Request here.....", request.url);
    console.log("A Request header.....", request.headers);

    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    response.write("<b>Hello world Ç Ğ Ş İ Ü Ö</b> from HTTP Server...");
    response.write("<b>Hello world Ç Ğ Ş İ Ü Ö</b> from HTTP Server...");
    response.end();
})



myServer.listen(3000);


